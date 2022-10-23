<script setup>
import { useCssModule, useSlots } from 'vue';

defineProps({
    label: {
        type: String,
        required: false,
        default: '',
    }
})

console.log(useSlots().label);
console.log(useCssModule());
</script>

<template>
    <div>
        <label for="" v-if="$slots.label !== undefined">
            <slot name="label">
                <!-- {{ label }} -->
            </slot>
        </label>
        <button>
            <slot></slot>
        </button>
    </div>
</template>

<style module>
.a {
    color: red;
}
</style>