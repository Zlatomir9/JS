function lowestPriceInCities(input) {
    let res = [];

    for (let i = 0; i < input.length; i++) {
        let inputData = input[i].split(' | ');
        let currentProduct = inputData[1];
        let currentPrice = Number(inputData[2]);
        let currentTown = inputData[0];

        if (res.some(x => x.product == currentProduct)) {
            let productIndex = res.findIndex(obj => {
                return obj.product == currentProduct;
            });

            if (res[productIndex].price > currentPrice) {

                res[productIndex].townName = currentTown;
                res[productIndex].price = currentPrice;

            }
        } else {

            addProduct(res, currentProduct, currentTown, currentPrice);
        };
    };

    for (const product of res) {
        console.log(`${product.product} -> ${product.price} (${product.townName})`)
    };

    function addProduct(array, productName, townName, price) {
        array.push({
            product: productName,
            townName: townName,
            price: price
        });
    }
};

lowestPriceInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);

console.log("-------------------------------------");

lowestPriceInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']);