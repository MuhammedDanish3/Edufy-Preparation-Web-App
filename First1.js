var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroundWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigator: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
  });

  // Get the button element
const signupBtn = document.getElementById('signup-btn');

// Add a click event listener to the button
signupBtn.addEventListener('click', function() {
    // Redirect to the signup page
    window.location.href = 'signup.html'; // Change 'signup.html' to the path of your signup page
});
// Get the "Log in" text element by its ID
const loginLink = document.getElementById('loginLink');

// Add a click event listener to the "Log in" text
loginLink.addEventListener('click', function() {
    // Redirect the user to the login page
    window.location.href = 'login.html';
});

