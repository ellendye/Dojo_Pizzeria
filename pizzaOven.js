function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven('deep dish', 'traditional', ['mozzerella'], ['pepperoni', 'sausage']);
var pizza2 = pizzaOven('hand tossed', 'marinara', ['mozzerella', 'feta'], ['mushrooms','olives','onions']);
var pizza3 = pizzaOven('handmade pan', 'alfredo', ['mozzerella'], ['chicken','onions'])
var pizza4 = pizzaOven('thin', 'barbeque', ['mozzerella', 'cheddar'], ['chicken', 'bacon', 'onion'])
console.log('first funtion ', pizza1, pizza2, pizza3, pizza4, 'first function')


function pizzaOven1(){
    var crustOptions = ['hand tossed', 'deep dish', 'thin']
    var sauceOptions = ['alfredo', 'traditional', 'marinara', 'barbeque']
    var cheeseOptions = ['mozzerella', 'cheddar', 'feta']
    var toppingsOptions = ['chicken', 'bacon', 'pepperoni', 'anchovies','onion','tomatos']
    var pizza = {};
    pizza.crustType = crustOptions[Math.floor(Math.random() * crustOptions.length)];
    pizza.sauceType = sauceOptions[Math.floor(Math.random() * sauceOptions.length)];
    pizza.cheese = cheeseOptions[Math.floor(Math.random() * cheeseOptions.length)];
    pizza.toppings = toppingsOptions[Math.floor(Math.random() * toppingsOptions.length)];
    return pizza;
}

var randomPizza = pizzaOven1()
console.log('second function',randomPizza)



function pizzaOven2(){
    var crustOptions = ['hand tossed', 'deep dish', 'thin']
    var sauceOptions = ['alfredo', 'traditional', 'marinara', 'barbeque']
    var cheeseOptions = ['mozzerella', 'cheddar', 'feta']
    var toppingsOptions = ['chicken', 'bacon', 'pepperoni', 'anchovies','onion','tomatos']
    var numToppings = Math.floor(Math.random()*toppingsOptions.length);
    var pizza = {};
    pizza.crustType = crustOptions[Math.floor(Math.random() * crustOptions.length)];
    pizza.sauceType = sauceOptions[Math.floor(Math.random() * sauceOptions.length)];
    pizza.cheese = cheeseOptions[Math.floor(Math.random() * cheeseOptions.length)];
    pizza.toppings = [];
    pizza.randomToppings = function(num){
        var i = 0;
        while (i < num){
        pizza.toppings.push(toppingsOptions[Math.floor(Math.random() * toppingsOptions.length)]);
        i++;
        }
    }
    pizza.randomToppings(numToppings);
    return pizza;
}

var randomPizza2 = pizzaOven2()
console.log('third functin ',randomPizza2)







