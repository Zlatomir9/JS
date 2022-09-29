function rectangle(...input) {
    let rect = {
        width: Number(input[0]),
        height: Number(input[1]),
        color: input[2][0].toUpperCase() + input[2].slice(1),
        calcArea: function() {
            return this.width * this.height
        }
    };

    return rect;
};

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());