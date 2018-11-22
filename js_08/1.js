var progNum, tempOut;

progNum = Math.floor((Math.random() * 10) + 1);
//tempOut = document.getElementById("temp-out");
//tempOut.innerHTML = progNum;

function f1() {
    var num, out;

    
    num = document.getElementById("mynum").value;
    out = document.getElementById("out");
    
    if (num == progNum) {
        out.innerHTML = 'Вы угадали';
    }
    else if (num > progNum) {
        out.innerHTML = 'Вы ввели число больше';
    }
    else {
        out.innerHTML = 'Вы ввели число меньше';
    }
        
}