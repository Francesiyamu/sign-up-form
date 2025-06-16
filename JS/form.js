const formElements = document.forms["form-details"];

//select your errormessage elements
let error_message_fname =  document.getElementById('error-message-fname');
let error_message_lname = document.getElementById('error-message-lname');
let error_message_email = document.getElementById('error-message-email');
let error_message_pwd = document.getElementById('error-message-password');

function validateForm (event){
    event.preventDefault(); //preventd form from submitting
    /*let text = "";
    for(let element of formElements.elements){
    text += element.value + "<br>";
}*/

//Get current values
let firstname = document.getElementById('firstname').value;
let lastname = document.getElementById('lastname').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;


//define your patterns
    let firstNameRegex = /[A-Za-z]{3,20}$/;
    let lastNameRegex = /[A-Za-z]{3,20}$/;
    let emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

  
    //Validate email
    if (!firstNameRegex.test(firstname)) {
        error_message_fname.innerHTML = firstname === '' ? 'First Name cannot be empty' : 'Invalid name input';
        return;
    }

    // Validate last name
    if (!lastNameRegex.test(lastname)) {
        error_message_lname.innerHTML = lastname === '' ? 'Last Name cannot be empty' : 'Invalid name input';
        return;
    }
    // Validate email
    if (!emailRegex.test(email)) {
        error_message_email.innerHTML = 'Looks like this is not an email';
        document.getElementById('email').placeholder = 'email@example.com';
        return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        error_message_pwd.innerHTML = password === '' ? 'Password cannot be empty' : 'Password must consist of a letter, number, and special character';
        return;
    }

     document.getElementById("form-details").reset()
}

formElements.addEventListener('submit', validateForm);


