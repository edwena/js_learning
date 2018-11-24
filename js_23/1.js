document.getElementById('mySlide').onmousemove = function (event) {
    var x = event.offsetX;
    console.log(x);
    document.getElementById('two').style.width = x + 'px';
}

document.getElementById('mySlide').onmouseleave = function(event){
    document.getElementById('two').style.width = '640px';
}