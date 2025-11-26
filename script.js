// FAQ dropdowns
document.querySelectorAll('.faq-item').forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    });
});
