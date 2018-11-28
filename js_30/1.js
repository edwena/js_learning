//var number = Math.floor(Math.random() * (max - min + 1) + min);
var number = Math.floor(10 * Math.random()) + 1;
var count = 3;

console.log(number);

document.getElementById('check').onclick = function (){
    if (count > 0) {
        var userNum = document.getElementById('myNum').value;
        userNum = parseInt(userNum);

        var out = document.getElementById('out');
        
        if (userNum == number) {
            out.innerHTML = 'Ура! Правильно :)';
        } else if (userNum > number) {
            out.innerHTML = 'Попробуй число поменьше!';
        } else {
            out.innerHTML = 'Нет, я загадала число больше!';
        }
        
        count--;
        document.getElementById('try').innerHTML = 'Осталось попыток: ' + count;
        if (count == 0) {
            alert ('Попытки закончились! Ты проиграл! Теперь я обновлю страничку!');
        location.reload();
        }
    }
}