<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import BaseButton from './BaseButton.vue'

const props = defineProps({
    initialValue: {
        type: Number,
        required: false,
        default: 0,
        validator: (value) => value >= 0,
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false,
    },
})

const emit = defineEmits(['counting'])

const counterValue = ref(props.initialValue)

const handleClick = () => {
    counterValue.value++
    emit('counting', counterValue.value)
}
</script>

<template>
<base-button
    :disabled="disabled"
    @click="handleClick"
>
    {{ counterValue }}
</base-button>
</template>

