function biggestELement(input){

    let result = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < input.length; i++){
        input[i].sort((a, b) => a - b);

        let biggest = input[i][input[i].length - 1];

        if(biggest > result){
            result = biggest;
        }
    }

    return result;
}

let result = biggestELement([[20, 50, 10], [8, 33, 145]]);
let result2 = biggestELement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);

console.log(result);
console.log(result2);