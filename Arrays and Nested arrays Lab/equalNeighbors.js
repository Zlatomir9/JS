function equalNeighbors(input){
    let result = 0;

    for(let i = 0; i < input.length; i++){

        for(let k = 0; k < input[i].length; k++){
            
            if((i + 1 < input.length) && (input[i][k] === input[i + 1][k])){
                result++;
            }
            if((k + 1 < input[i].length) && (input[i][k] === input[i][k + 1])){
                result++;
            }
        }
    }

    return result;
}

let result3 = equalNeighbors([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]
);

let result = equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);

let result2 = equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);

console.log(result);
console.log(result2);
console.log(result3);