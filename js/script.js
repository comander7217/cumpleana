// ==========================
// ELEMENTOS
// ==========================

const openBtn = document.getElementById("openInvitation");
const welcomeScreen = document.getElementById("welcome-screen");
const invitation = document.getElementById("invitation");

const music = document.getElementById("musica");
const musicBtn = document.getElementById("musicBtn");

// ==========================
// ABRIR INVITACIÓN
// ==========================

openBtn.addEventListener("click", () => {

    welcomeScreen.style.display = "none";

    invitation.classList.remove("hidden");

    music.play();

    launchConfetti();
});

// ==========================
// BOTÓN MÚSICA
// ==========================



// ==========================
// CUENTA REGRESIVA
// ==========================

// IMPORTANTE:
// Cambia la fecha según el año real

const targetDate = new Date(
    "June 20, 2026 15:00:00"
).getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.querySelector(".countdown").innerHTML = `
            <h2>¡La celebración ha comenzado! 🎉</h2>
        `;
    }

}, 1000);

// ==========================
// REVEAL AL HACER SCROLL
// ==========================

function revealElements() {

    const reveals =
        document.querySelectorAll(".reveal");

    reveals.forEach((element) => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");
        }
    });
}

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();

// ==========================
// CORAZONES FLOTANTES
// ==========================

const heartsContainer =
    document.getElementById("hearts-container");

function createHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "absolute";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.bottom = "-20px";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.color =
        "rgba(197,165,114,.6)";

    heart.style.animation =
        `float ${Math.random() * 3 + 5}s linear forwards`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);
}

setInterval(createHeart, 700);

// ==========================
// ANIMACIÓN CORAZONES
// ==========================

const style = document.createElement("style");

style.innerHTML = `
@keyframes float {

    from {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 1;
    }

    to {

        transform:
            translateY(-110vh)
            rotate(360deg);

        opacity: 0;
    }
}
`;

document.head.appendChild(style);

// ==========================
// CONFETI
// ==========================

function launchConfetti() {

    const duration = 3000;

    const animationEnd =
        Date.now() + duration;

    const defaults = {

        startVelocity: 30,

        spread: 360,

        ticks: 60,

        zIndex: 9999
    };

    function randomInRange(min, max) {

        return Math.random() *
            (max - min) + min;
    }

    const interval = setInterval(() => {

        const timeLeft =
            animationEnd - Date.now();

        if (timeLeft <= 0) {

            return clearInterval(interval);
        }

        const particleCount =
            50 * (timeLeft / duration);

        confetti({

            ...defaults,

            particleCount,

            origin: {
                x: randomInRange(0.1, 0.3),
                y: Math.random() - 0.2
            }
        });

        confetti({

            ...defaults,

            particleCount,

            origin: {
                x: randomInRange(0.7, 0.9),
                y: Math.random() - 0.2
            }
        });

    }, 250);
}
