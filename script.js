// tiny, fast, no drama

const els = document.querySelectorAll(".reveal");
const toast = document.getElementById("toast");
const toastText = document.getElementById("toastText");
const cta = document.getElementById("cta");

let toastTimer = null;

function showToast(message) {
  toastText.textContent = message;
  toast.classList.add("show");

  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1600);
}

// Fade-in on scroll
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12 }
);

els.forEach((el) => io.observe(el));

// CTA
cta?.addEventListener("click", () => {
  showToast("Queue gestartet.");
});

// Small extra: press "Q" to queue (meme)
window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "q") showToast("Q gedrückt. Schicksal läuft.");
});
