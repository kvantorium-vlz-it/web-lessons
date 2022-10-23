<script setup>
defineProps({
    employees: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <ul>
        <li
            v-for="(employee, index) in employees"
            :key="index"
        >
            {{ employee.name }}
        </li>
    </ul>
</template>
