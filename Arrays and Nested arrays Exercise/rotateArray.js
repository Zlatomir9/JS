function rotateArray(elements, numberOfRotations){

    for (let i = 0; i < numberOfRotations; i++) {
        elements.unshift(elements[elements.length - 1]);
        elements.pop();
    }

    console.log(elements.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);