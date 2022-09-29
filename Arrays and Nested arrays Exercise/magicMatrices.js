function magicMatrices(input){

    let firstRowSum = 0;
    let firstColumnSum = 0;
    let result = true;

    for(let i = 0; i < input[0].length; i++){
        firstRowSum += input[0][i];
    }

    for(let k = 0; k < input.length; k++){
        firstColumnSum += input[k][0];
    }

    if(firstRowSum == firstColumnSum){

        for(let j = 1; j < input.length; j++){

            let currentRowSum = 0;

            for(let n = 0; n < input[j].length; n++){
                currentRowSum += input[j][n];
            }

            if(currentRowSum == firstRowSum){
                continue;
            }
            else{
                result = false;
            }
        }

        for(let m = 1; m < input.length; m++){

            let currentColumnSum = 0;

            for(let b = 0; b < input.length; b++){
                currentColumnSum += input[m][b];
            }

            if(currentColumnSum == firstColumnSum){
                continue;
            }
            else{
                result = false;
            }
        }
    }
    else{
        result = false;
    }

    console.log(result);
    
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);