var block = document.getElementById('test');
var m_left = 0;
var m_top = 0;

document.onkeydown = function (event) {
    console.log(event);
    if (event.key == 'ArrowRight') {
        m_left++;
        block.style.left = m_left + 'px';
    }
    if (event.key == 'ArrowDown') {
        m_top++;
        block.style.top = m_top + 'px';

    }
    if (event.key == 'ArrowLeft') {
        if (m_left > 0) {
            m_left--;
            block.style.left = m_left + 'px';

        }
    }
    if (event.key == 'ArrowUp') {
        if (m_top > 0) {    
            m_top--;
            block.style.top = m_top + 'px';

        }
    }
}

//document.onkeyup = function(event) {
//    console.log('Отпустили клавишу');
//}