document.onwheel = function (event) {
    console.log(event);
    if (event.deltaY > 0) {
        document.getElementById('line').innerHTML = 'вниз';
    } else {
        document.getElementById('line').innerHTML = 'вверх';
    }
    var speed = event.deltaY;
    speed = Math.abs(speed);
    if (speed < 150) {
        document.getElementById('speed').innerHTML = 'низкая';
    } else if (speed < 251) {
        document.getElementById('speed').innerHTML = 'средняя';
    } else {
        document.getElementById('speed').innerHTML = 'высокая';
    }
}

var left_p = 290;
document.getElementById('test1').onwheel = function (event) {
    var line = event.deltaY;
    left_p += line * 0.02;
    if (left_p < 0) {
        left_p = 0;
    }
    else if (left_p > 590) {
        left_p = 590;
    }
    document.getElementById('test2').style.left = left_p + 'px';
    return false;
}