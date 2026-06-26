// ===============================
// CREATE STARS
// ===============================

const stars = document.getElementById("stars");

for (let i = 0; i < 250; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 3 + "s";

    const size = Math.random() * 2 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    stars.appendChild(star);
}

// ===============================
// COUNTDOWN
// ===============================

// IMPORTANT:
// Set the year to the birthday year.
// Example: 2026-07-01

const birthday = new Date("2026-07-01T00:00:00");

function updateCountdown() {

    const now = new Date();

    const distance = birthday - now;

if (distance <= 0) {

    clearInterval(countdownTimer);

    // Hide countdown section
   document.getElementById("countdown").style.display = "none";

document.querySelector(".subtitle").innerHTML =
"✨ The wait is finally over... Scroll down ❤️";

document.querySelector(".scrollHint").style.display = "block";

document.querySelector(".hero h1").innerHTML =
"Happy Birthday<br>Anushka ❤️";

document.querySelector(".tag").innerHTML =
"🎉 It's Finally Here 🎉";

    // Show all hidden sections
    document.getElementById("memories").style.display = "block";

    document.getElementById("celebration").style.display = "flex";

    document.getElementById("cakeSection").style.display = "flex";

    document.querySelectorAll(".letters").forEach(section=>{
        section.style.display="flex";
    });

    // Smooth scroll to memories
    document.getElementById("memories").scrollIntoView({
        behavior:"smooth"
    });

    return;
}

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

}

updateCountdown();

const countdownTimer = setInterval(updateCountdown,1000);

// ===============================
// GSAP INTRO
// ===============================

gsap.from(".tag", {
    opacity: 0,
    y: -40,
    duration: 1
});

gsap.from("h1", {
    opacity: 0,
    y: 60,
    duration: 1.3,
    delay: 0.2
});

gsap.from(".card", {
    opacity: 0,
    y: 60,
    stagger: 0.15,
    duration: 0.8,
    delay: 0.8
});

gsap.from(".subtitle", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1.4
});

gsap.to("#moon", {
    y: -15,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// ===============================
// SHOOTING STARS
// ===============================

function createShootingStar(){

    const star=document.createElement("div");

    star.className="shootingStar";

    star.style.left=Math.random()*window.innerWidth+"px";
    star.style.top=Math.random()*220+"px";

    document.body.appendChild(star);

    gsap.to(star,{

        x:500,
        y:250,
        opacity:0,
        duration:1.3,
        ease:"power2.out",

        onComplete(){

            star.remove();

        }

    });

}

setInterval(createShootingStar, 6000);


// ===============================
// MAGIC FIREFLIES
// ===============================

function createFirefly() {

    const firefly = document.createElement("div");
    firefly.className = "firefly";

    firefly.style.left = Math.random() * window.innerWidth + "px";
    firefly.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(firefly);

    animateFirefly(firefly);
}

function animateFirefly(firefly) {

    function move() {

        gsap.to(firefly, {

            x: gsap.utils.random(-80, 80),
            y: gsap.utils.random(-80, 80),

            duration: gsap.utils.random(4, 8),

            ease: "sine.inOut",

            onComplete: move

        });

    }

    move();

    gsap.to(firefly, {

        opacity: 0.2,

        duration: 1,

        repeat: -1,

        yoyo: true

    });

}

for (let i = 0; i < 10; i++) {

    createFirefly();

}
// ==========================
// MUSIC
// ==========================

const music=document.getElementById("bgMusic");
const button=document.getElementById("musicBtn");

let playing=false;

button.onclick=()=>{

    if(!playing){

        music.play();

        playing=true;

        button.innerHTML="⏸ Pause Music";

    }else{

        music.pause();

        playing=false;

        button.innerHTML="🎵 Play Music";

    }

};


// Hide surprise before birthday

document.getElementById("memories").style.display="none";

document.getElementById("celebration").style.display="none";

document.getElementById("cakeSection").style.display="none";

document.querySelectorAll(".letters").forEach(section=>{
    section.style.display="none";
});