document.addEventListener("DOMContentLoaded", () => {
  const testimonials = Array.from(document.querySelectorAll(".testimonial"));
  if (!testimonials.length) return;

  let index = 0;
  testimonials[index].classList.add("active");

  setInterval(() => {
    testimonials[index].classList.remove("active");
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add("active");
  }, 7000);
});
