class List{
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    add(element){
        this.arr.push(element);
        this.size++;
        return this.arr.sort((a, b) => a - b);
    }

    remove(index){
        if(index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.size--;
            return this.arr.sort((a,b) => a - b);
        }
    }

    get(index){
        if(index >= 0 && index < this.arr.length){
            return this.arr[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(3);
list.add(10);
list.add(16);
list.remove(0);

console.log(list);