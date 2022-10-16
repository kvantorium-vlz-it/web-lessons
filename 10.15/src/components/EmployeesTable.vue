<script setup>
import Employee from '../assets/js/Employee';

defineProps({
    employees: {
        type: Array,
        required: true,
    }
})
</script>

<template>
    <div>
        
        <table>
            <tr v-for="(employee, index) in employees">
                <td>{{ index }}</td>
                <td>{{ employee.name }}</td>
                <td>{{ employee.surname }}</td>
                <td>{{ employee.age }}</td>
                <td>{{ employee.sex }}</td>
                <td>{{ employee.position }}</td>
                <td>{{ employee.salary }}</td>
            </tr>
        </table>
        Суммарная зарплата: {{ Employee.getSumSalary(employees) }}
    </div>
</template>

<style scoped>
td, table, tr {
    border: 1px solid black;
}
</style>