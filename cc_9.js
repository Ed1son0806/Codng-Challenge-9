//Task 1 - Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}


const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails());
console.log(emp1.calculateAnnualSalary());


//Task 2 - Creating a Manager Class (Inheritance & Method Overriding)

class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}


class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); 
        this.teamSize = teamSize;
    }

   
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    calculateBonus() {
        return this.calculateAnnualSalary() * 0.10; 
    }
}


const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());


//Task 3 - Creating a Company Class

class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}


class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }

    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    calculateBonus() {
        return this.calculateAnnualSalary() * 0.10;
    }
}


class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.getDetails());
        });
    }
}


const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();


//Task 4 - Implementing a Payroll System
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }

    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    calculateBonus() {
        return this.salary * 12 * 0.10; 
    }

    
    calculateAnnualSalary() {
        return (this.salary * 12) + this.calculateBonus();
    }
}

class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.getDetails());
        });
    }

    
    calculateTotalPayroll() {
        return this.employees.reduce((total, employee) => {
            return total + employee.calculateAnnualSalary();
        }, 0);
    }
}


const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);

console.log(company.calculateTotalPayroll());


//Task 5 - Implementing Promotions
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }

    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    calculateBonus() {
        return this.salary * 12 * 0.10;
    }

    calculateAnnualSalary() {
        return (this.salary * 12) + this.calculateBonus();
    }
}

class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.getDetails());
        });
    }

    calculateTotalPayroll() {
        return this.employees.reduce((total, employee) => {
            return total + employee.calculateAnnualSalary();
        }, 0);
    }

    
    promoteToManager(employee, teamSize) {
        const index = this.employees.indexOf(employee);
        if (index !== -1 && !(employee instanceof Manager)) {
            
            const promotedManager = new Manager(
                employee.name,
                employee.id,
                employee.department,
                employee.salary,
                teamSize
            );
            
            this.employees[index] = promotedManager;
        }
    }
}


const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);

company.promoteToManager(emp1, 3);
company.listEmployees();