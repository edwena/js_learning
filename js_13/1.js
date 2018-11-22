autoSlider();
var left = 0;
var timer;

function autoSlider () {
    timer = setTimeout(function(){
        var line = document.getElementById('polosa');
        left -= 256;
        if (left < -768) {
            left = 0;
            clearTimeout(timer);
        }
        line.style.left = left +'px';
        autoSlider();
    }, 1000);
}
