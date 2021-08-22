
function getRandomNum(start, end){
    var arr = [];
    for(var i=start; i <= end; i++){
        arr.push(i);
    }
    return arr[Math.floor(Math.random() * arr.length)];
}
getRandomNum(1 , 10);

function headsOrTails(){
    var coin= ["heads", "tails"]
    if(coin[Math.floor(Math.random() * 2)] == "heads")
        return "Go right"
    else{
        return "Go left"
    }
}
headsOrTails();

function reverseArray(arr){
    var reverse = [];
    for(var i = arr.length - 1; i >=0 ; i--){
        reverse.push(arr[i]);
    }
    return reverse;
}
var names = ['Alex', 'Jesse', 'Ashley', 'Aubrey'];
reverseArray(names);