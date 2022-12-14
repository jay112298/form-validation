var nameErr = 0
var mailErr = 0
var genderErr = 0
var passErr = 0
var error = 0

function validateName() {
    var nameField = document.getElementById('name-inp');
    var nameValue = nameField.value
    var nameWarn = document.getElementById('name-warn')

    if (nameValue === undefined || nameValue == "") {
        nameField.classList.add('input-red')
        nameWarn.style.display = "block"
        nameWarn.innerHTML = "Please enter your name"
        nameErr = 1

    } else if (nameValue.length < 2) {
        nameWarn.style.display = "block"
        nameWarn.innerHTML = "Name should be at least two characters long"
        nameErr = 1
    }
     else {
        nameField.classList.remove('input-red')
        nameWarn.style.display = "none"
        nameErr = 0
    }
}

function validateMail() {
    var emailField = document.getElementById('email-inp');
    var emailValue = emailField.value
    var emailWarn = document.getElementById('email-warn')

    if (emailValue === undefined || emailValue == "") {
        emailField.classList.add('input-red')
        emailWarn.style.display = "block"
        emailWarn.innerHTML = "Please enter your email"
        mailErr = 1

    } else if (!emailValue.includes("@")) {
        emailField.classList.add('input-red')
        emailWarn.style.display = "block"
        emailWarn.innerHTML = "Email should be valid"
        mailErr = 1
    }
     else {
        emailField.classList.remove('input-red')
        emailWarn.style.display = "none"
        mailErr = 0
    }
}

function validateGender() {
    var genderField = document.getElementsByName('gender');
    var genderWarn = document.getElementById('gender-warn')

    if (genderField[0].checked == false && genderField[1].checked == false) {
        genderWarn.style.display = "block"
        genderWarn.innerHTML = "Please select your gender"
        genderErr = 1
        // console.log("If triggered")
    } //else if (false) {
    //     genderField.classList.add('input-red')
    //     genderWarn.style.display = "block"
    //     genderWarn.innerHTML = "Email should be valid"
    // }
     else {
        // nameField.classList.remove('input-red')
        // console.log("Else triggered")
        genderWarn.style.display = "none"
        genderErr = 0
    }
}

function validatePass() {
    var passField = document.getElementById('pass-inp');
    var passValue = passField.value
    var passWarn = document.getElementById('pass-warn')
    console.log(passValue)
    let pattern = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
    
    if (passValue === undefined || passValue == "") {
        passField.classList.add('input-red')
        passWarn.style.display = "block"
        passWarn.innerHTML = "Please enter your password"
        passErr = 1

    } else if (passValue.length < 8) {
        passField.classList.add('input-red')
        passWarn.style.display = "block"
        passWarn.innerHTML = "Password should be atleast 8 characters long"
        passErr = 1

    } else if (!pattern.test(passValue)) {
        passField.classList.add('input-red')
        passWarn.style.display = "block"
        passWarn.innerHTML = "Password should contain Uppercase lowercase letters, number and speacial characters"
        passErr = 1

    }
     else {
        passField.classList.remove('input-red')
        passWarn.style.display = "none"
        passErr = 0

    }
}

function submitForm() {
    console.log("submitForm was clicked")
    // event.preventDefault()
    validateName()
    validateMail()
    validateGender()
    validatePass()

    if(nameErr || genderErr || mailErr || passErr) {
        error = 1
    } else {
        error = 0
    }

    if (error == 0) {
        var submitButton = document.getElementById('form-submit')
        submitButton.innerHTML = "<img height='30px' src='./assets/loading.jpg' />"
        setTimeout(function() {
            submitButton.className = 'bg-green'
            submitButton.innerHTML = "Form submitted"
            
        }, 1000)
    } else {
        var submitButton = document.getElementById('form-submit')
        submitButton.innerHTML = "<img height='30px' src='./assets/loading.jpg' />"
        setTimeout(function() {
            submitButton.className = 'bg-red'
            submitButton.innerHTML = "Error, please check details"
            
        }, 1000)
    }
   
}