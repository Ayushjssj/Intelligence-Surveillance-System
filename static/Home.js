// Scroll Animation
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.classList.add('reveal');
        }
    });
});

// Language Switcher
// Language Switcher
const translations = {
    hi: {
        heroTitle: "इंटेलिजेंट सर्विलांस सिस्टम में आपका स्वागत है",
        heroDesc: "एआई आधारित रियल-टाइम वीडियो मॉनिटरिंग और अलर्ट सिस्टम",
        heroBtn: "डैशबोर्ड पर जाएं"
    },
    en: {
        heroTitle: "Welcome to Intelligent Surveillance System",
        heroDesc: "AI-powered real-time video monitoring and alerting system",
        heroBtn: "Go to Dashboard"
    }
};

function switchLang(lang) {
    const t = translations[lang];
    if (!t) return;
    document.getElementById('hero-title').textContent = t.heroTitle;
    document.getElementById('hero-desc').textContent = t.heroDesc;
    document.getElementById('hero-btn').textContent = t.heroBtn;
}

document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector(".bg-video");
    if (video) {
        video.playbackRate = 0.025; // Half speed (adjust as needed)
    }
});