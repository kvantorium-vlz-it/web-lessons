<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
    disabled: {
        type: Boolean,
        required: false,
        default: false,
    },
})

defineEmits(['click'])
</script>

<template>
<button
    :class="{
        [$style.Counter]: true,
        [$style.Disabled]: disabled,
    }"
    :disabled="disabled"
    @click="(event) => $emit('click', event)"
>
    <slot></slot>
</button>
</template>

<style module>
.Counter {
    background-color: rgb(40, 40, 40);
    color: rgb(240, 60, 99);
    border-radius: 6px;
    border: none;
    padding: 10px 35px;
}
.Disabled {
    cursor: not-allowed;
    background-color: rgb(58, 58, 58);
    color: rgb(168, 40, 68);
}
</style>
