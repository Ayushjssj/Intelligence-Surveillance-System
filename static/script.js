// ========= ALERT SYSTEM (For dashboard) ========= //
function triggerAlert() {
    const alertBox = document.getElementById('alertBox');
    if (alertBox) {
        alertBox.textContent = '🚨 Alert Triggered!';
        alertBox.style.backgroundColor = '#ef4444';

        setTimeout(() => {
            alertBox.textContent = 'System Active';
            alertBox.style.backgroundColor = '#22c55e';
        }, 5000);
    }
}

// You can call this from Python backend when a real alert happens
// Simulate alert every 10 seconds
setInterval(triggerAlert, 10000);


// ========= DARK MODE TOGGLE ========= //
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
}

window.onload = function() {
    // Persist dark mode
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    // Start live clock if dashboard
    if (document.getElementById('clock')) {
        setInterval(updateClock, 1000);
    }
};


// ========= TOAST MESSAGE ========= //
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    toast.style.opacity = 1;
    setTimeout(() => {
        toast.style.opacity = 0;
        setTimeout(() => toast.remove(), 1000);
    }, 3000);
}


// ========= LIVE CLOCK ========= //
function updateClock() {
    const clock = document.getElementById('clock');
    if (clock) {
        const now = new Date();
        clock.innerText = now.toLocaleTimeString();
    }
}