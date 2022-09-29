function townPopulation(towns) {
    let townData = towns
        .map(town => {
            let data = town.split(' <-> ');

            return{
                name: data[0],
                population: Number(data[1])
            }
        })
        .reduce((result, town) => {
            if(result[town.name] === undefined) {
                result[town.name] = town.population;
            } else {
                result[town.name] += town.population;
            }

            return result;
        }, {});

    for (const town in townData) {
        console.log(`${town} : ${townData[town]}`);
    }
};

// townPopulation(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']);

// console.log("----------------------------------------------------------------------");

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);