<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-4">
            <div v-for="(logo,index) in data.list" :key="index">
                <img :src="url(logo)" :alt="logo">
            </div>
        </div>
    </div>
</template>

<script>
const data = require('../data/logos.json')
export default {
    name: 'App',
    data() {
        return {
            data
        }
    },
    methods: {
        url(name) {
            return `https://cdn.jsdelivr.net/gh/jscsscom/project-logos/logos/${name}`
        }
    }
}
</script>

<style>

</style>
