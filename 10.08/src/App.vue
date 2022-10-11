<script setup>
import Counter from './components/Counter.vue'
import BaseButton from './components/BaseButton.vue'

const handleIncreaseCounter = (v) => {
    console.log(v)
}
</script>

<template>
<div>
    <counter
        :initial-value="0"
        @increase-counter="handleIncreaseCounter"
    />
    <counter
        :initial-value="10"
        is-blue
        is-big
        @increase-counter="handleIncreaseCounter"
    />
    <counter
        :initial-value="20"
        is-big
        @increase-counter="handleIncreaseCounter"
    />
    <base-button>
        Lorem, ipsum.
    </base-button>
</div>
</template>

<style module>
</style>
