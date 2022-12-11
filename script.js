function validateName() {
    var nameField = document.getElementById('name-inp');
    var nameValue = nameField.value
    var nameWarn = document.getElementById('name-warn')

    if (nameValue === undefined || nameValue == "") {
        nameField.classList.add('input-red')
        nameWarn.style.display = "block"
        nameWarn.innerHTML = "Please enter your name"

    } else if (nameValue.length < 2) {
        nameWarn.style.display = "block"
        nameWarn.innerHTML = "Name should be at least two characters long"
    }
     else {
        nameField.classList.remove('input-red')
        nameWarn.style.display = "none"
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

    } else if (emailValue.includes("@")) {
        emailField.classList.add('input-red')
        emailWarn.style.display = "block"
        emailWarn.innerHTML = "Email should be valid"
    }
     else {
        nameField.classList.remove('input-red')
        emailWarn.style.display = "none"
    }
}

function validateGender() {
    var genderField = document.getElementById('gender-inp');
    var genderValue = genderField.value
    var genderWarn = document.getElementById('gender-warn')

    if (genderValue === undefined || genderValue == "") {
        genderField.classList.add('input-red')
        genderWarn.style.display = "block"
        genderWarn.innerHTML = "Please enter your email"

    } else if (genderValue.includes("@")) {
        genderField.classList.add('input-red')
        genderWarn.style.display = "block"
        genderWarn.innerHTML = "Email should be valid"
    }
     else {
        nameField.classList.remove('input-red')
        genderWarn.style.display = "none"
    }
}

function validatePass() {
    var passField = document.getElementById('pass-inp');
    var passValue = emailField.value
    var passWarn = document.getElementById('pass-warn')

    if (emailValue === undefined || emailValue == "") {
        passField.classList.add('input-red')
        passWarn.style.display = "block"
        passWarn.innerHTML = "Please enter your password"

    } else if (emailValue.includes("@")) {
        pass.classList.add('input-red')
        pass.style.display = "block"
        pass.innerHTML = "Password should be atleast 8 characters long"
    }
     else {
        passField.classList.remove('input-red')
        passWarn.style.display = "none"
    }
}