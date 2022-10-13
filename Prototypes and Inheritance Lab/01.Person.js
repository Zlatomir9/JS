function createPerson (firstName, lastName) {
    return {
        firstName,
        lastName,
        get fullName() {
            return this.firstName + ' ' + this.lastName
        },
        set fullName(value) {
            let input = value.split(' ');
            if (input.length !== 2) {
                throw new Error ("Full name is not valid.")
            }

            this.firstName = input[0];
            this.lastName = input[1];
        }
    };
};

let person = createPerson("Peter", "Ivanov"); 

console.log(person.fullName); //Peter Ivanov 

person.firstName = "George"; 

console.log(person.fullName); //George Ivanov 

person.lastName = "Peterson"; 

console.log(person.fullName); //George Peterson 

person.fullName = "Nikola Tesla"; 

console.log(person.firstName); //Nikola 

console.log(person.lastName); //Tesla 