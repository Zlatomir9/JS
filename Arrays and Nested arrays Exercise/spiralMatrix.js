function spiralMatrix(x, y){

    let arr = Array.from({ length: x }, () => []);
    let row = 0;
    let col = 0;
    let rowEnd = x - 1;
    let colEnd = y - 1;
    let counter = 1;

    while (col <= colEnd && row <= rowEnd) {

        for (let i = col; i <= colEnd; i++) {
            arr[row][i] = counter;
            counter++;
        }
        row++;

        for (let i = row; i <= rowEnd; i++) {
            arr[i][colEnd] = counter;
            counter++;
        }
        colEnd--;

        for (let i = colEnd; i >= col; i--) {
            arr[rowEnd][i] = counter;
            counter++;
        }
        rowEnd--;

        for (let i = rowEnd; i >= row; i--) {
            arr[i][col] = counter;
            counter++;
        }
        col++;
    }

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].join(' '))
    }
}

spiralMatrix(5, 5);

console.log("---------------------------------------");
spiralMatrix(3, 3);