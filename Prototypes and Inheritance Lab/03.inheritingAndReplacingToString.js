function personAndTeacher() {
    class Person{
        constructor (name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let base = super.toString().slice(0, -1);
            return `${base}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let base = super.toString().slice(0, -1);
            return `${base}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let person = new Person("Maria", "maria@yahoo.bg");
let teacher = new Teacher("Ivan", "ivan@ivan.bg", "history");
let student = new Student("Pesho", "pesho@gmail.com", "Math");
console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());