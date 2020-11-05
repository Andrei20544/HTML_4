let btn = document.getElementById('buttonD');

let one = document.getElementById('num_One');
let two = document.getElementById('num_Two');


function NOD(x, y){
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
}

btn.onclick = function (){
    alert("Наибольший общий делитель = " + NOD(parseInt(one.value), parseInt(two.value)));
}



