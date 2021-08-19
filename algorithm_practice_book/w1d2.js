//create function that gives multiples of 7 up to 1000.

function multiplesOfSeven(){
    for (var i = 1; i < 1001; i++){
        console.log(i * 7);
    }
}
multiplesOfSeven();

//create funtion that prints all even numbers of given variable.
function evenNums(num){
    for (var i = 1; i < num + 1; i++){
        if(i%2 === 0){
            console.log(i);
        }
    }
}
evenNums(200)
