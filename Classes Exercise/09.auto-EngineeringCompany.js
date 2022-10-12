function solve(input) {
    let cars = new Map();

    for (let i = 0; i < input.length; i++) {
        let [make, model, produced] = input[i].split(' | ');

        if (!cars.has(make)) {
            cars.set(make, new Map());
        };

        let models = cars.get(make);
            if (!models.has(model)) {
                models.set(model, 0);
            }
            models.set(model, models.get(model) + Number(produced));
    };

    for (let make of cars.keys()) {
        console.log(make);

        let models = cars.get(make);
        for (let model of models.keys()) {
            console.log(`###${model} -> ${models.get(model)}`);
        }
    }
};

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);