<script setup>
import { ref } from 'vue'
import EmployeeFormInput from './EmployeeFormInput.vue'

const emit = defineEmits(['create'])

const employee = ref({
    name: '',
    surname: '',
    age: 18,
    sex: null,
    position: null,
    salary: 0,
})

const positions = [
    'Директор',
    'Работник склада',
    'Бухгалтер',
    'Зам. директора',
    'Сис. админ',
    'Повар',
    'Актер',
]

const sexs = [
    'М',
    'Ж',
]

const createEmployee = () => {
    emit('create', employee.value)
}
</script>

<template>
    <employee-form-input label="Имя">
        <input type="text" v-model="employee.name">
    </employee-form-input>
    <employee-form-input label="Фамилия">
        <input type="text" v-model="employee.surname">
    </employee-form-input>

    <employee-form-input label="Возраст">
        <input
            type="number"
            v-model="employee.age"
            min="18"
            max="100"
        >
    </employee-form-input>
    <employee-form-input label="Зарплата">
        <input
            type="number"
            v-model="employee.salary"
            min="0"
        >
    </employee-form-input>

    <employee-form-input label="Должность">
        <select v-model="employee.position">
            <option
                v-for="position in positions"
                :value="position"
                :key="position"
            >
                {{ position }}
            </option>
        </select>
    </employee-form-input>

    <employee-form-input label="Пол">
        <select v-model="employee.sex">
            <option
                v-for="sex in sexs"
                :value="sex"
                :key="sex"
            >
                {{ sex }}
            </option>
        </select>
    </employee-form-input>

    <button @click="createEmployee">
        Добавить
    </button>
</template>
