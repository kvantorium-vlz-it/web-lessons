<!-- <script setup>
import { RouterView, RouterLink } from 'vue-router'
import { ref } from 'vue';

const mask = ref('26142175')
</script>

<template>
    <div>
        <nav>
            <RouterLink to="/">
                index
            </RouterLink>
            <RouterLink to="/page1">
                page1
            </RouterLink>
            <RouterLink to="/page2">
                page2
            </RouterLink>
        </nav>
        <RouterView></RouterView>
        {{ mask }}
        <input
            type="text"
            v-model="mask"
            v-mask="'+7 (000) 000 0000'"
        >
    </div>
</template> -->
<template>
    <div :class="{
        big: true,
        red: isRed == 0,
        blue: isRed == 1,
        green: isRed == 2,
        purple: isRed == 3
    }">

    </div>
</template>

<script setup>
import {ref} from 'vue'
    let i = 0
    const isRed = ref(0)
    setInterval(() => {
        if (i % 4 == 0) isRed.value = 0
        if (i % 4 == 1) isRed.value = 1
        if (i % 4 == 2) isRed.value = 2
        if (i % 4 == 3) isRed.value = 3

        i++
    }, 1)
</script>

<style>
.big {
    height: 10000px;
    width: 100%;
}
.red {
    background-color: red;
}
.blue {
    background-color: blue;
}
.green {
    background-color: green;
}
.purple {
    background-color: purple;
}
</style>