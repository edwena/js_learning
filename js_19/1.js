var goods = {
    "23432" : {
        "name" : "Морковка",
        "cost" : 15,
        "img" : "https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/carrot-512.png",
        "depot" : 1
    },
    "23433" : {
        "name" : "Варенье",
        "cost" : 65,
        "img" : "https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/jar-512.png",
        "depot" : 0
    },
    "23456" : {
        "name" : "Уточка",
        "cost" : 30,
        "img" : "https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/rubber-duck-512.png",
        "depot" : 1
    }
};

console.log(goods);
var out = '';
for (var key in goods) {
    out+='Название: '+goods[key].name + '<br>';
    out+='Цена: '+goods[key].cost + '<br>';
    out+='Наличие: '+goods[key].depot + '<br>';
    out+= '<img src="'+goods[key].img+'">';
    out+= '<hr>';
}
document.getElementById('out').innerHTML = out;