const emailInput = document.querySelector('#loginEmail');
const passInput = document.querySelector('#loginPassword');
const loginBtn = document.querySelector('#login');

let users = JSON.parse(localStorage.getItem('users')) || [];

function checkUser(loginEmail, loginPassword) {

    for (let user of users) {
        if (user.userEmail.toLowerCase() === loginEmail.toLowerCase() && user.userPass === loginPassword) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = "./home.html";
            return user;
        }
    }
    Swal.fire({
            title: "Invalid email or password!",
            icon: 'error',
            iconColor: '#212D40',
            confirmButtonColor: '#212D40'
        })  
    return null;
}

loginBtn.addEventListener("click", function() {
    const loginEmail = emailInput.value;
    const loginPassword = passInput.value;
    checkUser(loginEmail, loginPassword);
});
