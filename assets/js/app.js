// Fade-in on scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Testimonials carousel (if present)
const track = document.querySelector(".testimonials-track");
if (track) {
  const slides = Array.from(track.children);
  let currentIndex = 0;

  const goToSlide = index => {
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }, 7000); // 7 seconds
}

// Before/after slider (if present)
const range = document.getElementById("beforeAfterRange");
const overlay = document.querySelector(".before-after-overlay");
const handle = document.querySelector(".before-after-handle");

if (range && overlay && handle) {
  const updateSlider = value => {
    const percent = Number(value);
    overlay.style.width = `${percent}%`;
    handle.style.left = `${percent}%`;
  };

  updateSlider(range.value);

  range.addEventListener("input", e => {
    updateSlider(e.target.value);
  });
}
