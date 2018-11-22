function get_nums () {
    var num1, num2;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);
    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);
}

function plus() {  
    document.getElementById("out").innerHTML = num1 + num2;
}

function minus() {
    document.getElementById("out").innerHTML = num1 - num2;
}

function inc() {
    document.getElementById("out").innerHTML = num1 * num2;
}

function div() {
    document.getElementById("out").innerHTML = num1 / num2;
}