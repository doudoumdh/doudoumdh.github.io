function validateForm() {
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;
    let phoneNumber = document.getElementById('phoneNumber').value;

    // Clear previous error messages
    document.getElementById('errorMessage').innerHTML = '';

    // Create an array to collect error messages
    let errorMessages = [];

    // Username validation (3-10 letters)
    if (!validateUsername(userName)) {
        errorMessages.push("Please enter: a valid Username");
    }

    if(!validateEmail(email)){
        errorMessages.push("Please enter a valid email");
    }

    // Password validation (at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character)
    if (!validatePassword(password)) {
        errorMessages.push("Please enter: a valid Password");
    }

    if (!validatePasswordConfirm(password, passwordConfirm)) {
        errorMessages.push("Please enter: a matching password");
    }

    // Phone number validation (10 digits)
    if (!validatePhoneNumber(phoneNumber)) {
        errorMessages.push("Please enter: a valid Phone Number");
    }

    // If there are error messages, display them
    if (errorMessages.length > 0) {
        document.getElementById('errorMessage').innerHTML = errorMessages.join('<br>');
        return false; // Validation failed
    }

    return true; // Validation passed
}

function handleSubmit() {
    // Check validation before submitting
    if (validateForm()) {
        document.getElementById('submitForm').submit(); // Submit the form programmatically
    }
}

// Validation functions
function validateUsername(userName) {
    let regex = /^[a-z0-9]{4,12}$/;
    return regex.test(userName);
}

function validateEmail(email){
    let regex = /^(?=.*@).*?\.(net|com|org|edu)$/;

    return regex.test(email);
}

function validatePassword(password) {
    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

function validatePasswordConfirm(password, passwordConfirm){
    return password === passwordConfirm;
}

function validatePhoneNumber(phoneNumber) {
    let regex = /^\(\d{3}\)-\d{3}-\d{4}$/;

    return regex.test(phoneNumber);
}
