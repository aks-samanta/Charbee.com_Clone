let val = false;
localStorage.setItem("val", JSON.stringify(val));

document.getElementById("button").addEventListener("click",(event)=> {
    formFun(event);
});



let formFun = (event)=> {
    event.preventDefault();
    let form = document.getElementById("form");

    if(form.email.value == "" || form.password.value == "" || form.number.value == ""){
        alert("All details need to be filled");
    }else{
        let userSignupData = {
            email : form.email.value,
            password : form.password.value,
            number : form.number.value,
        }
        val = true;

        localStorage.setItem("val", JSON.stringify(val));
        localStorage.setItem("userSignupData", JSON.stringify(userSignupData));

        // console.log(userSignupData);
        alert("Your account succesfully created");

        form.email.value = null;
        form.password.value = null;
        form.number.value = null;

        window.location.href="./login.html";
    };
};

