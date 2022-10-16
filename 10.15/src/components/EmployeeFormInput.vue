<script setup>
defineProps({
    label: {
        type: String,
        required: false,
        default: null,
    }
})
</script>

<template>
    <label v-if="label">
        {{ label }}
    </label>
    <slot></slot>
</template>
