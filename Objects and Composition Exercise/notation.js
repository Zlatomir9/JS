function solve(input) {

    let numbers = [];

    for(let i = 0; i < input.length; i++) {
        if(typeof input[i] == 'number') {
            numbers.push(input[i]);
        } else {
            if (numbers.length >= 2) {

                let secondNum = numbers.pop();
                let firstNum = numbers.pop();
                let result;

                switch(input[i]) {
                    case '+': result = firstNum + secondNum;
                    break;
                    case '-': result = firstNum - secondNum;
                    break;
                    case '*': result = firstNum * secondNum;
                    break;
                    case '/': result = firstNum / secondNum;
                }

                numbers.push(result);
            } else {
                console.log(`Error: not enough operands!`);
                return;
            }
        }
    }

    if(numbers.length == 1) {
        console.log(numbers[0]);
    } else if (numbers.length > 1) {
        console.log(`Error: too many operands!`);
    }
};

// solve([3, 4, '+']);
// solve([5, 3, 4, '*', '-']);
// solve([15, '/']);
// solve([7, 33, 8, '-']);

solve([31, 2, '+', 11, '/']);