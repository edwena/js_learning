window.onload = function() {
    
    //window.scrollTo(x,y) - задает прокрутку до указанных координат
    
    var scrolled;
    var timer;
    
    document.getElementById('top').onclick = function() {
        scrolled = window.pageYOffset;
//        window.scrollTo(0,0);
        scrollToTop();
    }
    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled -= 5; //5 - скорость прокрутки
            timer = setTimeout(scrollToTop, 10);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
}