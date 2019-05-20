function confirmDelete(){
    if ( confirm("Delete this item?") ){
        return true;
    } else {
        return false;
    }
}

function checkPassword(){
    var pass = document.getElementById("password");
    var checkPass = document.getElementById("check_password");
    var button = document.getElementById("button_submit");
    if ( pass.value == checkPass.value ) {
        button.style = "display: block";
        checkPass.style = "border: 2px solid green";
    } else {
        button.style = "display: none";
        checkPass.style = "border: 2px solid red";
    }
}