function townsToJSON(input) {
    let res = [];

    for (let i = 1; i < input.length; i++) {
        let [town, latitude, longitude] = input[i].split(/[|]+/).filter(n => n);
        let townName = town.trim();
        let latitudeNumber = Number(latitude).toFixed(2);
        let longitudeNumber = Number(longitude).toFixed(2);

        let currObj = {
            Town: townName,
            Latitude: Number(latitudeNumber),
            Longitude: Number(longitudeNumber)
        };

        res.push(currObj);
    };

    console.log(JSON.stringify(res));
};

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);