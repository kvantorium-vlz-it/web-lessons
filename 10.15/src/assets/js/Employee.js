class Employee {
    static instances = []

    constructor({
        age,
        name,
        surname,
        sex,
        position,
        salary,
    }) {
        if (age < 18) {
            throw new Error('Age must be greatten than 18')
        }

        this.age = age
        this.name = name
        this.surname = surname
        this.sex = sex
        this.position = position
        this.salary = salary

        Employee.instances.push(this)
    }

    static getSumSalary(employees) {
        return employees.reduce((accum, currenctEmployee) => {
            return accum + currenctEmployee.salary
        }, 0)
    }
}

export { Employee }
export default Employee
