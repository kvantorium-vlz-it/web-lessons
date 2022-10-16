<script setup>
import { ref } from 'vue';
import Employee from './assets/js/Employee'
import EmployeeForm from './components/EmployeeForm.vue'
import EmployeesTable from './components/EmployeesTable.vue'

const emp1 = new Employee({
    age: 18,
    name: 'name1',
    position: 'pos1',
    salary: 15,
    sex: 'М',
    surname: 'surname1'
})

const emp2 = new Employee({
    age: 18,
    name: 'name1',
    position: 'pos1',
    salary: 46,
    sex: 'М',
    surname: 'surname1'
})

const employees = ref([])

const handleCreate = (employee) => {
    employees.value.push(new Employee(employee))
}
const allEmployees = ref(Employee.instances)
</script>

<template>
    <employee-form @create="handleCreate" />
    <employees-table :employees="employees" />
    <hr>
    <employees-table :employees="allEmployees" />
</template>
