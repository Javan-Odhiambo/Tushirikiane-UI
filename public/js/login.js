const loginBtn = document.querySelector("#login_btn");
const signUpBtn = document.querySelector("#signup_btn");
const signUpText = document.querySelector("#signup_text");
const loginText = document.querySelector("#login_text");

signUpBtn.addEventListener("click", toggler)
loginBtn.addEventListener("click", toggler);

signUpText.addEventListener("click", (e) => {
    e.preventDefault();
    signUpBtn.click();
})

loginText.addEventListener("click", (e) => {
    e.preventDefault();
    loginBtn.click();
})
