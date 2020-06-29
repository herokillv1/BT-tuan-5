function getRandom(){
    return Math.floor(Math.random()*350);
}

function getRandomColor(){
    var red = getRandom();
    var green = getRandom();
    var blue = getRandom();
    return "rgb(" + red + "," + blue + "," + green +")";
}