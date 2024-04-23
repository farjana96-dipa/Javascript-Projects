let form = document.querySelector("#form");
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";
const PASS = "Password is not match!!";


let uname = form.elements['name'].value;
let email = form.elements['email'].value;
let pass  = form.elements['password'].value;
let repass = form.elements['repass'].value;

function showMessage(input,message,type){
    let f = document.querySelector("#form");
    const msg = f.parentNode.querySelector("small");
    msg.innerText = message;
    input.className = type ? 'success' : 'error';
    return type;
}
function showError(input,message){
    return showMessage(input,message,false);
}
function showSuccess(input){
    return showMessage(input, "" , true);
}
function hasValue(input,message){
    if(input === ""){
        return showError(input,message);
    }
    return showSuccess(input);
}
function validateEmail(input,rqmsg , invalidmsg){
    if(!hasValue(input,rqmsg)){
        return false;
    }
    const RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!RegExp.test(input)){
        showError(input,invalidmsg);
    }
    return true;
}

function checkPass(input1,input2,message){
    if(input1 !== input2){
       return showError(input2,message);
    }
    return true;
}



form.addEventListener("submit", function(event) {
    event.preventDefault();

    let nameValid = hasValue(uname,NAME_REQUIRED);
    let emailValid = validateEmail(email, EMAIL_REQUIRED, EMAIL_INVALID);
    let passValid = checkPass(pass,repass,PASS);

    if(nameValid && emailValid && passValid){
        alert("Demo only no form was posted!");
    }
});