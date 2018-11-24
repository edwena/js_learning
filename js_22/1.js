document.onmousemove = function () {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_jigglypuff-64.png" id="puff">');
    var puff = document.getElementById('puff');
    puff.style.position = 'fixed';
    

    document.onmousemove = function(event) {

        puff.style.left = event.clientX +20+'px';
        puff.style.top = event.clientY +20+'px';
    }
}