// Typing Animation
const textArray = [
    "Future DevOps Engineer 🚀",
    "Cloud & Automation Enthusiast ☁️",
    "CI/CD Learner 🔥"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    const display = document.getElementById("typing");

    if (index >= textArray.length) index = 0;

    currentText = textArray[index];

    if (!isDeleting) {
        display.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        display.textContent = currentText.substring(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            index++;
        }
    }

    setTimeout(type, isDeleting ? 40 : 80);
}

type();

// Reveal Animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            reveal.classList.add("active");

            // Animate skill bars
            const bars = reveal.querySelectorAll(".progress-bar");
            bars.forEach(bar => {
                bar.style.width = bar.getAttribute("data-width");
            });
        }
    });
});

// Particles
tsParticles.load("tsparticles", {
    particles: {
        number: { value: 50 },
        color: { value: "#3b82f6" },
        links: {
            enable: true,
            color: "#3b82f6",
            distance: 150
        },
        move: { enable: true, speed: 1 },
        size: { value: 2 }
    }
});