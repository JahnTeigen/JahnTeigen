document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Tak for at du tok kontakt! Vi svarer på henvendelsen din så fort som mulig.');
        contactForm.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger"); // The hamburger icon
    const navLinks = document.getElementById("nav-links"); // The navigation menu

    // Toggle the nav-links visibility on hamburger click
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show"); // Toggle 'show' class for the menu
        hamburger.classList.toggle("active"); // Animate the hamburger icon
    });
});

