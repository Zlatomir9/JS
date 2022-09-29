function diagonalAttack(matrix){

    let principal = 0; 
    let secondary = 0;

    let numbers = [];

    for(let k = 0; k < matrix.length; k++){
        numbers[k] = matrix[k].split(" ").map(Number);
    }

    for (let i = 0; i < numbers.length; i++){
        principal += numbers[i][i];
        secondary += numbers[i][numbers.length - i - 1];
    }

    if(principal == secondary){
        for (let n = 0; n < numbers.length; n++) {
            for (let j = 0; j < numbers.length; j++) {
                if( n !== j && n !== numbers.length - j - 1)  {
                    numbers[n][j] = principal;
                }
            }
        }

        printMatrix(numbers);
    }
    else{
        printMatrix(numbers);
    }

    function printMatrix(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']);