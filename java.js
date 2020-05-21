function validateField(){
    
    var box = document.getElementById("Password");
    var text = document.getElementById("label");
    var box2 = document.getElementById("Confirm Password");
    var text2 = document.getElementById("label2");

    if(box.value.trim().length < 8) {
        box.style.border = "solid 2px red";
        text.style.visibility = "visible";
        return false;
    }
    else if(box.value.trim() != box2.value.trim()){
        box2.style.border = "solid 2px red";
        text2.style.visibility = "visible";
        return false;
    }
    else{
        return true;
    }
}
