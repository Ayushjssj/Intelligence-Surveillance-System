import os
import csv
import cv2
import time
import torch
from datetime import datetime
from flask import Flask, render_template, Response, redirect, request, session, url_for, flash

app = Flask(__name__)
app.secret_key = 'yoursecretkey'

# === YOLOv5 MODEL LOAD ===
model = torch.hub.load('yolov5', 'yolov5s', source='local')

# === SETUP DIRECTORIES ===
alert_dir = 'static/alerts'
os.makedirs(alert_dir, exist_ok=True)

log_file = 'alert_logs.csv'
if not os.path.exists(log_file):
    with open(log_file, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Timestamp', 'Alert'])

user_file = 'users.csv'
if not os.path.exists(user_file):
    with open(user_file, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['username', 'password'])  # header

# === HOME PAGE ===
@app.route('/')
def home():
    return render_template('home.html')

# === LOGIN PAGE ===
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        uname = request.form['username']
        pwd = request.form['password']

        with open(user_file, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                if row['username'] == uname and row['password'] == pwd:
                    session['username'] = uname
                    return redirect(url_for('dashboard'))

        return render_template('login.html', error='Invalid credentials')

    return render_template('login.html')

# === REGISTER PAGE ===
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form["username"]
        password = request.form["password"]
        confirm_password = request.form["confirm_password"]
        email = request.form["email"]
        confirm_email = request.form["confirm_email"]

        if email != confirm_email:
            flash("Emails do not match", "error")
            return redirect("/register")
        if password != confirm_password:
            flash("Passwords do not match", "error")
            return redirect("/register")
        if len(password) < 8:
            flash("Password must be at least 8 characters", "error")
            return redirect("/register")

        with open(user_file, 'a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([username, password])

        flash("Registration successful!", "success")
        return redirect("/login")

    return render_template("register.html")

# === DASHBOARD ===
@app.route('/dashboard')
def dashboard():
    if 'username' not in session:
        return redirect(url_for('login'))
    with open(log_file, 'r') as f:
        logs = list(csv.reader(f))[1:]
    return render_template('dashboard.html', logs=logs)

# === VIDEO STREAM ===
def gen_frames():
    cap = cv2.VideoCapture(0)
    frame_width = int(cap.get(3))
    frame_height = int(cap.get(4))

    alert_recording = False
    out = None
    last_alert_time = 0

    while True:
        success, frame = cap.read()
        if not success:
            break

        results = model(frame)
        labels = results.xyxyn[0][:, -1].numpy()

        if len(labels) > 0:
            now = time.time()
            if now - last_alert_time > 10:
                last_alert_time = now

                timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
                filename = f"{alert_dir}/alert_{timestamp}.mp4"
                out = cv2.VideoWriter(filename, cv2.VideoWriter_fourcc(*'mp4v'), 20.0, (frame_width, frame_height))
                alert_recording = True

                with open(log_file, 'a', newline='') as file:
                    writer = csv.writer(file)
                    writer.writerow([timestamp, 'Alert triggered'])

        if alert_recording and out:
            out.write(frame)

        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        yield (b'--frame\r\nContent-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()
    if out:
        out.release()

@app.route('/video_feed')
def video_feed():
    if 'username' not in session:
        return redirect(url_for('login'))
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

# === LOGOUT ===
@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))

# === RUN APP ===
if __name__ == '__main__':
    app.run(debug=True)
