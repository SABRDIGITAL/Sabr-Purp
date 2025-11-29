// main.js

document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link
  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll(".nav-links a[data-page-link]").forEach((link) => {
      if (link.dataset.pageLink === page) {
        link.classList.add("is-active");
      }
    });
  }

  // Testimonials rotator (6 businesses)
  const testimonials = Array.from(document.querySelectorAll(".testimonial"));
  const dots = Array.from(document.querySelectorAll(".testimonial-dot"));

  if (testimonials.length) {
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

  // Our work: modal previews
  const backdrop = document.querySelector(".modal-backdrop");
  if (backdrop) {
    const modalTitle = backdrop.querySelector(".modal-title");
    const modalBody = backdrop.querySelector(".modal-body");

    const closeModal = () => {
      backdrop.classList.remove("is-open");
    };

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });

    backdrop.querySelector(".modal-close").addEventListener("click", closeModal);

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
              <p>High-energy hero banner with strong headline, solid colour blocks and a clear “Book now” button.</p>
            </div>
            <div class="mini-site-section">
              <h3>Services</h3>
              <p>Three focused service cards with bright accents and simple explanations in plain language.</p>
            </div>
            <div class="mini-site-section">
              <h3>Gallery</h3>
              <p>Grid of large, swipe-friendly photos to show work, optimised for mobile first.</p>
            </div>
            <div class="mini-site-section">
              <h3>Contact</h3>
              <p>One page with opening times, map, quick contact form and direct links to message or call.</p>
            </div>
          `;
        } else if (type === "minimal-premium") {
          title = "Minimal & Premium Layout";
          html = `
            <div class="mini-site-section">
              <h3>Hero</h3>
              <p>Simple white-on-dark hero, one sentence of copy and a single strong call to action.</p>
            </div>
            <div class="mini-site-section">
              <h3>Proof Section</h3>
              <p>Before/after shots, key stats and a few short testimonials — no clutter, just trust.</p>
            </div>
            <div class="mini-site-section">
              <h3>Services Overview</h3>
              <p>Clean three-column services list with prices optional and “What’s included” bullets.</p>
            </div>
            <div class="mini-site-section">
              <h3>Contact & Booking</h3>
              <p>Flexible section that can link to booking tools, WhatsApp or a simple enquiry form.</p>
            </div>
          `;
        } else if (type === "sleek-future") {
          title = "Sleek, Future-Ready Site";
          html = `
            <div class="mini-site-section">
              <h3>Hero</h3>
              <p>Dark, cinematic hero with subtle animated grid, sharp typography and a confident headline.</p>
            </div>
            <div class="mini-site-section">
              <h3>How it works</h3>
              <p>Three–four step process presented as glowing stepping stones, easy to skim.</p>
            </div>
            <div class="mini-site-section">
              <h3>Work highlights</h3>
              <p>Scrolling strip of projects with short descriptions, focused on results for real businesses.</p>
            </div>
            <div class="mini-site-section">
              <h3>Contact</h3>
              <p>Direct paths to call, message or book a chat — no hunting for details.</p>
            </div>
          `;
        }

        modalTitle.textContent = title;
        modalBody.innerHTML = html;
        backdrop.classList.add("is-open");
      });
    });
  }
});
