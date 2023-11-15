// $(document).ready(function () {
//   // Smooth scrolling for section links
//   $("a").on('click', function (event) {
//       if (this.hash !== "") {
//           event.preventDefault();
//           var hash = this.hash;
//           $('html, body').animate({
//               scrollTop: $(hash).offset().top
//           }, 1000);
//       }
//   });
// });
// JavaScript for smooth scrolling and link activation
// document.addEventListener('DOMContentLoaded', function () {
//     const navLinks = document.querySelectorAll('ul.right li a');

//     navLinks.forEach(function (link) {
//         link.addEventListener('click', smoothScroll);
//     });

//     function smoothScroll(e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         const targetSection = document.getElementById(targetId);

//         window.scrollTo({
//             top: targetSection.offsetTop,
//             behavior: 'smooth'
//         });
//     }

//     // Update active link on scroll
//     window.addEventListener('scroll', updateActiveLink);

//     function updateActiveLink() {
//         const fromTop = window.scrollY;

//         navLinks.forEach(function (link) {
//             const sectionId = link.getAttribute('href').substring(1);
//             const section = document.getElementById(sectionId);

//             if (section.offsetTop <= fromTop + 100 && section.offsetTop + section.offsetHeight > fromTop + 100) {
//                 link.classList.add('active');
//             } else {
//                 link.classList.remove('active');
//             }
//         });
//     }
// });