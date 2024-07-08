document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typed.js initialization
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
});
// Testimonial Slider
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.classList.add('active');
            } else {
                testimonial.classList.remove('active');
            }
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    nextButton.addEventListener('click', nextTestimonial);
    prevButton.addEventListener('click', prevTestimonial);

    // Auto-rotate testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);

    // Show the first testimonial initially
    showTestimonial(currentTestimonial);
});
// Client Logo Slider
const logoSlider = document.querySelector('.client-logo-slider');
let isDown = false;
let startX;
let scrollLeft;

logoSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - logoSlider.offsetLeft;
    scrollLeft = logoSlider.scrollLeft;
});

logoSlider.addEventListener('mouseleave', () => {
    isDown = false;
});

logoSlider.addEventListener('mouseup', () => {
    isDown = false;
});

logoSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - logoSlider.offsetLeft;
    const walk = (x - startX) * 3;
    logoSlider.scrollLeft = scrollLeft - walk;
});

// Client Logo Slider
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');

// Clone the slides and append them to create a seamless loop
slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    sliderTrack.appendChild(clone);
});

// Pause animation on hover
sliderTrack.addEventListener('mouseenter', () => {
    sliderTrack.style.animationPlayState = 'paused';
});

sliderTrack.addEventListener('mouseleave', () => {
    sliderTrack.style.animationPlayState = 'running';
});

// Add this for the cyber button effect
document.querySelector('.cyber-button').addEventListener('mouseover', function() {
    this.style.color = '#255784';
    this.style.background = '#00fffc';
    this.style.boxShadow = '0 0 10px #00fffc, 0 0 40px #00fffc, 0 0 80px #00fffc';
});

document.querySelector('.cyber-button').addEventListener('mouseout', function() {
    this.style.color = '#00fffc';
    this.style.background = 'transparent';
    this.style.boxShadow = 'none';
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLinks.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Function to set active menu item
    function setActiveMenuItem() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Function to change navbar color on scroll
    function changeNavbarColor() {
        if (window.scrollY > window.innerHeight - navbar.clientHeight) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Set initial state
    setActiveMenuItem();
    changeNavbarColor();

    // Event listener for scroll
    window.addEventListener('scroll', () => {
        setActiveMenuItem();
        changeNavbarColor();
    });

    // Event listeners for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - navbar.clientHeight,
                behavior: 'smooth'
            });

            // Set active class
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});