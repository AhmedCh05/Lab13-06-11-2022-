class Employee {
    #salary;
    #noOfHoursWorked;
    constructor(_salary, _noOfHoursWorked) {
        this.#salary = _salary;
        this.#noOfHoursWorked = _noOfHoursWorked;
    }
    setSalary(_salary) {
        this.#salary = _salary;
    }
    setNoOfHoursWorked(_noOfHoursWorked) {
        this.#noOfHoursWorked = _noOfHoursWorked;
    }
    getSalary() {
        return this.#salary;
    }
    getNoOfHoursWorked() {
        return this.#noOfHoursWorked;
    }
    getInfo() {
        console.log("\n****************\nSalary : ", this.getSalary(), "\n******************\nNo Of Hours Worked : ", this.getNoOfHoursWorked());
    }
    AddSal() {
        if (this.#salary < 500) {
            this.#salary += 10;
        }
    }
    AddWork() {
        if (this.#noOfHoursWorked > 6) {
            this.#salary += 5;
        }
    }
    DisplayFunc() {
        console.log("\n********************\nSalary : ", this.getSalary(), "\nNo Of Hours Worked : ", this.getNoOfHoursWorked());
    }
}


let test1 = new Employee(12500, 24);
test1.AddSal();
test1.DisplayFunc();
test1.AddWork();
test1.DisplayFunc();

let test2 = new Employee(100, 4);
test2.AddSal();
test2.DisplayFunc();
test2.AddWork();
test2.DisplayFunc();