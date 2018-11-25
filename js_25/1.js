//document.onkeypress = function(event) {
//    console.log(event);
//    if (event.shiftKey) {
//        console.log('Нажата shift');
//    }
//}

document.getElementById('test').onkeypress = function(event) {
//    console.log(event);
    if (event.keyCode < 48 || event.keyCode > 57) {
        console.log('Это не цифра!');
        return false;
    }
}