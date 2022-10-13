function classHierarchy() {
    class Figure {
        constructor(units = "cm"){
            this.units = units;
        }

        changeUnits(value){
            this.units = value;
        }

        metricConversion(num) {
            if (this.units === 'm') {
                return num /= 10;
            }
            if (this.units === 'mm') {
                return num *= 10;
            }
            return num;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units){
            super(units);
            this._radius = radius;
        }
        get area(){
            return Math.PI * this.radius * this.radius;
        }
        get radius(){
            return this.metricConversion(this._radius);
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
        get area() {
            return this.width * this.height;
        }
        get width() {
            return this.metricConversion(this._width);
        }
        get height() {
            return this.metricConversion(this._height);
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    
    return { Figure, Circle, Rectangle };
}