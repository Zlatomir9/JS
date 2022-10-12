class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = {
                avgSalary: 0,
                sumSalary: 0,
                employees: []
            }
        }

        this.departments[department].employees.push({ name, salary, position });
        this._updateDepartment(this.departments[department], salary);

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    _updateDepartment(department, salary) {
        department.sumSalary += Number(salary);
        department.avgSalary = department.sumSalary / department.employees.length;
    }

    bestDepartment() {
        let bestDepartment = Object.entries(this.departments).sort(([firstDepName, firstDepInfo], [secondDepName, secondDepInfo]) => {
            return secondDepInfo.avgSalary - firstDepInfo.avgSalary;
        })[0];

        let sortedEmployees = bestDepartment[1].employees.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name)
        });

        let buff = `Best Department is: ${bestDepartment[0]}\n`;
        buff += `Average salary: ${bestDepartment[1].avgSalary.toFixed(2)}\n`

        for (let i = 0; i < sortedEmployees.length; i++) {
            let employee = sortedEmployees[i];
            buff += `${employee.name} ${employee.salary} ${employee.position}`;
            buff += i === sortedEmployees.length - 1 ? "" : `\n`;
        }

        return buff;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());