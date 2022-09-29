function carFactory(car) {
    if(car.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800
        };
    } else if(car.power > 90 && car.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400
        };
    } else if(car.power > 120 && car.power <= 200) {
        car.engine = {
            power: 200,
            volume: 3500
        };
    }

    delete car.power;

    car.carriage = {
        type: car.carriage,
        color: car.color
    };

    delete car.color;

    if(car.wheelsize % 2 == 0) {
        let size = car.wheelsize - 1;
        car.wheels = [size, size, size, size];
    } else {
        car.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];
    }

    delete car.wheelsize;

    return car;
};

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});