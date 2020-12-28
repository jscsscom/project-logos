<template>
    <div class="bg-gray-100">
        <div class="container mx-auto h-14 flex items-center justify-between">
            <div class="space-x-3">
                <span class="font-bold text-lg">Project Logos</span>
                <span class="text-gray-700">Collection of awesome front-end project logos</span>
            </div>
            <div><a class="hover:underline" href="https://github.com/jscsscom/project-logos" target="_blank">GitHub</a></div>
        </div>
    </div>
    <div class="container mx-auto mt-5">
        <div class="bg-gray-200 border-b border-gray-400 flex items-center justify-between h-12 px-4 mb-4">
            <div>Logos: {{ data.total }}</div>
            <div class="flex space-x-3">
                <span @click="changeBackground(bg)" v-for="(bg,index) in backgrounds" :key="index" :class="bg" class="h-6 w-6 cursor-pointer"></span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div v-for="(logo,index) in data.list" :key="index" class="border border-gray-200 rounded hover:shadow-lg">
                <div :class="background" class="flex items-center justify-center h-40 px-3 py-3">
                    <img :src="url(logo)" :alt="logo" class="max-h-full max-w-full">
                </div>
                <div class="flex items-center justify-between px-4 py-3">
                    <div>{{ logo.substr(0, logo.length - 4) }}</div>
                    <div>
                        <button class="btn btn-sm btn-copy" :data-clipboard-text="url(logo)">Copy URL</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-5 py-3 bg-gray-100">
        <div class="container mx-auto flex items-center justify-between text-gray-700">
            <div>Project Logos</div>
            <div class="space-x-3">
                <span>Logos: {{ data.total }}</span>
                <span>Last updated: {{ lastUpdated }}</span>
            </div>
        </div>
    </div>
</template>

<script>
const data = require('../data/logos.json')
import ClipboardJS from 'clipboard'

export default {
    name: 'App',
    data() {
        return {
            data,
            background: 'bg-gray-300',
            backgrounds: [
                'bg-white',
                'bg-gray-100',
                'bg-gray-300',
                'bg-gray-500',
                'bg-gray-700',
                'bg-black',
            ],
        }
    },
    computed:{
        lastUpdated (){
            let date = new Date(this.data.updateTime)
            return date.toLocaleString()
        }
    },
    methods: {
        url(name) {
            return `https://cdn.jsdelivr.net/gh/jscsscom/project-logos/logos/${name}`
        },
        changeBackground(bg){
            this.background = bg
        },
    },
    mounted() {
        new ClipboardJS('.btn-copy')
    }
}
</script>

<style>

</style>
