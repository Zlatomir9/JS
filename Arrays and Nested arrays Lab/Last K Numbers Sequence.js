function solve(arrLength, previousElements){

    let result = [1];
    let currentSum = 0;

    for(let i = 1; i < arrLength; i++)
    {
      if(result.length <= previousElements){
        for(let k = 0; k < result.length; k++){
          currentSum += result[k];
        }

        result[i] = currentSum;
        currentSum = 0;
      }
      else{
        let currentArr = result.slice(i - previousElements);

        for(let j = 0; j < currentArr.length; j++){
          currentSum += currentArr[j];
        }
        result[i] = currentSum;
        currentSum = 0;
      }
    }

    return result;
}

let result = solve(6, 3);
let result1 = solve(8, 2);

console.log(result);
console.log(result1);