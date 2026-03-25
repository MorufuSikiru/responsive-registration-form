
const user = document.getElementById("nameInput");

const createUser = document.getElementById("userNameInput");

const userEmail = document.getElementById("emailInput");

const userPassword = document.getElementById("passwordInput");

const confirmPassword = document.getElementById("confirmPasswordInput");

const button = document.getElementById("regBtn");

const successMessage =document.getElementById("successMessage");
const togglePassword = document.getElementById("togglePassword");

const usernameRegex = /^[A-Za-z]+$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

let userValid = false;
let createUserValid = false;
let userEmailValid = false;
let userPasswordValid = false;
let confirmPasswordValid = false;

user.addEventListener("input", handleTyping);


createUser.addEventListener("input", handleTyping);

 
userEmail.addEventListener("input", handleTyping);


userPassword .addEventListener("input", handleTyping);


confirmPassword .addEventListener("input", handleTyping);





function handleTyping(){
  
let nameInput = user.value.trim();
if(nameInput===""){
   nameResult.textContent = "please enter your full name";
   nameResult.style.color="red";
   user.style.border= "2px solid red";
   button.disabled=true;
   userValid=false;
   return;
}else if (/\d/.test(nameInput)){
   nameResult.textContent="name cannot contain number";
    nameResult.style.color="red";
    user.style.border="2px solid red";
    button.disabled=true;
    userValid=false;
    return;
}else{
user.style.border="2px solid green";
nameResult.textContent="";
button.disabled=false;
userValid=true;
};

let userNameInput = createUser.value.trim();
if (userNameInput===""){
   userNameResult.textContent="please create your username";
   userNameResult.style.color="red";
    createUser.style.border="2px solid red";
    button.disabled=true;
    createUserValid=false;
    return;
}else if (userNameInput.length<5){
  userNameResult.textContent="username must be at least 5 characters long";
   userNameResult.style.color="red"
    createUser.style.border="2px solid red";
    button.disabled=true;
    createUserValid=false;
    return;
}else if(/\d/.test(userNameInput)){
  userNameResult.textContent="username cannot contain number";
userNameResult.style.color="red";
  
  createUser.style.border="2px solid red"; 
  button.disabled=true;
  createUserValid=false;
return;
} else if(userNameInput.includes(" ")){
    userNameResult.textContent="user name cannot contain space";
    createUserValid=false;
}else if (!usernameRegex.test(userNameInput)){
    userNameResult.textContent="username must contain only letters (no special characters)";
    userNameResult.style.color="red"
    userNameInput.style.border="2px solid red";
    button.disabled=true;
    createUserValid=false;
    return;

}else{
    createUser.style.border="2px solid green";
    userNameResult.textContent= "";
    button.disabled=false;
    createUserValid=true;
}


let emailInput = userEmail.value.trim();

if (emailInput === "") {
    emailResult.textContent = "Email field can't be empty";
    emailResult.style.color = "red";
    userEmail.style.border = "2px solid red";
    button.disabled = true;
    userEmailValid = false;
    return;

} else if (!emailRegex.test(emailInput)) {
    emailResult.textContent = "Invalid email address";
    emailResult.style.color = "red";
    userEmail.style.border = "2px solid red";
    button.disabled = true;
    userEmailValid = false;
    return;

} else {
    emailResult.textContent = "";
    userEmail.style.border = "2px solid green";
    button.disabled = false;
    userEmailValid = true;
}

let passwordInput = userPassword.value.trim();
if(passwordInput===""){
    passwordResult.textContent="Please create a password";
    passwordResult.style.color="red";
    userPassword.style.border="2px solid red";
    button.disabled=true;
    userPasswordValid=false;
    return;

} else if(!passwordRegex.test(passwordInput)){
    passwordResult.textContent="Password must be at least 8 characters and include a number and special character";
    passwordResult.style.color="red";
    userPassword.style.border="2px solid red";
    button.disabled=true;
    userPasswordValid=false;
    return;
}else{
    passwordResult.textContent="";
    userPassword.style.border="2px solid green";
    button.disabled=false;
    userPasswordValid=true;

    
}



let confirmPasswordInput = confirmPassword.value.trim();
if(confirmPasswordInput===""){
    confirmPasswordResult.textContent="please confirm your password";
    confirmPasswordResult.style.color="red";
    confirmPassword.style.border="2px solid red";
    button.disabled=true;
    confirmPasswordValid =false;
    return;
}else if(confirmPasswordInput !== passwordInput){
    confirmPasswordResult.textContent="passwords do not match";
    confirmPasswordResult.style.color="red";
    confirmPassword.style.border="2px solid red";
    button.disabled=true;
    confirmPasswordValid =false;
    return;

}else{
    confirmPasswordResult.textContent="";
    confirmPassword.style.border="2px green solid ";
    button.disabled=false;
    confirmPasswordValid =true;
}

}

togglePassword.addEventListener("click", function () {
    if (userPassword.type=="password"){
        userPassword.type="text";
        // togglePassword.textContent="🙈";

    }else{
        userPassword.type="password";
        togglePassword.textContent="👁️";
    }
});

regBtn.addEventListener("click", function () {
    

    if(userValid && createUserValid && userEmailValid && userPasswordValid && confirmPasswordValid ){
        successMessage.textContent="Registration successful";
        successMessage.style.color="green";
        
    }else{
        successMessage.textContent="";
         alert("Please fix the errors before registering");
    }
})
