function solve(data, crit) {
    let employees = JSON.parse(data);
    let [criteria, value] = crit.split("-")

    return employees
        .filter(x => x[criteria] === value)
        .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
        .join("\n")
};

let result = solve(`[{"id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"}, 
    {"id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"},  
    {"id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"}]`,
    'gender-Female');

console.log(result);