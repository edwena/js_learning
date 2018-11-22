var n = {
    "one" : 12,
    "hello" : "world",
    "prim" : 2000,
    "double key" : 777
//    ключ : значение
};
n.one = 9000;
console.log(n['prim']);
console.log(n.one);
console.log(n['double key']);
//к названию с пробелом надо обращаться в кавычках
var ppp = 'hello';
//n.ppp - неправильно
console.log(n[ppp]);

var out = document.getElementById('out');
for (var key in n) {
//    переменная, в каком массиве будет 
    out.innerHTML += key +' --- '+n[key]+ '<br> ';
//    можно получить все ключи и значения массива
}