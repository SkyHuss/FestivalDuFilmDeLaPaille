// document.addEventListener('DOMContentLoaded', function() {
//     const headerElement = document.querySelector('header');
    
//     fetch('/components/header.html')
//         .then(response => response.text())
//         .then(data => {
//             headerElement.innerHTML = data;
            
//             // Mettre en évidence le lien actif
//             const currentPage = window.location.pathname.split('/').pop();
//             const navLinks = document.querySelectorAll('nav ul li a');
            
//             navLinks.forEach(link => {
//                 if (link.getAttribute('href') === currentPage) {
//                     link.classList.add('active');
//                 }
//             });
//         });
// });