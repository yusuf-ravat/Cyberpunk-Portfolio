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

//mobile view
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



document.addEventListener('DOMContentLoaded', () => {
    // Particles.js configuration
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00fffc" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00fffc",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
    

    // Cyber button effect
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
});


document.addEventListener('DOMContentLoaded', () => {
    const loaderWrapper = document.getElementById('loader-wrapper');
    const loaderContent = document.querySelector('.loader-content');
    const errorMessage = document.querySelector('.error-message');
    const progressBar = document.querySelector('.progress');
    const retryBtn = document.querySelector('.retry-btn');
    const mainContent = document.getElementById('main-content');


    function checkInternetConnection() {
        return navigator.onLine;
    }

    function showErrorMessage() {
        loaderContent.style.display = 'none';
        errorMessage.style.display = 'block';
    }

    function hideErrorMessage() {
        loaderContent.style.display = 'block';
        errorMessage.style.display = 'none';
    }

    function simulateLoading() {
        let progress = 0;
        let progress_speed=100;
        const interval = setInterval(() => {
            if (!checkInternetConnection()) {
                clearInterval(interval);
                showErrorMessage();
                return;
            }

            progress += Math.random() * 10;
            
            if (progress >progress_speed) progress = progress_speed;
            progressBar.style.width = `${progress}%`;
            if (progress === progress_speed) {
                clearInterval(interval);
                setTimeout(() => {
                    loaderWrapper.style.opacity = '0';
                    mainContent.style.opacity = '1';
                    setTimeout(() => {
                        loaderWrapper.style.display = 'none';
                    }, 400);
                }, 400);
            }
        }, 100);
    }

    retryBtn.addEventListener('click', () => {
        if (checkInternetConnection()) {
            hideErrorMessage();
            simulateLoading();
            
        }
    });
    retryBtn.addEventListener('click', () => {
        // Refresh the page when the RECONNECT button is clicked
        window.location.reload();
    });
    simulateLoading();
});
//    document.getElementById('resume-link').addEventListener('click', function(event) {
//                     event.preventDefault();
//                     window.open(this.href, '_blank');
//                 });
// document.addEventListener('DOMContentLoaded', () => {
//     const blogSlider = document.querySelector('.blog-slider');
//     let isDown = false;
//     let startX;
//     let scrollLeft;

//     blogSlider.addEventListener('mousedown', (e) => {
//         isDown = true;
//         startX = e.pageX - blogSlider.offsetLeft;
//         scrollLeft = blogSlider.scrollLeft;
//     });

//     blogSlider.addEventListener('mouseleave', () => {
//         isDown = false;
//     });

//     blogSlider.addEventListener('mouseup', () => {
//         isDown = false;
//     });

//     blogSlider.addEventListener('mousemove', (e) => {
//         if (!isDown) return;
//         e.preventDefault();
//         const x = e.pageX - blogSlider.offsetLeft;
//         const walk = (x - startX) * 2;
//         blogSlider.scrollLeft = scrollLeft - walk;
//     });
// });