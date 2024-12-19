
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userPass = document.querySelector('#password');

let users = JSON.parse(localStorage.getItem('users')) || [];

function addUser(){
    if (!userName.value || !userEmail.value || !userPass.value) {
        Swal.fire({
            title: 'All fields are required!',
            icon: 'error',
            iconColor: '#212D40',
            confirmButtonColor: '#212D40'
        })  
        return;
    }
    
     if (isEmailUsed(userEmail.value)) {
        Swal.fire("Email is already registered!");
        return;
    }
    if (!isEmailValid(userEmail.value)) {
        Swal.fire("Please enter a valid email address!");
        return;
    }
    const user = {
        userName: userName.value,
        userEmail: userEmail.value,
        userPass: userPass.value
    };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "User Registered Successfully! Please Log In.",
        showConfirmButton: false,
        timer: 1500
});
     setTimeout(() => {
        window.location.href = "./sign-in.html";
    }, 1500);
}


function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isEmailUsed(email) {
    return users.some(user => user.userEmail.toLowerCase() === email.toLowerCase());
}

