var likes1 = 0;
var likes2 = 0;
var likes3 = 0;

var likeElement1 = document.querySelector('#likes1')
var likeElement2 = document.querySelector('#likes2')
var likeElement3 = document.querySelector('#likes3')


function add1(){
    likes1++;
    likeElement1.innerText = likes1 + ' like(s)';
}

function add2(){
    likes2++;
    likeElement2.innerText = likes2 + ' like(s)';
}

function add3(){
    likes3++;
    likeElement3.innerText = likes3 + ' like(s)';
}



function reset(){
    likes1 = 0;
    likes2 = 0;
    likes3 = 0;
    likeElement1.innerText = likes1 + ' like(s)';
    likeElement2.innerText = likes2 + ' like(s)';
    likeElement3.innerText = likes3 + ' like(s)';
}

function visible(element){
    element.style.backgroundColor = "pink";
    element.style.color = "white";
    element.innerText = 'you found the hidden reset button!'
}

function normal(element){
    element.style.backgroundColor = "beige";
    element.style.color = "royalblue";
    element.innerText = "Hidden Reset Button"
}