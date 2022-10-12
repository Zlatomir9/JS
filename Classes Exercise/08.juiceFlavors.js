function solve(input) {

    let store = {};
    let result = {};

    for (let i = 0; i < input.length; i++) {
        let [item, quantity] = input[i].split(' => ');

        if (store[item]) {
            store[item] += Number(quantity);
        } else {
            store[item] = Number(quantity);
        }

        if (store[item] >= 1000) {
            if (result[item]) {
                result[item] += Number(quantity);
            } else {
                result[item] = store[item];
            }
        }
    }

    for (let item in result) {
        let bottles = Math.floor(result[item] / 1000);
            console.log(`${item} => ${bottles}`)
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])