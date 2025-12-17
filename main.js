// main.js

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ACTIVE NAV LINK
     ========================= */

  const page = document.body.dataset.page;
  if (page) {
    document
      .querySelectorAll(".nav-links a[data-page-link]")
      .forEach((link) => {
        if (link.dataset.pageLink === page) {
          link.classList.add("is-active");
        }
      });
  }

  /* =========================
     TESTIMONIAL ROTATOR
     ========================= */

  const testimonials = Array.from(document.querySelectorAll(".testimonial"));
  const dots = Array.from(document.querySelectorAll(".testimonial-dot"));

  if (testimonials.length && dots.length) {
    let tIndex = 0;

    const showTestimonial = (i) => {
      testimonials.forEach((t, idx) => {
        t.classList.toggle("testimonial-active", idx === i);
      });
      dots.forEach((d, idx) => {
        d.classList.toggle("is-active", idx === i);
      });
      tIndex = i;
    };

    showTestimonial(0);

    setInterval(() => {
      const next = (tIndex + 1) % testimonials.length;
      showTestimonial(next);
    }, 6000);
  }

  /* =========================
     OUR WORK MODAL
     ========================= */

  const backdrop = document.querySelector(".modal-backdrop");

  if (backdrop) {
    const modalTitle = backdrop.querySelector(".modal-title");
    const modalBody = backdrop.querySelector(".modal-body");
    const modalClose = backdrop.querySelector(".modal-close");

    const closeModal = () => {
      backdrop.classList.remove("is-open");
    };

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });

    if (modalClose) {
      modalClose.addEventListener("click", closeModal);
    }

    document.querySelectorAll("[data-work-preview]").forEach((card) => {
      card.addEventListener("click", () => {
        const type = card.dataset.workPreview;

        let title = "";
        let html = "";

        if (type === "bold-playful") {
          title = "Bold & Playful Studio";
          html = `
            <div class="mini-site-section">
              <h3>Hero</h3>
              <p>High-energy hero banner with strong headline and direct CTA.</p>
            </div>
          `;
        }

        if (type === "minimal-premium") {
          title = "Minimal & Premium Layout";
          html = `
            <div class="mini-site-section">
              <h3>Proof-led structure</h3>
              <p>Clean sections focused on trust and clarity.</p>
            </div>
          `;
        }

        if (type === "sleek-future") {
          title = "Sleek Future Build";
          html = `
            <div class="mini-site-section">
              <h3>Modern layout</h3>
              <p>Structured, confident and conversion-focused.</p>
            </div>
          `;
        }

        modalTitle.textContent = title;
        modalBody.innerHTML = html;
        backdrop.classList.add("is-open");
      });
    });
  }

  /* =========================
     ACCORDION LOGIC (FAQ + PROCESS)
     ========================= */

  const accordions = document.querySelectorAll(
    ".faq-item, .process-step"
  );

  accordions.forEach((item) => {
    const trigger =
      item.querySelector("summary") || item;

    trigger.addEventListener("click", (e) => {
      // prevent default for summary tags
      if (trigger.tagName === "SUMMARY") {
        e.preventDefault();
      }

      const isOpen =
        item.hasAttribute("open") || item.classList.contains("is-active");

      // close all others
      accordions.forEach((other) => {
        if (other !== item) {
          other.removeAttribute("open");
          other.classList.remove("is-active");
        }
      });

      // toggle current
      if (!isOpen) {
        item.setAttribute("open", "");
        item.classList.add("is-active");
      } else {
        item.removeAttribute("open");
        item.classList.remove("is-active");
      }
    });
  }

});
