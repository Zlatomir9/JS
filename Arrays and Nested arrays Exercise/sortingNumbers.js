function sortingNumbers(numbers){

    let result = [];

    numbers.sort((a, b) => a - b);

    for(let i = 0; i < numbers.length / 2; i++){

        result.push(numbers[i]);
        
        if((numbers.length % 2 != 0) && (i == (Math.ceil(numbers.length / 2)) - 1)){
            break;
        }

        result.push(numbers[numbers.length - 1 - i]);
    }

    return result;
}

let result = sortingNumbers([1, 65, 3, 52, 56, 63, 31, -3, 18]);

console.log(result);