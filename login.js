let userSignupData = JSON.parse(localStorage.getItem("userSignupData"));
// console.log("userSignupData:",userSignupData);
let val = false;
localStorage.setItem("val", JSON.stringify(val));


document.getElementById("SignButton").addEventListener("click",()=> {
    signFun();
})


let signFun = ()=> {
    let form = document.getElementById("form");

    if(form.email.value == "" || form.password.value == ""){
        alert("Invalid Credentials");
    }else if(form.email.value != userSignupData.email){
        alert("Invalid Email Id");
        form.email.value = null;
    }else if(form.password.value != userSignupData.password){
        alert("Wrong Password");
        form.password.value = null;
    }else if(form.email.value == userSignupData.email && form.password.value == userSignupData.password){
        alert("Succesfully Login");
        val = true;
        localStorage.setItem("val", JSON.stringify(val));

        window.location.href = "./index.html";
    };
};


