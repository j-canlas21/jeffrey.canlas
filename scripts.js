// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        navLinks.style.opacity = "1";
        navLinks.style.transform = "translateY(0)";
    } else {
        navLinks.style.opacity = "0";
        navLinks.style.transform = "translateY(-10px)";
        setTimeout(() => {
            navLinks.classList.remove('active'); // Hide after animation
        }, 300);
    }
});

