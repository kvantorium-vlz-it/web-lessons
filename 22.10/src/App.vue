<script setup>
import ButtonInput from './components/ButtonInput.vue';
import EmployeesProvider from './components/EmployeesProvider.vue';
import EmployeeNames from './components/EmployeeNames.vue';
import EmployeeAges from './components/EmployeeAges.vue';

const newEmpl = {
    name: 'new name',
    age: 18,
}
</script>

<template>

    <EmployeesProvider #default="{ employees, addNewEmployee }">
        <EmployeeNames :employees="employees"></EmployeeNames>
        <EmployeeAges :employees="employees"></EmployeeAges>
    
        <ButtonInput
            label="oaiwghioawgjiaw"
            @click="() => addNewEmployee(newEmpl)"
        >
            добавить

            <template #label>
                Добавить работника
            </template>
        </ButtonInput>
    
    </EmployeesProvider>
</template>