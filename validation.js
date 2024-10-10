function validateForm() {
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;
    let phoneNumber = document.getElementById('phoneNumber').value;



    // Clear previous error messages
    document.getElementById('errorMessage').innerHTML = '';

    // Create an array to collect error messages for later displaying

    let errorMessages = [];


    // Username validation (4-12 letters/numbers)

    if (!validateUsername(userName)) {
        errorMessages.push("Please enter a valid Username");
    }

    if (!validateEmail(email)) {
        errorMessages.push("Please enter a valid Email");
    }

    // Password validation (at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character)
    if (!validatePassword(password)) {
        errorMessages.push("Please enter a valid Password");
    }

    //validate to make sure the both fields match
    if (!validatePasswordConfirm(password, passwordConfirm)) {
        alert("Please enter: a matching password");
        errorMessages.push("Please enter: a matching password");
    }

    // Phone number validation (10 digits)
    if (!validatePhoneNumber(phoneNumber)) {
        errorMessages.push("Please enter a valid Phone Number");
    }


    //validate the selection of a gender
    if (!validateGender()) {
        errorMessages.push("Please select a gender.");
    }

    //validate the selection of an age group
    if(validateAge()){
        errorMessages.push("Please select an age group.");
    }
    // If there are error messages, display them
    if (errorMessages.length > 0) {
        document.getElementById('errorMessage').innerHTML = errorMessages.join('<br>');
        return false; // Validation failed
    }
    


    return true; // Validation passed

}



// Validation functions
function validateUsername(userName) {
    let regex = /^[a-z0-9]{4,12}$/;
    return regex.test(userName);
}
//validate if email met requirements
function validateEmail(email) {
    let regex = /^(?=.*@).*?\.(net|com|org|edu)$/;

    return regex.test(email);
}

//validate if password met the requirements
function validatePassword(password) {
    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

//function to validate if my password matches
function validatePasswordConfirm(password, passwordConfirm) {
    return password === passwordConfirm;
}

//function to validate the phone number
function validatePhoneNumber(phoneNumber) {
    let regex = /^\(\d{3}\)-\d{3}-\d{4}$/;

    return regex.test(phoneNumber);
}

//function to validate the gender selection
function validateGender() {
    let radios = document.getElementsByName('gender'); // Get all radio buttons with name 'gender'
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true; // At least one radio button is checked
        }
    }
    return false; // None of the radio buttons is selected
}

//make sure the age group is selected
function validateAge() {
    let age = document.getElementById('ageGroup').value;
    return age === "blank";
}

//the following function reset the form to initial state by deleting all the inputs
function clearAll() {
    document.forms["submitForm"].reset();
    document.getElementById('errorMessage').innerHTML = '';
}


//Submit button handling for an alert 
function handleSubmit() {
    // Check validation before submitting
    if (validateForm()) {
        alert('Submission passed');
        document.getElementById('submitForm').submit();
    }
    else {
        alert('Submission failed');
    }
}