<template>
    <div class="c-footer">
        <CommonTop />
        <div class="icons">
            <div class="wp">
                <div class="item" v-for="(item, i) in icon" :key="i">
                    <img :src="require(`../static/images/index/icon-0${i + 1}.svg`)" class="icon" />
                    <span class="name">{{ item }}</span>
                </div>
            </div>
        </div>
        <div class="content wp">
            <div class="box">
                <div class="item first">
                    <a :href="contact.link" class="title">{{ contact.title }}</a>
                    <span v-for="(item, i) in contact.desc" :key="i" :class="`desc desc-${i + 1}`">
                        <img class="icon" v-if="i == 1" :src="require(`../static/images/index/phone.svg`)" />
                        {{ item }}
                    </span>
                </div>

                <div class="item" v-for="(item, i) in [rental, escrow, server]" :key="i">
                    <a :href="item.link" class="title">{{ item.title }}</a>
                    <div class="u-item">
                        <a :href="item.link" class="desc" v-for="(el, k) in item.list" :key="k">{{ el.title }}</a>
                    </div>
                </div>

                <div class="item five">
                    <a :href="ningidc.link" class="title">{{ ningidc.title }}</a>
                    <span class="label">{{ ningidc.label }}</span>
                    <img class="code" src="../static/images/index/code.jpg" />
                    <div class="more">
                        <span v-for="item in ningidc.more" :key="item">{{ item }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <span>© 2023 南京四重奏科贸有限公司</span><span class="line"> 丨 </span><span>苏ICP备15035679号</span>
        </div>
    </div>
</template>

<script>
import { icon, footer } from "@/assets/data/index.json";
import CommonTop from "./CommonTop.vue";
export default {
    data() {
        return {
            icon,
            footer,
        };
    },
    components: {
        CommonTop,
    },
    computed: {
        contact() {
            return this.footer.contact;
        },
        server() {
            return this.footer.server;
        },
        escrow() {
            return this.footer.escrow;
        },
        rental() {
            return this.footer.rental;
        },
        ningidc() {
            return this.footer.ningidc;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/components/footer.less";
</style>
