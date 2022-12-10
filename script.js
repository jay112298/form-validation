function validateName() {
    var nameField = document.getElementById('name-inp');
    var nameValue = nameField.value
    var nameWarn = document.getElementById('name-warn')

    if (nameValue === undefined || nameValue == "") {
        nameWarn.style.display = "block"
        nameWarn.innerHTML = "Please enter your name"

    } else if (nameValue.length < 2) {
        nameWarn.style.display = "block"
        nameWarn.innerHTML = "Name should be at least two characters long"
    }
     else {
        nameWarn.style.display = "none"
    }
}

function validateMail() {
    var emailField = document.getElementById('email-inp');
    var emailValue = emailField.value
    var emailWarn = document.getElementById('email-warn')

    if (emailValue === undefined || nameValue == "") {
        emailWarn.style.display = "block"
        emailWarn.innerHTML = "Please enter your email"

    } else if (nameValue.length < 2) {
        emailWarn.style.display = "block"
        emailWarn.innerHTML = "Name should be at least two characters long"
    }
     else {
        emailWarn.style.display = "none"
    }
}