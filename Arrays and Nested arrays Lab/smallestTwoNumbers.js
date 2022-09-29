function smallestTwoNumbers(input){
    input.sort((a, b) => a - b);

    return input[0] + ' ' + input[1];
}

let result = smallestTwoNumbers([30, 15, 50, 5]);
let result2 = smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

console.log(result);
console.log(result2);