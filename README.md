# 🛡️ **Intelligent Surveillance System**
<div align="center"> <img src="https://img.shields.io/badge/Status-Active-brightgreen" /> <img src="https://img.shields.io/badge/License-MIT-blue" /> <img src="https://img.shields.io/badge/Made%20with-Flask%20%26%20YOLOv5-blueviolet" /> </div>

# 🛡️ **Intelligent Surveillance System**

An **AI-powered Intelligent Surveillance System** built with **Flask**, **YOLOv5**, and **OpenCV**, enabling real-time video monitoring, user authentication, and automatic alert logging.

---

## 📸 **Features**

- 🏠 **Home Page** with smooth navigation
- 🔐 **Secure Login and Registration**
- 🎥 **Real-Time Live Video Streaming**
- 🚨 **AI-Based Object Detection Alerts**
- 🗃️ **Alert Logging** with Timestamps
- 🔓 **Logout Functionality**

---

## 🛠️ **Technologies Used**

- **Python 3.11+**
- **Flask** – Lightweight web framework
- **OpenCV** – Real-time video processing
- **YOLOv5** – Object detection (local clone)
- **CSV** – User data & alert logging

---

## 📁 **Project Folder Structure**

```\n
Intelligent-Surveillance-System/
│
├── app/                        # Main application code
│   └── surveillance_web.py      # Flask backend server
│
├── templates/                   # HTML Templates
│   ├── home.html                 # Home page
│   ├── login.html                # Login page
│   ├── register.html             # Registration page
│   └── dashboard.html            # Dashboard page
│
├── static/                      # Static files (CSS, JS, Videos)
│   ├── css/
│   │   └── style.css             # Main styling
│   ├── js/
│   │   └── script.js             # Custom JavaScript
│   ├── alerts/                   # Saved alert videos (created automatically)
│   └── surveillance.mp4          # Background video for home page (optional)
│
├── users.csv                    # User accounts (username, password)
├── alert_logs.csv               # Alert logs with timestamps
├── LICENSE                       # MIT License
├── README.md                     # Project documentation
├── .gitignore                    # Ignore Python cache, venv, etc.
├── requirements.txt              # List of Python dependencies
└── yolov5/                       # YOLOv5 model (local repo cloned here)
```
## 🚀 **Setup Instructions**

### 🔧 **1. Clone the Repository**

```bash
-git clone https://github.com/YourUsername/Intelligent-Surveillance-System.git
-cd Intelligent-Surveillance-System
```

## 🧪 **2. Install Python Libraries**
-Ensure **Python 3.8+** is installed.

**Install all requirements:**

```bash
-pip install -r requirements.txt
```

```bash
If requirements.txt is missing, install manually:
  -pip install flask flask-mail opencv-python torch pandas
```
## 🧠 **3. Clone YOLOv5 Model**

**Clone the YOLOv5 repository:**

```bash
-git clone https://github.com/ultralytics/yolov5
```
This creates the required /yolov5 directory.

**✅ YOLOv5 is now ready!**

## 🚀 **4. Run the Flask Application**
```bash
-python app/surveillance_web.py
```
Visit your app in the browser at:

**👉 http://127.0.0.1:5000**

## 📜 **License**
```bash
-This project is licensed under the MIT License.
```

## 🙏 **Acknowledgements**
```bash
-Ultralytics YOLOv5
-Flask
-OpenCV
-Python Community
```

## ⭐ **Give this project a star if you like it!**

---

# 📁 `.gitignore`

```bash
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*.pyo
*.pyd

# Flask cache
instance/
.webassets-cache

# VSCode settings
.vscode/

# Environment
env/
venv/
ENV/

# Pytest cache
.pytest_cache/

# Excel or temporary files
*.xlsx
*.csv

# YOLOv5 weights (if any)
*.pt
```

## 📝 **LICENSE (MIT License)**
```bash
This project is licensed under the MIT License.
```
