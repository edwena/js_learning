var movement = 0;
var timer;

var test = document.getElementById('test');

//setInterval(function_name, time);

//move();

function move() {
    test.style.marginLeft = movement +'px';
    movement = movement + 10;
    timer = setTimeout(move, 50);
}

//var sI = setInterval(move, 50); // ls = 1000;
document.getElementById('stop').onclick = function () {
//    clearInterval(sI);
    clearInterval(timer);
}

//setTimeout(move, 5000);
var a = 10;
backC();
function backC() {
    document.getElementById('out').innerHTML = a;
    a--;
    if (a<0) {
        clearTimeout(timer);
        alert('Всё досчиталось!');
    } else {
        timer = setTimeout(backC, 1000);
    }
}
