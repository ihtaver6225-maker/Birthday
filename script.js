// Birthday website interactions for Rishikesh KA
const $ = (selector) => document.querySelector(selector);

// Mobile navigation
$("#menuToggle").addEventListener("click", () => {
  $("#navLinks").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => $("#navLinks").classList.remove("open"));
});

// Scroll reveal animation
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(item => revealObserver.observe(item));

// Quotes carousel
const quotes = [
  "May your year be filled with the kind of happiness that stays long after the candles go out.",
  "You deserve a life full of big dreams, peaceful days, unexpected adventures, and endless reasons to smile.",
  "May every new chapter bring you closer to the person you dream of becoming.",
  "The world is brighter with you in it. Never forget how special you are.",
  "Here's to more laughter, more memories, and more beautiful moments waiting just around the corner."
];
let quoteIndex = 0;
$("#nextQuote").addEventListener("click", () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  $("#quoteText").textContent = quotes[quoteIndex];
});

// Photo lightbox
const lightbox = $("#lightbox");
document.querySelectorAll(".photo-card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    $("#lightboxImage").src = img.src;
    $("#lightboxCaption").textContent = card.dataset.caption || "";
    lightbox.classList.add("show");
  });
});
function closeLightbox() { lightbox.classList.remove("show"); }
$("#lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLightbox();
});

// Background music: browsers require a visitor click before audio can play.
const audio = $("#birthdayAudio");
const record = $(".record");
function updateMusicUI(playing) {
  $("#musicLabel").textContent = playing ? "Pause music" : "Play music";
  $("#bigMusicToggle").textContent = playing ? "Ⅱ" : "▶";
  $("#trackStatus").textContent = playing ? "Now playing for you ♡" : "Ready when you are";
  record.classList.toggle("playing", playing);
}
async function toggleMusic() {
  if (audio.paused) {
    try {
      await audio.play();
      updateMusicUI(true);
    } catch (error) {
      $("#trackStatus").textContent = "Add music/birthday-song.mp3 to play";
      updateMusicUI(false);
    }
  } else {
    audio.pause();
    updateMusicUI(false);
  }
}
$("#musicToggle").addEventListener("click", toggleMusic);
$("#bigMusicToggle").addEventListener("click", toggleMusic);
audio.addEventListener("ended", () => updateMusicUI(false));
audio.addEventListener("pause", () => updateMusicUI(false));
audio.addEventListener("play", () => updateMusicUI(true));

// Secret envelope reveal
$("#openLetter").addEventListener("click", () => {
  const button = $("#openLetter");
  const message = $("#secretMessage");
  const isOpen = button.classList.toggle("opened");
  if (isOpen) {
    message.classList.add("show");
    button.setAttribute("aria-label", "Secret message opened");
    launchConfetti(55);
    message.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    message.classList.remove("show");
    button.setAttribute("aria-label", "Open your secret message");
  }
});

// Cake candles and celebration
$("#blowCandles").addEventListener("click", () => {
  const cake = $(".cake");
  const message = $("#cakeMessage");
  const button = $("#blowCandles");
  const blown = cake.classList.toggle("blown");
  if (blown) {
    message.textContent = "Wish sent into the universe! Happy birthday, Rishikesh! 🎉";
    button.textContent = "Light the candles again";
    launchConfetti(120);
  } else {
    message.textContent = "Make a wish, Rishikesh! ✨";
    button.textContent = "Blow out the candles ✨";
  }
});

// Confetti animation (used for the secret and cake surprise)
function launchConfetti(amount = 80) {
  const layer = $("#confetti-layer");
  const colors = ["#e98eaa", "#f4bfd0", "#d9a7d1", "#f6d58d", "#ffffff", "#c66f91"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = (Math.random() * 0.9) + "s";
    piece.style.animationDuration = (2.2 + Math.random() * 1.8) + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 4500);
  }
}

// Small welcome burst after the page loads
window.addEventListener("load", () => {
  setTimeout(() => launchConfetti(35), 700);
});
