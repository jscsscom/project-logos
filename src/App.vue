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
        <div class="border-b border-gray-200 flex items-center justify-between h-14 mb-4">
            <div>
                <el-input v-model="keyword" :placeholder="`Search in ${data.total} logos`" size="medium" clearable>
                    <template #prepend>Filter</template>
                </el-input>
            </div>
            <div class="flex space-x-3">
                <span @click="changeBackground(bg)" v-for="(bg,index) in backgrounds" :key="index" :class="bg" class="h-6 w-6 border border-gray-400 cursor-pointer"></span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div v-for="(logo,index) in list" :key="index" class="border border-gray-200 rounded hover:shadow-lg">
                <a :class="background" class="flex items-center justify-center h-40 px-3 py-3" :href="url(logo)" target="_blank">
                    <img :src="url(logo)" :alt="logo" class="max-h-full max-w-full">
                </a>
                <div class="flex items-center justify-between px-4 py-3">
                    <div>{{ logo }}</div>
                    <div>
                        <el-button-group>
                            <el-tooltip effect="dark" content="Copy url" placement="bottom">
                                <el-button size="mini" class="btn-copy focus:outline-none px-2" :data-clipboard-text="url(logo)">URL</el-button>
                            </el-tooltip>
                        </el-button-group>
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
const data = require('../data/data.json')
import ClipboardJS from 'clipboard'
import dayjs from 'dayjs'
import {
    ElInput,
    ElButton,
    ElButtonGroup,
    ElTooltip,
} from 'element-plus'

export default {
    name: 'App',
    components: {
        ElInput,
        ElButton,
        ElButtonGroup,
        ElTooltip,
    },
    data() {
        return {
            data,
            keyword: '',
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
    computed: {
        lastUpdated() {
            return dayjs(this.data.lastUpdated).format('YYYY-MM-DD HH:mm:ss')
        },
        list() {
            if (this.keyword) {
                return this.data.list.filter(item => {
                    return item.indexOf(this.keyword) > -1
                })
            }
            return this.data.list
        }
    },
    methods: {
        url(name) {
            return process.env.VUE_APP_URL_PREFIX + name
        },
        changeBackground(bg) {
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
