var character = ' ';

document.getElementById('test').onkeypress = function(event) {
//    console.log(event);
    character += event.key;
    console.log(character);
    this.value += String.fromCharCode(getRandomInt(65, 122));
//    console.log(String.fromCharCode());
    return false;
}



//97-122 small letters
//65-90 big letters

function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min; 
    }