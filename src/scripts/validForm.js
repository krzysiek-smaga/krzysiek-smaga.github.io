let contactForm = document.getElementById('contact-form');
let username = document.getElementById('name')
let email = document.getElementById('email')
let textMessage = document.getElementById('message')
let btnSend = document.getElementById('btn-send')

contactForm.addEventListener('input', () => {
    if (username.value.length > 0 &&
        email.value.length > 0 &&
        textMessage.value.length > 0) {
            btnSend.removeAttribute('disabled');
    } else {
        btnSend.setAttribute('disabled', 'disabled');
    }
});

function validInputs() {
    if (!username.value.match(/[A-Z][a-z]+/)) {
        alert("Please enter a valid Name.");
        return (false);
    }

    if (username.value.length < 2) {
        alert("Too short Name. Your Name must be minimum 2 characters long.");
        return (false);
    }

    if (username.value.length > 30) {
        alert("Too long Name. Your Name must be maximum 30 characters long.");
        return (false);
    }

    if (!email.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        alert("Please enter a valid email.");
        return (false);
    }

    if (textMessage.value.length < 20) {
        alert("The message is too short. Your message must be minimum 20 characters long.");
        return (false);
    }

    alert("The message was sent successfully.");
    return (true);
} 

