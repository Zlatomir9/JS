function cityTaxes(cityName, cityPopulation, cityTreasury) {
    
    return {
        name: cityName,
        population: cityPopulation,
        treasury: cityTreasury,
        taxRate: 10,
        collectTaxes: function() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth: function(percentage) {
            this.population += Math.round(this.population * (percentage / 100));
        },
        applyRecession: function (percentage){
            this.treasury -= Math.round(this.treasury * (percentage / 100));
        }
    };
};

const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);