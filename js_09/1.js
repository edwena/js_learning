function f1() {
    var p;
    p = document.getElementById("out");
    for (var i=0; i<100; i++) {
        p.innerHTML += i+' ';
    }
}