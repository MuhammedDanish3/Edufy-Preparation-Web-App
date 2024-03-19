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


// Get the account link element by its ID
const accountLink = document.getElementById('accountLink');

// Add a click event listener to the account link
accountLink.addEventListener('click', function() {
    // Check the user type stored in session or local storage
    const userType = localStorage.getItem('userType');
     // Assuming userType is stored in local storage

    // Redirect the user to the appropriate dashboard based on their user type
    if (userType === 'student') {
        window.location.href = 'student_dashboard.html';
    } else if (userType === 'teacher') {
        window.location.href = 'teacher_dashboard.html';
    } else {
        // Handle the case where the user type is not set or unknown
        alert('User type not recognized. Please log in again.');
        // Redirect to login page or handle appropriately
        window.location.href = 'login.html'; // login page
    }
});

