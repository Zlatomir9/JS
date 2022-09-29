function solve(arr, delimeter){

    let result = '';

    for(let i = 0; i < arr.length; i++){

        if(i !== arr.length - 1){
            result += arr[i] + delimeter;
        }
        else{
            result += arr[i];
        }
    }

    console.log(result);
}

solve(['One', 'Two', 'Three', 'Four', 'Five'], '-');
solve(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');