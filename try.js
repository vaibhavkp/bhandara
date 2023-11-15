$(document).ready(function () {
    // Add smooth scrolling to all links with the class 'nav-link'
    $(".nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
});
// JavaScript for animations
const aboutUsSection = document.querySelector('#about-us');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
};

const aboutUsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add the animation classes when the section is in the viewport
            aboutUsSection.classList.add('about-us-show');
            aboutUsSection.querySelector('h2').classList.add('about-us-fade-in');
            aboutUsSection.querySelector('p').classList.add('about-us-fade-in');

            // Stop observing once the animations are applied
            aboutUsObserver.unobserve(aboutUsSection);
        }
    });
}, options);

aboutUsObserver.observe(aboutUsSection);
