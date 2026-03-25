// ================= TYPING ANIMATION =================
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

    if (!display) return;

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


// ================= REVEAL ANIMATION =================
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


// ================= PARTICLES =================
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


// ================= CONTACT FORM (FIXED) =================
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

if (form) {
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        try {
            const response = await fetch("https://backend-2-v4nk.onrender.com/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            let result = {};

            // ✅ Fix for "undefined error"
            try {
                result = await response.json();
            } catch {
                throw new Error("Invalid server response");
            }

            if (response.ok) {
                successMsg.style.display = "block";
                form.reset();
            } else {
                alert("Error: " + (result.message || "Something went wrong"));
            }

        } catch (error) {
            alert("Server Error: " + error.message);
            console.log(error);
        }
    });
}
