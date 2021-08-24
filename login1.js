function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin" && password=="admin"){
        alert("login sucessfull");
        return false;
    }
    else{
        alert("login falied");
    }
}

function RegisterForm(){
    var rus=document.getElementById("newuser").value;
    var rps=document.getElementById("newpassword").value;
    var rem=document.getElementById("email").value;
    if((rus.value!= null || rus.value!="" )&& (rps.value!=null|| rps.value!="")&&(rem.value!=null||rem.value!="")){
        alert("Registartion Successful");
        return false;
        
   
    }
}