function increasingSubset(elements){

    let biggestNum = Number.MIN_SAFE_INTEGER;

    let result = [];

    for(let i = 0; i < elements.length; i++){

        if(elements[i] >= biggestNum){

            biggestNum = elements[i];
            result.push(elements[i]);
        }
    }

    return result;
}

let result = increasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
let result1 = increasingSubset([1, 2, 3, 4]);
let result2 = increasingSubset([20, 3, 2, 15, 6, 1]);

console.log(result);
console.log(result1);
console.log(result2);