function createComputerHierarchy() {
    class Keyboard{
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer,
            this.responseTime = responseTime;
        }
    }

    class Monitor{
        constructor(manufacturer, width, height){
            this.manufacturer = manufacturer,
            this.width = width,
            this.height = height;
        }
    }

    class Battery{
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer,
            this.expectedLife = expectedLife;
        }
    }

    class Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if(this.constructor.name === "Computer"){
                throw new Error("Cannot instantiate Computer");
            }
            this.manufacturer = manufacturer,
            this.processorSpeed = processorSpeed,
            this.ram = ram,
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace),
            this.weight = weight,
            this.color = color,
            this.battery = battery;
        }

        set battery(battery) {
            if(!(battery instanceof Battery)){
                throw new TypeError("Invalid battery type");
            }
            this._battery = battery;
        }
        get battery() {
            return this._battery;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        set keyboard(keyboard) {
            if (!(keyboard instanceof Keyboard)) {
                throw new TypeError("Invalid keyboard type");
            }
            this._keyboard = keyboard;
        }
        get keyboard() { 
            return this._keyboard; 
        }

        set monitor(monitor) {
            if (!(monitor instanceof Monitor)) {
                throw new TypeError("Invalid monitor type");
            }
            this._monitor = monitor;
        }
        get monitor() { 
            return this._monitor; 
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let pc = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", "battery");
// let battery = new Battery('Energy', 3);
// console.log(battery);
// let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
// console.log(laptop);