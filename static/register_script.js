// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');

    // Optionally toggle emoji
    const btn = document.querySelector('.dark-toggle-btn');
    btn.textContent = isDark ? '☀️ Toggle Light Mode' : '🌙 Toggle Dark Mode';
}

document.addEventListener('DOMContentLoaded', () => {
    // Load dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        const btn = document.querySelector('.dark-toggle-btn');
        if (btn) btn.textContent = '☀️ Toggle Light Mode';
    }

    // Form Validation
    const form = document.querySelector('form');
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirm_email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');

    form.addEventListener('submit', function(e) {
        let messages = [];

        if (email.value !== confirmEmail.value) {
            messages.push('Emails do not match.');
        }

        if (password.value !== confirmPassword.value) {
            messages.push('Passwords do not match.');
        }

        if (password.value.length < 8) {
            messages.push('Password must be at least 8 characters.');
        }

        if (messages.length > 0) {
            e.preventDefault();
            alert(messages.join('\n'));
        }
    });
});