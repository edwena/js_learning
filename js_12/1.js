document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
    var line = document.getElementById('polosa');
    left -= 256;
    if (left < -768) {
        left = 0;
    }
    line.style.left = left +'px';
}