function f1() {
    var n;
    n = document.getElementById("num1").value;
    p = document.getElementById("out");
    n = parseInt(n);
    if (n == 100) {
         p.innerHTML = "Число равно 100";
    }
    else if (n < 100) {
        p.innerHTML = "Число меньше 100";
    }
    else if (n > 100) {
        p.innerHTML = "Число больше 100";
    }
}