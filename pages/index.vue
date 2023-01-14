<template>
    <div class="p-index">
        <!-- 公共头部 -->
        <common-header></common-header>

        <client-only>
            <index-carousel></index-carousel>
            <div class="m-column" v-for="(item, i) in list" :key="i">
                <page-title :data="{ title: item.title, desc: item.desc }"></page-title>
                <div class="m-content wp">
                    <template v-if="item.list">
                        <div class="m-content wp">
                            <component
                                :is="showModal(item.key)"
                                v-for="(_item, key) in item.list"
                                :key="key"
                                :data="_item"
                            ></component>
                        </div>
                    </template>
                    <template v-else>
                        <component :is="showModal(item.key)" :data="item.info"></component>
                    </template>
                </div>
            </div>
        </client-only>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import { rental, escrow, file, app, server } from "@/assets/data/index.json";
export default {
    name: "IndexPage",
    data() {
        return {};
    },
    computed: {
        list() {
            return [rental, escrow, server, file, app];
        },
    },
    methods: {
        showModal(key) {
            const data = {
                rental: "page-rental",
                escrow: "page-escrow",
                file: "page-file",
                server: "page-server",
                app: "page-app",
            };
            return data[key];
        },
    },
    mounted() {
        console.log(this.list);
    },
};
</script>

<style lang="less">
@import "~@/assets/css/index.less";
</style>
