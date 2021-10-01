function verify() {
    "use strict";
    var regex = /\S+@\S+\.\S+/,
        validation = regex.test(document.getElementById("email").value),
        text;
    if (!validation) {
         document.getElementById("warning").style.display = "block";
        text = "Please provide a valid email address";
        document.getElementById("email").style.outline = "1px solid red";
    } else {
        document.getElementById("email").style.outline = "1px solid $Pale-Blue";
        document.getElementById("warning").style.display = "none";
        
    }
    document.getElementById("warning").innerHTML = text;
}
