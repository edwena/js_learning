window.onload = function() { //для того чтобы не писать defer в хтмл

    for (var i=0; i<9; i++) {
        document.getElementById('game').innerHTML+='<div class="block"></div>';
    }
    
    var move = 0;
    var check_begin = 0;
    
    document.getElementById('game').onclick = function(event){
        console.log(event);
        if (event.target.className == 'block') {
            if (move % 2 == 0) {
                event.target.className = 'block me';
                check_begin++;
            } else {
                event.target.className = 'block comp';
            }
            move++;
        }
        if (check_begin >= 3) {
            checkWinner();
        }
    }
    
    function checkWinner() {
        var allblock = document.getElementsByClassName('block');
        console.log(allblock);
//        console.log(allblock.className);
        
        for (var i = 0; i < 9; i++) {
        
            if  ((allblock[0].classList == 'block me' && allblock[1].className == 'block me' && allblock[2].className == 'block me') ||
                (allblock[3].classList == 'block me' && allblock[4].className == 'block me' && allblock[5].className == 'block me') ||
                (allblock[6].classList == 'block me' && allblock[7].className == 'block me' && allblock[8].className == 'block me') ||
                (allblock[0].classList == 'block me' && allblock[3].className == 'block me' && allblock[6].className == 'block me') ||
                (allblock[1].classList == 'block me' && allblock[4].className == 'block me' && allblock[7].className == 'block me') ||
                (allblock[2].classList == 'block me' && allblock[5].className == 'block me' && allblock[8].className == 'block me') ||
                (allblock[0].classList == 'block me' && allblock[4].className == 'block me' && allblock[8].className == 'block me') ||
                (allblock[2].classList == 'block me' && allblock[4].className == 'block me' && allblock[6].className == 'block me')) {
                    alert('Я выиграла!');
            } else if ((allblock[0].classList == 'block comp' && allblock[1].className == 'block comp' && allblock[2].className == 'block comp') ||
                      (allblock[3].classList == 'block comp' && allblock[4].className == 'block comp' && allblock[5].className == 'block comp') ||
                      (allblock[6].classList == 'block comp' && allblock[7].className == 'block comp' && allblock[8].className == 'block comp') ||
                      (allblock[0].classList == 'block comp' && allblock[3].className == 'block comp' && allblock[6].className == 'block comp') ||
                      (allblock[1].classList == 'block comp' && allblock[4].className == 'block comp' && allblock[7].className == 'block comp') ||
                      (allblock[2].classList == 'block comp' && allblock[5].className == 'block comp' && allblock[8].className == 'block comp') ||
                      (allblock[0].classList == 'block comp' && allblock[4].className == 'block comp' && allblock[8].className == 'block comp') ||
                      (allblock[2].classList == 'block comp' && allblock[4].className == 'block comp' && allblock[6].className == 'block comp')) {
                    alert('О нет!');
            }
            
        }
        
    }
}