<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import BaseButton from './BaseButton.vue'

const {
    initialValue,
} = defineProps({
    initialValue: {
        type: Number,
        required: false,
        default: 0,
        validator: (value) => value >= 0,
    },
})

const emit = defineEmits(['increase-counter'])

const value = ref(initialValue)

const handleClick = () => {
    value.value++
    emit('increase-counter', value.value)
}
</script>

<template>
<base-button
    v-bind="$attrs"
    @click="handleClick"
>
    {{ value }}
</base-button>
</template>
