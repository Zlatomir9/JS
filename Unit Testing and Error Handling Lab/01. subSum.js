function sum(arr, startIndex, endIndex)  {
    let result = 0;

    if(!Array.isArray(arr)) {
        return NaN;
    }

    if(startIndex < 0) {
        startIndex = 0;
    }

    if(endIndex >= arr.length - 1){
        endIndex = arr.length - 1;
    }

    for (let i = startIndex; i < endIndex + 1; i++){
        result += Number(arr[i]);
    }

    return result;
}

sum([10, 20, 30, 40, 50, 60], 3, 300);
sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
sum([10, 'twenty', 30, 40], 0, 2);
sum([], 1, 2);
sum('text', 0, 2);