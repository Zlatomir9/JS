function solve(elements, step){
    let result = [];

    for(let i = 0; i < elements.length; i+=step){
        result.push(elements[i]);
    }

    return result;
}

let result = solve(['5', '20', '31', '4', '20'], 2);
let result2 = solve(['dsa','asd', 'test', 'tset'], 2);
let result3 = solve(['1', '2', '3', '4', '5'], 6);

console.log(result2);
console.log(result);
console.log(result3);