(function(){
    let DOM = {
        fName: ".Fname",
        lName: ".Lname",
        email: ".email1",
        password: ".password1",
        button: ".button1",
        error: ".error",
        passwordLength: ".PasswordLength",
        eye: ".img"
    }

    let firstName = document.querySelector(DOM.fName);
    let lastName = document.querySelector(DOM.lName);
    let email = document.querySelector(DOM.email);
    let password = document.querySelector(DOM.password);
    let button = document.querySelector(DOM.button);
    let error = document.querySelectorAll(DOM.error);
    let eye = document.querySelector(DOM.eye);

    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    let flag4 = false;

    eye.addEventListener("click", eyeFunction);
    button.addEventListener("click", checkField);

    function firstNameCheck () {
        let FNvalue =  firstName.value;
        console.log(FNvalue);
        console.log(FNvalue.length);
        if(FNvalue.length === 0 || !isNaN(FNvalue)){
            
            firstName.style.border = "2px solid #f77777";
            firstName.style.color = "#ff7a7a";

            error.forEach((e)=>{
                let element = e.previousElementSibling.className;

                if(element === "Fname") {
                    e.style.display = "block";
                }
            });

        }else{
            firstName.style.border = "1px solid #ccc";
            firstName.style.color = "#272d32";
            let dNone = firstName.nextElementSibling;
            dNone.style.display = "none";
            flag1 = true;

        }
    }

    function lastNameCheck () {
        let FNvalue =  lastName.value;
        if(FNvalue.length === 0 || !isNaN(FNvalue)){

            lastName.style.border = "2px solid #f77777";
            lastName.style.color = "#ff7a7a";

            error.forEach((e)=>{
                let element = e.previousElementSibling.className;

                if(element === "Lname") {
                    e.style.display = "block";
                }
            });
        }else{
            
            lastName.style.border = "1px solid #ccc";
            lastName.style.color = "#272d32";
            let dNone = lastName.nextElementSibling;
            dNone.style.display = "none";
            flag2 = true;
        }
    }

    function emailAddress () {

        let userEmail = email.value;

        if(!isNaN(userEmail.slice(0, 2)) || userEmail.search("@") === -1 || userEmail.  slice(userEmail.length - 4) !== ".com"){

            email.style.border = "2px solid #f77777";
            email.style.color = "#ff7a7a";

            error.forEach((e)=> {
                let EMerror = e.previousElementSibling.className;
                if(EMerror === "email1"){
                    e.style.display = "block";
                }
            });
        }
        else{

            email.style.border = "1px solid #ccc";
            email.style.color = "#272d32";
            flag3 = true;
            error.forEach((e)=> {
                let EMerror = e.previousElementSibling.className;
                if(EMerror === "email1"){
                    e.style.display = "none";
                }
            });
        }
    }

    function eyeFunction () {
        if(eye.children[0].className === "fa-solid fa-eye-slash") {
            eye.children[0].display = "none";
            eye.innerHTML = '<i class="fa-solid fa-eye"></i>';
            myFunction();
        }
        else{
            eye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
            password.type = "password";
        }
    }

    function myFunction () {
        if(password.type === "password"){
            password.type = "text";
        }else{
            password.type = "password";
        }
    }

    function passwordCheck () {

        let passwordValue = password.value;

        let regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#^%*?&])[A-Za-z\d@$!#^%*?&]{12,}$/;

        if(regularExpression.test(passwordValue)){

            flag4 = true;
            password.style.border = "1px solid #ccc";
            password.style.borderRight = "none";
            password.style.color = "#272d32";
            eye.style.border = "1px solid #ccc";
            eye.style.borderLeft = "none";

            error.forEach((e)=> {

                let PWerror = e.previousElementSibling.className;

                if(PWerror === "password1"){

                    e.style.display = "none";

                }

            });

        }else{

            password.style.border = "2px solid #f77777";
            password.style.borderRight = "none";
            password.style.color = "#ff7a7a";
            eye.style.border = "2px solid #ff7a7a";
            eye.style.borderLeft = "none";


            error.forEach((e)=> {
                
                let PWerror = e.previousElementSibling.className;

                if(PWerror === "password1"){

                    e.style.display = "block";
                    
                }

            });

        }
    }

    function checkField () {
        firstNameCheck();
        lastNameCheck();
        emailAddress();
        passwordCheck();

        if(flag1 === true && flag2 === true && flag3 === true && flag4 === true) {
            button.setAttribute("href", "formSubmit.html");
        }
    }

})();

function incre (e) {
    let x = e.value;
    let passwordLength = document.querySelector(".PasswordLength");
    passwordLength.innerHTML = x.length;
}