function solve(input){
    
    let currentNumber = 1;
    let arr = [];

    for(let i = 0; i < input.length; i++){

        if(input[i] == 'add'){
            arr.push(currentNumber);
            currentNumber += 1;
        }
        else if((input[i] == 'remove') && input.length > 0){
            currentNumber += 1;
            arr.pop();
        }
    }

    if(arr.length == 0){
        console.log("Empty");
    }
    else{
        arr.forEach(element => {
            console.log(element)
        });
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);