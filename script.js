console.log('Pizza Factory!');

class Pizza {
    constructor(ingredients) {
        this.ingredients = ingredients || 'cheese';
    }

    calculateCost() {
        if(this.ingredients === 'cheese') {
            this.cost = 10;
            console.log(`This pizza costs: $${this.cost}`);
        }
        else {
            this.cost = 10 + this.ingredients.length * .99;
            console.log(`This pizza costs: $${this.cost}`);
        }
    }
}

class Order {
    constructor(items) {
        this.items = items;
        this.total = 0;
    }

    calculateTotal() {
        this.items.forEach(pizza => {
            pizza.calculateCost();
            this.total += pizza.cost;
        });
        console.log(`This order costs: $${this.total}`);
    }
}

const pizzaOne = new Pizza(['pepperoni', 'sausage', 'peppers', 'onions']);
const pizzaTwo = new Pizza();
const pizzaThree = new Pizza(['cheese', 'bacon', 'chicken']);

console.log(pizzaOne);
console.log(pizzaTwo);
console.log(pizzaThree);

const orderOne = new Order([pizzaOne, pizzaTwo, pizzaThree]);
orderOne.calculateTotal();
