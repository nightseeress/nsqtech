// $(document).ready(function() {
//     // Transition effect for navbar 
//     $(window).scroll(function() {
//       // checks if window is scrolled more than 500px, adds/removes solid class
//       if($(this).scrollTop() > 500) { 
//           $('.navbar').addClass('solid');
//       } else {
//           $('.navbar').removeClass('solid');
//       }
//     });
// });



// const navEl = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 630) {
//         navEl.classList.add('navbar-scrolled')
//     } else if (window.scrollY < 630) {
//         navEl.classList.remove('navbar-scrolled')
//     }
// })

document.getElementById('scrollArrow').addEventListener('click', function() {
    // Calculate the percentage of the page height to scroll
    const percentageToScroll = 0.45; // Example: 50%

    // Calculate the position to scroll to
    const scrollPosition = document.body.scrollHeight * percentageToScroll;

    // Scroll smoothly to the calculated position
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  });