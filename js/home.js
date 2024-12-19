const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));


const homePage = document.querySelector('.home');
homePage.innerHTML = `
<h1>Welcome, ${loggedInUser.userName}!</h1>
<p>Want to sign out? <a href="./sign-in.html" id="signOut">Sign Out</a></p>
`;

const signOut = document.querySelector('#signOut');
signOut.addEventListener('click', function () {
    localStorage.removeItem('loggedInUser');
});
