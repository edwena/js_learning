function out() {
    var p;
    p = document.getElementById("out");
//    p.innerHTML = "Hello"; не работает в интернет эксплорере
//    p.innerText += " Hi";
// а в innerText теги не обрабатываются браузером -- удобно выводить код и показывать, чего там

    //    p.insertAdjacentHTML("beforeBegin","Hi")
//beforeBegin - перед открывающим тегом
//afterBegin - после открывающего тега
//beforeEnd - перед закрывающим тегом
//afterEnd - после закрывающего тега
    p.outerHTML = '<div class="one">Hello</div>';
    
}