function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven('thin', 'pesto', ['mozzarella', 'feta', 'parmesean'], ['avocado', 'onion']);
console.log(pizza3);

var crustType = [
    'thin', 
    'stuffed', 
    'deep dish', 
    'regular'
]

var sauceType = [
    'marinara',
    'spicy marinara',
    'pesto', 
    'alfredo'
]

var cheese = [
    'parmesean',
    'mozzarella',
    'gouda',
    'asiago'
]

var toppings = [
    'pepperoni',
    'mushrooms',
    'bell pepper',
    'sausage'
] 

function randomPick(arr){
    var i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

function randomPizza(){
    var pizza = {};
    pizza.crustType = randomPick(crustType);
    pizza.sauceType = randomPick(sauceType);
    pizza.cheese = randomPick(cheese);
    pizza.toppings = randomPick(toppings);
    return pizza;
}

console.log(randomPizza());
console.log(randomPizza());
console.log(randomPizza());
console.log(randomPizza());
console.log(randomPizza());


