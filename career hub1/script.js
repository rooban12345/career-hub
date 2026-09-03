// ========================================
// STUDENT REGISTRATION - JAVASCRIPT
// ========================================


// Get the form
const form = document.querySelector("form");


// Form Submit Event
form.addEventListener("submit", function (event) {

    // Stop page refresh
    event.preventDefault();


    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const course = document.getElementById("course").value;
    const college = document.getElementById("college").value.trim();
    const year = document.getElementById("year").value;
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;


    // ========================================
    // NAME VALIDATION
    // ========================================

    if (name === "") {

        alert("Please enter your full name.");

        return;
    }


    if (name.length < 3) {

        alert("Name must contain at least 3 characters.");

        return;
    }


    // ========================================
    // EMAIL VALIDATION
    // ========================================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }


    // ========================================
    // PHONE VALIDATION
    // ========================================

    const phonePattern = /^[0-9]{10}$/;


    if (phone === "") {

        alert("Please enter your phone number.");

        return;
    }


    if (!phonePattern.test(phone)) {

        alert("Phone number must contain 10 digits.");

        return;
    }


    // ========================================
    // DATE OF BIRTH
    // ========================================

    if (dob === "") {

        alert("Please select your date of birth.");

        return;
    }


    // ========================================
    // COURSE VALIDATION
    // ========================================

    if (course === "") {

        alert("Please select a course.");

        return;
    }


    // ========================================
    // COLLEGE VALIDATION
    // ========================================

    if (college === "") {

        alert("Please enter your college name.");

        return;
    }


    // ========================================
    // GRADUATION YEAR
    // ========================================

    if (year === "") {

        alert("Please select your graduation year.");

        return;
    }


    // ========================================
    // ADDRESS
    // ========================================

    if (address === "") {

        alert("Please enter your address.");

        return;
    }


    // ========================================
    // CITY & STATE
    // ========================================

    if (city === "") {

        alert("Please enter your city.");

        return;
    }


    if (state === "") {

        alert("Please enter your state.");

        return;
    }


    // ========================================
    // USERNAME
    // ========================================

    if (username === "") {

        alert("Please create a username.");

        return;
    }


    if (username.length < 5) {

        alert("Username must contain at least 5 characters.");

        return;
    }


    // ========================================
    // PASSWORD
    // ========================================

    if (password === "") {

        alert("Please create a password.");

        return;
    }


    if (password.length < 8) {

        alert(
            "Password must contain at least 8 characters."
        );

        return;
    }


    // ========================================
    // SUCCESS MESSAGE
    // ========================================

    alert(
        "Registration Successful!\n\n" +
        "Welcome, " + name + "!"
    );


    // Clear the form
    form.reset();

});
