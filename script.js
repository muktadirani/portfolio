// ================= Mobile menu toggle =================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// ================= Active link on scroll + sticky header =================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const current = document.querySelector('header nav a[href="#' + id + '"]');
            if (current) current.classList.add('active');
        }
    });

    header.classList.toggle('sticky', top > 100);

    // close the mobile menu when the user scrolls
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// close the mobile menu after tapping a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// ================= Typing animation =================
if (typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
        strings: ['Full Stack Developer', 'Cyber Security Engineer', 'Web Developer', 'Software Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });
} else {
    // fallback if the CDN is blocked
    document.querySelector('.multiple-text').textContent = 'Full Stack Developer';
}

// ================= "Read more" in About =================
const readMoreBtn = document.querySelector('.read-more-btn');
const aboutText = document.querySelector('.about-content p');

readMoreBtn.addEventListener('click', e => {
    e.preventDefault();
    aboutText.classList.toggle('expanded');
    readMoreBtn.textContent = aboutText.classList.contains('expanded') ? 'Read less' : 'Read more';
});

// ================= Footer year =================
document.getElementById('year').textContent = new Date().getFullYear();
