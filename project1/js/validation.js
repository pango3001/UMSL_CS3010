function hello(){
    alert("Hello");
}
function validInput(min_length, max_length){

    let name = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    var retype = document.getElementById("password_repeat").value;

    if (name==null || name==""){
        alert("Name can't be blank");
        return false;
    }
    else if(password.length <= min_length || password.length >= max_length){
        alert("Password must be at least 6 characters long.");
        return false;
    }
    else if(password != retype){
        alert("Passwords must match")
    }
}
