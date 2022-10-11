<script setup>
import { defineProps } from 'vue'

const {
    isBig,
    isBlue,
} = defineProps({
    isBig: {
        type: Boolean,
        required: false,
        default: false,
    },
    isBlue: {
        type: Boolean,
        required: false,
        default: false,
    },
})
</script>

<template>
<button
    :class="{
        [$style.Button]: true,
        [$style['Button-big']]: isBig,
        [$style['Button-blue']]: isBlue,
    }"
>
    <slot></slot>
</button>
</template>


<style module>
.Button {
    --br: 5px;
    --bg: rgb(39, 39, 39);
    --c: rgb(234, 76, 108);

    color: var(--c);

    background-color: var(--bg);
    border: 1px solid var(--bg);
    padding: var(--br);
    border-radius: var(--br);
}
.Button-blue {
    --c: rgb(0, 149, 255);
}
.Button-big {
    --br: 10px;
}
</style>