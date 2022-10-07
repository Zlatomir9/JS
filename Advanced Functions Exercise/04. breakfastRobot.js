function solution (){
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    
    let recipes = {
        apple: { carbohydrate: 1, flavour: 2, },
        lemonade: { carbohydrate: 10, flavour: 20, },
        burger: { carbohydrate: 5, fat: 7, flavour: 3, },
        eggs: { protein: 5, fat: 1, flavour: 1, },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10, }
    };
    
    function restock (element, quantity) {
        ingredients[element] += Number (quantity);
        return "Success";
    };
    
    function prepare (product, quantity) {
        let recipe = recipes[product];
        for (let [key, value] of Object.entries(recipe)) {
            if (ingredients[key] < value * quantity) {
                return `Error: not enough ${key} in stock`;
            }
        }
        for (let [key, value] of Object.entries(recipe)) {
            ingredients[key] -= value * quantity;
            }

        return "Success";
    };
    
    function report() {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    };
    
    return function(input) {
        let data = input.split(' ');
        let action = data[0];
        
        if(action === `prepare`) {
            let product = data[1];
            let quantity = Number (data[2]);
            return prepare(product, quantity);
        } else if(action === `restock`) {
            let element = data[1];
            let quantity = Number (data[2]);
            return restock(element, quantity);
        } else if(action === `report`) {
            return report();
        }
    };
}

let manager = solution (); 
console.log (manager ("restock flavour 50"));
console.log (manager ("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));

// console.log(manager ("prepare turkey 1"));
// console.log(manager ("restock protein 10"));
// console.log(manager ("prepare turkey 1"));
// console.log(manager ("restock carbohydrate 10"));
// console.log(manager ("prepare turkey 1"));
// console.log(manager ("restock fat 10"));
// console.log(manager ("prepare turkey 1"));
// console.log(manager ("restock flavour 10"));
// console.log(manager ("prepare turkey 1"));
// console.log(manager ("report"));