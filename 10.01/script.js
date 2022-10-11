// // console.log('working')

// const nums = [1, 2, 3, 4, 5]

// const btn = document.getElementById('main_btn')

// btn.addEventListener('click', (event) => {
//     // const dubs = nums.map((num, index, array) => {
//     //     console.log(num, index, array)
//     //     return num * 2
//     // })
//     const dubs = nums.map((num) => num * 2)
//     console.log(dubs)
// })


const positions = [
    'Работник склада',
    'Повар',
    'Веб-разработчик',
    'Сис. админ',
    'Директор',
    'Актер',
    'Менеджер',
    'Бухгалтер',
    'Уборщик',
    'Зам. директор',
]

const nameInput = document.querySelector('#name_field')
const surnameInput = document.querySelector('#surname_field')
const salaryInput = document.querySelector('#salary_field')
const positionSelect = document.querySelector('#position_field')
const ageInput = document.querySelector('#age_field')
const sexSelect = document.querySelector('#sex_field')

const employeeBtn = document.querySelector('#employee_btn')

const employeeTable = document.querySelector('#employee_table')

const employeeTime = document.querySelector('#employee_time')

positions.forEach((position, index) => {
    const option = new Option(position)
    option.value = index
    positionSelect.appendChild(option)
})

const sex = ['Мужской', 'Женский']

sex.forEach((sex, index) => {
    const option = new Option(sex)
    option.value = index
    sexSelect.appendChild(option)
})

class Employee {
    static instances = []
    static MIN_AGE = 18

    constructor({ name, surname, age, position, salary, sex }) {
        if (age < this.MIN_AGE) {
            throw new Error(`Возраст меньше ${Employee.MIN_AGE}`)
        }

        this.name = name
        this.surname = surname
        this.position = position
        this.salary = salary
        this.sex = sex
        this.age = age

        Employee.instances.push(this)
    }
}

ageInput.min = Employee.MIN_AGE

new Employee({
    name: 'name1',
    surname: 'surname1',
    salary: 16,
    age: 19,
    position: 'Работник склада',
    sex: 'М',
})


employeeBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const nameValue = nameInput.value
    const surnameValue = surnameInput.value
    const ageValue = ageInput.value
    const salaryValue = salaryInput.value
    const positionIndex = positionSelect.value
    const sexIndex = sexSelect.value

    const positionValue = positions[positionIndex]
    const sexValue = sex[sexIndex]

    const emp = new Employee({
        name: nameValue,
        surname: surnameValue,
        age: ageValue,
        position: positionValue,
        salary: salaryValue,
        sex: sexValue,
    })

    const tr = employeeTable.insertRow(employeeTable.rows.length)
    tr.insertCell(tr.cells.length).innerHTML = Employee.instances.length
    tr.insertCell(tr.cells.length).innerHTML = emp.name
    tr.insertCell(tr.cells.length).innerHTML = emp.surname
    tr.insertCell(tr.cells.length).innerHTML = emp.age
    tr.insertCell(tr.cells.length).innerHTML = emp.sex
    tr.insertCell(tr.cells.length).innerHTML = emp.position
    tr.insertCell(tr.cells.length).innerHTML = emp.salary
})

employeeTime.innerHTML = `<div>${new Date()}</div>`
