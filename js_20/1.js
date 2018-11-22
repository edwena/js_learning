//function one() {
//    alert ("Hello");
//    return 9;
//}
//
//
//one();
//console.log (5+one());

function sum(a,b){
    a = a || 10;
    b = b || 20;
    alert(a+b);
//    return (a+b);
}

document.getElementById('b1').onclick = function () {
    sum (12,6); //анонимная функция
}

var d = function () {
    alert ('work');
}

d();