<script setup>
import { ref } from 'vue'

const employees = ref([
    {
        name: 'lorem1',
        age: 18,
    },
    {
        name: 'lorem2',
        age: 23,
    },
    {
        name: 'lorem3',
        age: 25,
    },
])

const addNewEmployee = (employee) => {
    employees.value.push(employee)
}
</script>

<template>
    <slot :employees="employees" :addNewEmployee="addNewEmployee" ></slot>
</template>