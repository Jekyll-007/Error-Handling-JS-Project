var a = 70;
var b = 20;
document.getElementById("number_result").innerHTML = x + y;
document.getElementById("string_result").innerHTML = String(x) + String(y);


try {
    addalert("Welcome!!!");
}
catch(err) {
    docuument.getElementById("error_message").innerHTML = err.message;
}


add = (a,b) => a + b;
document.getElementById("result").innerHTML = add(10,10);