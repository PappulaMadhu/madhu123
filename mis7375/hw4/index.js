 

// Function to show a hint when the input is focused
function showFirstNameHint() {
    document.getElementById('firstNameHint').textContent = "Only letters, apostrophes, and dashes are allowed.";
    document.getElementById('firstNameHint').style.color = "gray";
}

// Function to validate the input as the user types
function validateFirstName() {
    const firstName = document.getElementById('firstName').value;
    const regex = /^[a-zA-Z'-]{1,30}$/;  // The pattern allows letters, apostrophes, and dashes
    const hint = document.getElementById('firstNameHint');

    if (firstName.match(regex)) {
        hint.textContent = "Looks good!";
        hint.style.color = "green";
    } else {
        hint.textContent = "Invalid characters. Only letters, apostrophes, and dashes allowed.";
        hint.style.color = "red";
    }
}

// Function to finalize the input (when input field loses focus)
function finalizeFirstName() {
    const firstName = document.getElementById('firstName').value;
    const hint = document.getElementById('firstNameHint');
        
    if (!firstName) {
        hint.textContent = "";
    } else if (firstName.match(/^[a-zA-Z'-]{1,30}$/)) {
        hint.textContent = "Input is valid.";
        hint.style.color = "green";
    } else {
        hint.textContent = "Invalid name. Please follow the rules.";
        hint.style.color = "red";
    }
}

// Middle Initial Functions
function showMiddleInitialHint() {
    const middleInitialHint = document.getElementById('middleInitialHint');
    middleInitialHint.textContent = "Only one letter is allowed.";
    middleInitialHint.style.color = "gray";
}

function validateMiddleInitial() {
    const middleInitialInput = document.getElementById('middleInitial');
    const middleInitialHint = document.getElementById('middleInitialHint');
    const middleInitial = middleInitialInput.value;
    const regex = /^[a-zA-Z]{1}$/;

    if (middleInitial.match(regex)) {
        middleInitialHint.textContent = "Valid middle initial!";
        middleInitialHint.style.color = "green";
    } else {
        middleInitialHint.textContent = "Invalid initial. Only one letter allowed.";
        middleInitialHint.style.color = "red";
    }
}

function finalizeMiddleInitial() {
    const middleInitialInput = document.getElementById('middleInitial');
    const middleInitialHint = document.getElementById('middleInitialHint');
    const middleInitial = middleInitialInput.value;

    if (!middleInitial) {
        middleInitialHint.textContent = "";
    } else if (middleInitial.match(/^[a-zA-Z]{1}$/)) {
        middleInitialHint.textContent = "Valid middle initial.";
        middleInitialHint.style.color = "green";
    } else {
        middleInitialHint.textContent = "Invalid initial. One letter only.";
        middleInitialHint.style.color = "red";
    }
}

// Last Name Functions
function showLastNameHint() {
    const lastNameHint = document.getElementById('lastNameHint');
    lastNameHint.textContent = "Only letters, apostrophes, and dashes are allowed.";
    lastNameHint.style.color = "gray";
}

function validateLastName() {
    const lastNameInput = document.getElementById('lastName');
    const lastNameHint = document.getElementById('lastNameHint');
    const lastName = lastNameInput.value;
    const regex = /^[a-zA-Z'-]{1,30}$/;

    if (lastName.match(regex)) {
        lastNameHint.textContent = "Looks good!";
        lastNameHint.style.color = "green";
    } else {
        lastNameHint.textContent = "Invalid characters. Only letters, apostrophes, and dashes allowed.";
        lastNameHint.style.color = "red";
    }
}

function finalizeLastName() {
    const lastNameInput = document.getElementById('lastName');
    const lastNameHint = document.getElementById('lastNameHint');
    const lastName = lastNameInput.value;

    if (!lastName) {
        lastNameHint.textContent = "";
    } else if (lastName.match(/^[a-zA-Z'-]{1,30}$/)) {
        lastNameHint.textContent = "Input is valid.";
        lastNameHint.style.color = "green";
    } else {
        lastNameHint.textContent = "Invalid name. Please follow the rules.";
        lastNameHint.style.color = "red";
    }
}
// City Functions
function showCityHint() {
    document.getElementById('cityHint').textContent = "City must be between 2 and 30 characters.";
    document.getElementById('cityHint').style.color = "gray";
}

function validateCity() {
    const city = document.getElementById('city').value;
    const cityHint = document.getElementById('cityHint');

    if (city.length >= 2 && city.length <= 30) {
        cityHint.textContent = "City looks good!";
        cityHint.style.color = "green";
    } else {
        cityHint.textContent = "City must be between 2 and 30 characters.";
        cityHint.style.color = "red";
    }
}

function finalizeCity() {
    const city = document.getElementById('city').value;
    const cityHint = document.getElementById('cityHint');

    if (!city) {
        cityHint.textContent = "";
    } else if (city.length >= 2 && city.length <= 30) {
        cityHint.textContent = "Valid city.";
        cityHint.style.color = "green";
    } else {
        cityHint.textContent = "City must be between 2 and 30 characters.";
        cityHint.style.color = "red";
    }
}

// Phone Number Functions
function showPhoneNumberHint() {
    document.getElementById('phoneNumberHint').textContent = "Format: 000-000-0000";
    document.getElementById('phoneNumberHint').style.color = "gray";
}

function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phoneNumberHint = document.getElementById('phoneNumberHint');
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;  // Matches XXX-XXX-XXXX format

    if (phoneNumber.match(phonePattern)) {
        phoneNumberHint.textContent = "Phone number looks good!";
        phoneNumberHint.style.color = "green";
    } else {
        phoneNumberHint.textContent = "Invalid phone number format. Use 000-000-0000";
        phoneNumberHint.style.color = "red";
    }
}

function finalizePhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phoneNumberHint = document.getElementById('phoneNumberHint');

    if (!phoneNumber) {
        phoneNumberHint.textContent = "";
    } else if (phoneNumber.match(/^\d{3}-\d{3}-\d{4}$/)) {
        phoneNumberHint.textContent = "Valid phone number.";
        phoneNumberHint.style.color = "green";
    } else {
        phoneNumberHint.textContent = "Invalid phone number. Use the format XXX-XXX-XXXX.";
        phoneNumberHint.style.color = "red";
    }
}

// Set the min and max values dynamically for Date of Birth
function setDateRestrictions() {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setFullYear(today.getFullYear() - 120); // 120 years ago
    const maxDate = today; // Today's date

    const minDateString = minDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    const maxDateString = maxDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

    // Set the min and max attributes for the DOB input
    document.getElementById('dob').setAttribute('min', minDateString);
    document.getElementById('dob').setAttribute('max', maxDateString);
}

// Show date of birth hint
function showDobHint() {
    document.getElementById('dobHint').textContent = "Age should be between 0 and 120 years.";
    document.getElementById('dobHint').style.color = "gray";
}

// Validate date of birth on input
function validateDob() {
    const dobInput = document.getElementById('dob');
    const dobHint = document.getElementById('dobHint');
    const dobValue = dobInput.value;

    if (!dobValue) {
        dobHint.textContent = "Please enter your date of birth.";
        dobHint.style.color = "red";
        return;
    }

    const today = new Date();
    const dobDate = new Date(dobValue);
    const age = today.getFullYear() - dobDate.getFullYear();
    const month = today.getMonth() - dobDate.getMonth();
    const day = today.getDate() - dobDate.getDate();

    if (month < 0 || (month === 0 && day < 0)) {
        age--; // Adjust for the case when the birthday hasn't occurred yet this year
    }

    if (age < 0 || age > 120) {
        dobHint.textContent = "Date of birth must be between 0 and 120 years ago.";
        dobHint.style.color = "red";
    } else {
        dobHint.textContent = "Looks good!";
        dobHint.style.color = "green";
    }
}

// Finalize the DOB validation when the user leaves the field (onblur)
function finalizeDob() {
    const dobInput = document.getElementById('dob');
    const dobHint = document.getElementById('dobHint');

    const dobValue = dobInput.value;
    if (!dobValue) {
        dobHint.textContent = "";
    } else {
        validateDob(); // Perform final validation
    }
}

// Call the function to set min/max on page load
window.onload = setDateRestrictions;



function isValidDOB(dob) {
    const today = new Date();
    const dobDate = new Date(dob);
    const age = today.getFullYear() - dobDate.getFullYear();
    const month = today.getMonth() - dobDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }
    return age >= 0 && age <= 120;
}

// Social Security Number (SSN) Functions
function showSsnHint() {
    document.getElementById('ssnHint').textContent = "Format: XXX-XX-XXXX. Please don't use real SSN for testing.";
    document.getElementById('ssnHint').style.color = "gray";
}

function validateSsn() {
    const ssn = document.getElementById('ssn').value;
    const ssnHint = document.getElementById('ssnHint');
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;

    if (ssn.match(ssnPattern)) {
        ssnHint.textContent = "SSN looks good!";
        ssnHint.style.color = "green";
    } else {
        ssnHint.textContent = "Invalid SSN format. Should be XXX-XX-XXXX.";
        ssnHint.style.color = "red";
    }
}

function finalizeSsn() {
    const ssn = document.getElementById('ssn').value;
    const ssnHint = document.getElementById('ssnHint');

    if (!ssn) {
        ssnHint.textContent = "";
    } else if (ssn.match(/^\d{3}-\d{2}-\d{4}$/)) {
        ssnHint.textContent = "Valid SSN.";
        ssnHint.style.color = "green";
    } else {
        ssnHint.textContent = "Invalid SSN. Please follow the format XXX-XX-XXXX.";
        ssnHint.style.color = "red";
    }
}

// Address Line 1 Functions
function showAddress1Hint() {
    document.getElementById('address1Hint').textContent = "Address Line 1 must be between 2 and 30 characters.";
    document.getElementById('address1Hint').style.color = "gray";
}

function validateAddress1() {
    const address1 = document.getElementById('address1').value;
    const address1Hint = document.getElementById('address1Hint');

    if (address1.length >= 2 && address1.length <= 30) {
        address1Hint.textContent = "Looks good!";
        address1Hint.style.color = "green";
    } else {
        address1Hint.textContent = "Address must be between 2 and 30 characters.";
        address1Hint.style.color = "red";
    }
}

function finalizeAddress1() {
    const address1 = document.getElementById('address1').value;
    const address1Hint = document.getElementById('address1Hint');

    if (!address1) {
        address1Hint.textContent = "";
    } else if (address1.length >= 2 && address1.length <= 30) {
        address1Hint.textContent = "Valid address.";
        address1Hint.style.color = "green";
    } else {
        address1Hint.textContent = "Invalid address. Must be between 2 and 30 characters.";
        address1Hint.style.color = "red";
    }
}

// Address Line 2 Functions
function showAddress2Hint() {
    document.getElementById('address2Hint').textContent = "Address Line 2 must be between 2 and 30 characters.";
    document.getElementById('address2Hint').style.color = "gray";
}

function validateAddress2() {
    const address2 = document.getElementById('address2').value;
    const address2Hint = document.getElementById('address2Hint');

    if (address2.length >= 2 && address2.length <= 30) {
        address2Hint.textContent = "Looks good!";
        address2Hint.style.color = "green";
    } else {
        address2Hint.textContent = "Address must be between 2 and 30 characters.";
        address2Hint.style.color = "red";
    }
}

function finalizeAddress2() {
    const address2 = document.getElementById('address2').value;
    const address2Hint = document.getElementById('address2Hint');

    if (!address2) {
        address2Hint.textContent = "";
    } else if (address2.length >= 2 && address2.length <= 30) {
        address2Hint.textContent = "Valid address.";
        address2Hint.style.color = "green";
    } else {
        address2Hint.textContent = "Invalid address. Must be between 2 and 30 characters.";
        address2Hint.style.color = "red";
    }
}


// Email Functions
function showEmailHint() {
    document.getElementById('emailHint').textContent = "Format: name@domain.tld.";
    document.getElementById('emailHint').style.color = "gray";
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailHint = document.getElementById('emailHint');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.match(emailPattern)) {
        emailHint.textContent = "Valid email!";
        emailHint.style.color = "green";
    } else {
        emailHint.textContent = "Invalid email format. Please follow name@domain.tld.";
        emailHint.style.color = "red";
    }
}

function finalizeEmail() {
    const email = document.getElementById('email').value;
    const emailHint = document.getElementById('emailHint');

    if (!email) {
        emailHint.textContent = "";
    } else if (email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailHint.textContent = "Valid email.";
        emailHint.style.color = "green";
    } else {
        emailHint.textContent = "Invalid email. Please follow name@domain.tld format.";
        emailHint.style.color = "red";
    }
}

// Zip Code Functions
function showZipCodeHint() {
    document.getElementById('zipcodeHint').textContent = "Enter a 5-digit zip code.";
    document.getElementById('zipcodeHint').style.color = "gray";
}

function validateZipCode(input) {
    const zipCode = input.value;
    const zipCodeHint = document.getElementById('zipcodeHint');
    const zipCodePattern = /^\d{5}$/;  // Matches a 5-digit zip code

    if (zipCode.match(zipCodePattern)) {
        zipCodeHint.textContent = "Zip code looks good!";
        zipCodeHint.style.color = "green";
    } else {
        zipCodeHint.textContent = "Invalid zip code. Enter exactly 5 digits.";
        zipCodeHint.style.color = "red";
    }
}

function finalizeZipCode() {
    const zipCode = document.getElementById('zipcode').value;
    const zipCodeHint = document.getElementById('zipcodeHint');

    if (!zipCode) {
        zipCodeHint.textContent = "";
    } else if (zipCode.match(/^\d{5}$/)) {
        zipCodeHint.textContent = "Valid zip code.";
        zipCodeHint.style.color = "green";
    } else {
        zipCodeHint.textContent = "Invalid zip code. Enter exactly 5 digits.";
        zipCodeHint.style.color = "red";
    }
}


// User ID Functions
function showUserIdHint() {
    document.getElementById('userIdHint').textContent = "User ID must be 5-20 characters long and can not start with number and only contain letters, numbers, underscores, or hyphens.";
    document.getElementById('userIdHint').style.color = "gray";
}

function validateUserId() {
    const userId = document.getElementById('userId').value;
    const userIdHint = document.getElementById('userIdHint');
    const userIdPattern = /^[a-zA-Z][a-zA-Z0-9_-]{4,19}$/;

    if (userId.match(userIdPattern)) {
        userIdHint.textContent = "User ID looks good!";
        userIdHint.style.color = "green";
    } else {
        userIdHint.textContent = "Invalid User ID. Must be 5-20 characters and cannot start with numbers, no special characters.";
        userIdHint.style.color = "red";
    }
}

function finalizeUserId() {
    const userId = document.getElementById('userId').value;
    const userIdHint = document.getElementById('userIdHint');

    if (!userId) {
        userIdHint.textContent = "";
    } else if (userId.match(/^[a-zA-Z0-9_-]{5,20}$/)) {
        userIdHint.textContent = "Valid User ID.";
        userIdHint.style.color = "green";
    } else {
        userIdHint.textContent = "Invalid User ID. Follow the rules.";
        userIdHint.style.color = "red";
    }
}


// Function to show a hint for Move-In Date when the input is focused
function showMoveInDateHint() {
    document.getElementById('moveInDateHint').textContent = "Please choose a valid move-in date after 2025-03-02.";
    document.getElementById('moveInDateHint').style.color = "gray";
}

// Function to validate the Move-In Date as the user types or selects a date
function validateMoveInDate() {
    const moveInDate = document.getElementById('move_in_date').value;
    const minDate = document.getElementById('move_in_date').min;
    const hint = document.getElementById('moveInDateHint');

    if (moveInDate >= minDate) {
        hint.textContent = "Looks good!";
        hint.style.color = "green";
    } else {
        hint.textContent = `Move-In Date must be after ${minDate}.`;
        hint.style.color = "red";
    }
}

// Function to finalize the Move-In Date validation (when the field loses focus)
function finalizeMoveInDate() {
    const moveInDate = document.getElementById('move_in_date').value;
    const hint = document.getElementById('moveInDateHint');
    
    if (!moveInDate) {
        hint.textContent = "";
    } else if (moveInDate >= document.getElementById('move_in_date').min) {
        hint.textContent = "Valid Move-In Date.";
        hint.style.color = "green";
    } else {
        hint.textContent = "Invalid date. Please select a date after 2025-03-26.";
        hint.style.color = "red";
    }
}

// Function to show a hint for Travel Date when the input is focused
function showTravelDateHint() {
    document.getElementById('travelDateHint').textContent = "Please choose a valid travel date after 2025-03-02.";
    document.getElementById('travelDateHint').style.color = "gray";
}

// Function to validate the Travel Date as the user types or selects a date
function validateTravelDate() {
    const travelDate = document.getElementById('travel_date').value;
    const minDate = document.getElementById('travel_date').min;
    const hint = document.getElementById('travelDateHint');

    if (travelDate >= minDate) {
        hint.textContent = "Looks good!";
        hint.style.color = "green";
    } else {
        hint.textContent = `Travel Date must be after ${minDate}.`;
        hint.style.color = "red";
    }
}

// Function to finalize the Travel Date validation (when the field loses focus)
function finalizeTravelDate() {
    const travelDate = document.getElementById('travel_date').value;
    const hint = document.getElementById('travelDateHint');
    
    if (!travelDate) {
        hint.textContent = "";
    } else if (travelDate >= document.getElementById('travel_date').min) {
        hint.textContent = "Valid Travel Date.";
        hint.style.color = "green";
    } else {
        hint.textContent = "Invalid date. Please select a date after 2025-03-26.";
        hint.style.color = "red";
    }
}
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let c of cookies) {
        let [key, val] = c.trim().split('=');
        if (key === name) return decodeURIComponent(val);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function updateWelcomeUI(name) {
    const welcomeMsg = document.getElementById('welcomeMessage');
    const notYouBox = document.getElementById('notYouBox');
    const cookieNameSpan = document.getElementById('cookieName');
    if (name) {
        welcomeMsg.textContent = `Welcome back, ${name}`;
        cookieNameSpan.textContent = name;
        notYouBox.style.display = 'block';
    }
}

function resetWelcomeUI() {
    document.getElementById('welcomeMessage').textContent = 'Welcome New User';
    document.getElementById('cookieName').textContent = '';
    document.getElementById('notYouBox').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const dateDisplay = document.getElementById("dateDisplay");
    if (dateDisplay) {
        dateDisplay.textContent = formatDateTime();
    }
    function formatDateTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        return now.toLocaleString('en-US', options);
    }
    function updateDateTime() {
        if (dateDisplay) {
            dateDisplay.textContent = formatDateTime();
        }
    }
    // Update every second
    updateDateTime(); // Initial call
    setInterval(updateDateTime, 1000);
    

    const firstNameInput = document.getElementById('firstName');
    const middleInitialInput = document.getElementById('middleInitial');
    const lastNameInput = document.getElementById('lastName');



    // First Name event listeners
    firstNameInput.addEventListener('input', validateFirstName);
    firstNameInput.addEventListener('focus', showFirstNameHint);
    firstNameInput.addEventListener('blur', finalizeFirstName);

    // Middle Initial event listeners
    middleInitialInput.addEventListener('input', validateMiddleInitial);
    middleInitialInput.addEventListener('focus', showMiddleInitialHint);
    middleInitialInput.addEventListener('blur', finalizeMiddleInitial);

    // Last Name event listeners
    lastNameInput.addEventListener('input', validateLastName);
    lastNameInput.addEventListener('focus', showLastNameHint);
    lastNameInput.addEventListener('blur', finalizeLastName);

    const rememberMeCheckbox = document.getElementById('rememberMe');
    const notYouCheckbox = document.getElementById('notYouCheck');
    

    const cookieName = getCookie('firstName');

    // Show welcome message only if cookie exists and checkbox is checked
    if (cookieName && rememberMeCheckbox?.checked) {
        updateWelcomeUI(cookieName);
        if (firstNameInput) firstNameInput.value = cookieName;
    } else {
        resetWelcomeUI();
    }

    // Autosave on typing
    if (firstNameInput) {
        firstNameInput.addEventListener('input', function () {
            const name = this.value.trim();
            if (rememberMeCheckbox.checked && name) {
                setCookie('firstName', name, 2);
            } else {
                deleteCookie('firstName');
            }
        });
    }

    // Handle checkbox toggle
    if (rememberMeCheckbox) {
        rememberMeCheckbox.addEventListener('change', function () {
            if (!this.checked) {
                deleteCookie('firstName');
                resetWelcomeUI();
            } else {
                const name = firstNameInput.value.trim();
                if (name) {
                    setCookie('firstName', name, 2);
                }
            }
        });
    }

    // Handle "Not You"
    if (notYouCheckbox) {
        notYouCheckbox.addEventListener('change', function () {
            if (this.checked) {
                deleteCookie('firstName');
                resetWelcomeUI();
                rememberMeCheckbox.checked = false;
                if (firstNameInput) firstNameInput.value = '';
            }
        });
    }
   


    document.querySelector('iframe').addEventListener('click', function() {
        this.style.display = 'none';  // Hides the iframe on click
    });

    // Initialize the salary slider
    const salaryInput = document.getElementById('salary');
    const salaryValue = document.getElementById('salaryValue');
    if (salaryInput && salaryValue) {
        const updateSalaryValue = () => salaryValue.textContent = `$${salaryInput.value}`;
        updateSalaryValue();
        salaryInput.addEventListener('input', updateSalaryValue);
    }

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordMismatchError = document.getElementById("passwordMismatchError");
    const passwordStrength = document.getElementById("passwordStrength");
    const form = document.getElementById('myForm');



    // Date Validation
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

    const dobInput = document.getElementById('dob');
    if (dobInput) {
        const maxAgeDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
        const maxAge = maxAgeDate.toISOString().split('T')[0]; // 120 years ago
        dobInput.setAttribute('max', currentDate);  // DOB should not be in the future
        dobInput.setAttribute('min', maxAge);  // DOB should not be more than 120 years ago
    }

    const moveInInput = document.getElementById('move_in_date');
    const travelDateInput = document.getElementById('travel_date');
    if (moveInInput && travelDateInput) {
        moveInInput.setAttribute('min', currentDate);  // Move-in date should not be in the past
        travelDateInput.setAttribute('min', currentDate);  // Travel date should not be in the past
    }


    
    
    const checkPasswords = () => {
        // If password, confirmPassword, or error message element doesn't exist, exit function
        if (!password || !confirmPassword || !passwordMismatchError) return;
        
        // Password mismatch check
        if (password.value && confirmPassword.value) {
            if (password.value !== confirmPassword.value) {
                passwordMismatchError.style.display = 'block';
                passwordMismatchError.textContent = "Passwords do not match!";
                passwordMismatchError.style.color = "red";
            } else {
                passwordMismatchError.style.display = 'none'; // Hide error when passwords match
            }
        } else {
            passwordMismatchError.style.display = 'none'; // Hide error if fields are empty
        }

        // Password strength check
        if (passwordStrength) {
            const passwordValue = password.value;
            // Clear previous feedback (if any)
            passwordStrength.innerHTML = '';

            // Detailed password feedback
            const passwordErrors = [];
        
            if (passwordValue.length < 8) passwordErrors.push("Password must be at least 8 characters long");
            if (!/[A-Z]/.test(passwordValue)) passwordErrors.push("at least one uppercase letter");
            if (!/[a-z]/.test(passwordValue)) passwordErrors.push("at least one lowercase letter");
            if (!/[0-9]/.test(passwordValue)) passwordErrors.push("at least one number");
            if (!/[\W_]/.test(passwordValue)) passwordErrors.push("at least one special character");

            // Display errors if there are any
            if (passwordErrors.length) {
                passwordErrors.forEach((error) => {
                    const errorLine = document.createElement('div');
                    errorLine.textContent = error;
                    errorLine.style.color = 'red'; // Display errors in red
                    passwordStrength.appendChild(errorLine);
                });
                // Password is considered weak if there are errors
                const strengthText = document.createElement('div');
                strengthText.textContent = 'Password Strength: Weak';
                strengthText.style.color = 'red';
                passwordStrength.appendChild(strengthText);
            } else {
                // If no errors, consider password strong
                const strengthText = document.createElement('div');
                strengthText.textContent = 'Password Strength: Strong';
                strengthText.style.color = 'green'; // Green for strong password
                passwordStrength.appendChild(strengthText);
            }
        }
    };
    
    // Event listeners for password fields (ensuring they run on input)
    if (password && confirmPassword) {
        password.addEventListener('input', checkPasswords);
        confirmPassword.addEventListener('input', checkPasswords);
    }

    

    

    // Validate form before submission

    // Event listeners for password fields (ensuring they run on input)
    if (password && confirmPassword) {
        password.addEventListener('input', checkPasswords);
        confirmPassword.addEventListener('input', checkPasswords);
    }

    // Review form before submission
    const reviewBtn = document.getElementById('reviewBtn');
    const reviewList = document.getElementById('reviewList');
    const reviewSection = document.getElementById('reviewSection');
    const editBtn = document.getElementById('editBtn');
    const inputs = form.querySelectorAll('input, select, textarea'); // All the form inputs
    const submitReviewBtn = document.getElementById('submitReviewBtn'); // Add reference to the submit review button

    if (reviewBtn && reviewList && form) {
        reviewBtn.addEventListener('click', () => {
            reviewList.innerHTML = "";  // Clear previous review list

            const formData = new FormData(form);
            formData.forEach((value, key) => {
                const listItem = document.createElement('li');
                let status = "Pass"; // Assume everything is valid initially

                

                // Check for password mismatch and strength issues during review
                if (key === "password") {
                    const confirmPasswordValue = form.querySelector('[name="confirmPassword"]').value;

                    // Check for password mismatch during review
                    if (value !== confirmPasswordValue) {
                        status = "Error - Passwords do not match!";
                    }
                    // If passwords match, check for strength issues
                    else {
                        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                        if (!passwordRegex.test(value)) {
                            status = "Error - Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
                        }
                    }
                }
                
                // Validate Date of Birth
                if (key === "dob") {
                    const dobDate = new Date(value);
                    // Ensure dobDate is valid
                    if (isNaN(dobDate.getTime())) {
                        status = "Error - Invalid Date of Birth"; // If the date is invalid
                    } else {
                        // Get the current date and set the time to 00:00:00
                        const today = new Date();
                        const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // current date without time
                        // Calculate the maximum allowed date (120 years ago)
                        const maxAgeDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());

                        // Compare the date of birth (without time) with today and the max age limit
                        if (dobDate >= todayDateOnly) {
                            status = "Error - Date of Birth cannot be in the future or today";
                        } else if (dobDate < maxAgeDate) {
                            status = "Error - Date of Birth cannot be more than 120 years ago";
                        }
                    }
                }



                // Validate Move-In Date
                if (key === "move_in_date") {
                    const moveInDate = new Date(value);
                    if (moveInDate < today) {
                        status = "Error - Move-In Date cannot be in the past";
                    }
                }

            

                // Validate Travel Date
                if (key === "travel_date") {
                    if (!value) { // Check if the travel date is empty
                    status = "Error - Travel Date cannot be empty";
                    } 
                    else {
                        const travelDate = new Date(value);
                        if (travelDate < today) {
                            status = "Error - Travel Date cannot be in the past";
                         }
                    }
                }
            

                // Check for empty fields
                else if (value.trim() === "") {
                    status = "Error";  // Mark empty fields as "Error"
                }
                // Check email pattern
                else if (key === "email") {
                    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!emailPattern.test(value)) status = "Error - Invalid email";
                }
                // Check phone pattern
                else if (key === "phoneNumber") {
                    const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;
                    if (!phoneNumberPattern.test(value)) status = "Error - Invalid phone number";
                }
                // SSN validation
                else if (key === "ssn") {
                    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
                    if (!ssnPattern.test(value)) status = "Error - Invalid SSN";
                }
                // user ID
                else if (key === "userId") {
                    const userIdPattern = /^[a-zA-Z][a-zA-Z0-9-_]{4,29}$/;
                    if (!userIdPattern.test(value)) status = "Error - Invalid User ID";
                }
                // First name
                else if (key === "firstName") {
                    const firstNamePattern = /^[a-zA-Z'-]{1,30}$/;
                    if (!firstNamePattern.test(value)) status = "Error - Invalid First Name";
                }
                // Middle name
                else if (key === "middleInitial") {
                    const middleInitialPattern = /^[a-zA-Z]?$/;
                    if (!middleInitialPattern.test(value)) status = "Error - Invalid Middle Initial";
                }
                // Zip code
                else if (key === "zipcode") {
                    const zipcodePattern = /^\d{5}$/;
                    if (!zipcodePattern.test(value)) status = "Error - Invalid Zip Code";
                }
                // Last name
                else if (key === "lastName") {
                    const lastNamePattern = /^[a-zA-Z'-]+(\s?\d{2,5})?$/;
                    if (!lastNamePattern.test(value)) status = "Error - Invalid Last Name";
                }

                // Validate Address1, Address2, and City
                else if (key === "address1" || key === "address2" || key === "city") {
                    if (value.trim().length < 2) {
                        status = "Error - Must be at least 2 characters";
                    }
                }

                

                listItem.textContent = `${key}: ${value} - ${status}`;
                listItem.style.color = status === "Pass" ? "green" : "red";
                reviewList.appendChild(listItem);
            });
            // Update the submit button visibility based on the form validation
            
    
            // Check if form is valid to toggle submit button visibility
            toggleSubmitButtonVisibility();

            form.style.display = 'none';
            reviewSection.style.display = 'block';
        });
    }
    function toggleSubmitButtonVisibility() {
        let hasError = false;
        
        // Check all list items in the review list
        const reviewItems = reviewList.querySelectorAll('li');
        reviewItems.forEach(item => {
            if (item.textContent.includes("Error")) {
                hasError = true;
            }
        });
        // Show or hide submit button based on errors
        submitReviewBtn.style.display = hasError ? 'none' : 'block';
    }


    // Attach event listeners to all input fields to validate the form on input change
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            toggleSubmitButtonVisibility(); // Call on each input change
        });
    });

    // Handle Submit Review button click
    if (submitReviewBtn) {
        submitReviewBtn.addEventListener('click', (event) => {
            // Prevent form submission in the review section
            event.preventDefault();

            const formData = new FormData(form);
            let isValid = true;
            let errorMessages = []; // Collect all error messages

            // Check all fields before submitting review
            formData.forEach((value, key) => {
                if (value.trim() === "") {
                    isValid = false;
                    errorMessages.push(`${key} is required`);
                }

                if (key === 'address1' && value.length < 2) {
                    isValid = false;
                    errorMessages.push('Address must be at least 2 characters.');
                }

                if (key === 'address2' && value.length < 2) {
                    isValid = false;
                    errorMessages.push('Address must be at least 2 characters.');
                }

                if (key === 'city' && value.length < 2) {
                    isValid = false;
                    errorMessages.push('Address must be at least 2 characters.');
                }

                if (key === "password") {
                    const confirmPasswordValue = form.querySelector('[name="confirmPassword"]').value;
                    
                    // Password strength validation
                    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                    if (!passwordRegex.test(value)) {
                        isValid = false;
                        errorMessages.push("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
                    }
                    // Password match validation
                    if (value !== confirmPasswordValue) {
                        isValid = false;
                        errorMessages.push("Passwords do not match!");
                    }
                }


                if (key === "email") {
                    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!emailPattern.test(value)) {
                        isValid = false;
                        errorMessages.push("Please enter a valid email address!");
                    }
                }

                if (key === "phoneNumber") {
                    const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;
                    if (!phoneNumberPattern.test(value)) {
                        isValid = false;
                        errorMessages.push("Please enter a valid phone number!");
                    }
                }

                if (key === "userId") {
                    const userIdPattern = /^[a-zA-Z][a-zA-Z0-9-_]{4,29}$/;
                    if (!userIdPattern.test(value)) {
                        isValid = false;
                        errorMessages.push("Please enter a valid user ID!");
                    }
                }

                if (key === "zipcode") {
                    const zipcode = /^\d{5}$/;
                    if (!zipcode.test(value)) {
                        isValid = false;
                        errorMessages.push("Please enter a valid zipcode!");
                    }
                }

                if (key === "lastName") {
                    const lastName = /^[a-zA-Z'-]+(\s?\d{2,5})?$/;
                    if (!lastName.test(value)) {
                        isValid = false;
                        errorMessages.push("Please enter a valid Last Name!");
                    }
                }

                if (key === "firstName") {
                    const firstName = /^[a-zA-Z'-]{1,30}$/;
                    if (!firstName.test(value)) {
                        isValid = false;
                        errorMessages.push("Please enter a valid first name!");
                    }
                }

                if (key === "middleInitial") {
                    const middleInitial = /^[a-zA-Z]?$/;
                    if (!middleInitial.test(value)) {
                        isValid = false;
                        errorMessages.push("Please enter a valid middle name!")
                    }
                }

                if (key === "ssn") {
                    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
                    if (!ssnPattern.test(value)) {
                        isValid = false;
                        errorMessages.push("Please enter a valid SSN!");
                    }
                }
            
            });
            
            
            if (isValid) {
                alert("Review Submitted Successfully!");
                window.location.href = "thankyou.html"; // Redirect to thank you page
            } else {
                alert("Please fix the errors before submitting.");
            }
        });
    }

    // Edit button to go back to the form from review section
    if (editBtn) {
        editBtn.addEventListener('click', () => {
            form.style.display = 'block';
            reviewSection.style.display = 'none';
        });
    };
});

// Function to return formatted date
function formatDate() {
    return `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
}

// Function to update and display the price range dynamically using sliders
function updatePriceRange() {
    let minPrice = document.getElementById('minPrice').value;
    let maxPrice = document.getElementById('maxPrice').value;
    
    // Ensure both minPrice and maxPrice are valid numbers
    minPrice = parseInt(minPrice);
    maxPrice = parseInt(maxPrice);

    // Check if minPrice or maxPrice are invalid numbers
    if (isNaN(minPrice) || isNaN(maxPrice)) {
        alert("Please enter valid numeric values for both prices.");
        return;
    }

    // Validate that minPrice is less than maxPrice
    if (minPrice > maxPrice) {
        alert("Minimum price cannot be greater than maximum price!");
        document.getElementById('maxPrice').value = minPrice; // Set max price to min if invalid
        maxPrice = minPrice; // Update maxPrice for the display
    }

    // Update the displayed price range and the values next to the sliders
    document.getElementById('priceRangeDisplay').textContent = "$" + minPrice + " - $" + maxPrice;
    document.getElementById('minPriceDisplay').textContent = "$" + minPrice;
    document.getElementById('maxPriceDisplay').textContent = "$" + maxPrice;
}

// Attach the update function to slider inputs
document.getElementById('minPrice').addEventListener('input', updatePriceRange);
document.getElementById('maxPrice').addEventListener('input', updatePriceRange);
