<script setup>
import { ref } from 'vue'
import Counter from  './components/Counter.vue'
import BaseButton from './components/BaseButton.vue'

const handleCounting = (value, index) => {
    counters.value[index] = value
}
const c = (event) => {
    console.log(event)
}

const counters = ref([1, 10, 62, 1, 205, 8])
</script>

<template>
<div>
    <base-button @click="c">
        Lorem, ipsum.
    </base-button>
    <base-button @click="c" disabled>
        Lorem, ipsum.
        <img src="https://droider.ru/wp-content/uploads/2017/06/google-logo-feature.jpg" alt="" width="20" height="20">
    </base-button>
    <hr>
    {{ counters }}
    <hr>
    <Counter
        v-for="value, index in counters"
        :key="index"
        :initial-value="value"
        @counting="(value) => handleCounting(value, index)"
    />
    <div v-if="false">
        Lorem ipsum dolor sit.
    </div>
    <div v-else>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur!
    </div>
</div>
</template>
