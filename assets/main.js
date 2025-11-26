// Simple testimonial auto-rotate (no impact on buttons/forms)

document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(document.querySelectorAll(".testimonial"));
  if (!items.length) return;

  let index = 0;
  items[index].classList.add("active");

  setInterval(() => {
    items[index].classList.remove("active");
    index = (index + 1) % items.length;
    items[index].classList.add("active");
  }, 7000);
});
