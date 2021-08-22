
function getRandomNum(){
    var arr = [];
    for(var i=1; i < 101; i++){
        arr.push(i);
    }
    return arr[Math.floor(Math.random() * arr.length)];
}
getRandomNum();

