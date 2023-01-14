<template>
    <div class="m-item-escrow wp">
        <div class="escrow">
            <div class="m-title">
                <span>{{ services.title }}</span>
            </div>
            <span class="m-desc">{{ services.desc }}</span>
            <div class="list">
                <div class="item" v-for="(item, i) in services.list" :key="i">
                    <span class="title">
                        <img :src="require(`../../static/images/${item.icon}`)" class="icon" />{{ item.title }}
                    </span>
                    <span>{{ item.desc }}</span>
                </div>
            </div>
        </div>
        <a :href="item.link" target="_blank" class="m-item" v-for="(item, i) in list" :key="i">
            <span class="title"> <img src="../../static/images/index/t.svg" class="icon" />{{ item.title }}</span>
            <span class="desc">{{ item.desc }}</span>
            <span class="provider">{{ item.provider }}</span>
            <span v-for="(conf, k) in item.config" :key="k" class="conf">{{ conf }}</span>
            <span class="button">立即咨询</span>
        </a>
    </div>
</template>
<script>
export default {
    props: ["data"],
    computed: {
        services() {
            return this.data.services;
        },
        list() {
            return this.data.list;
        },
    },
};
</script>

<style lang="less">
.m-item-escrow {
    .flex;
    .h(400px);
    .r(2px);
    .clip;
    .escrow {
        .flex;
        .w(240px);
        padding: 30px;
        box-sizing: border-box;
        flex-direction: column;
        border: 1px solid #e3e4e6;
        background-color: #f9fbfd;
        .m-title {
            .fz(24px,31px);
            .pb(14px);
            letter-spacing: 1px;
            span {
                position: relative;
                &::after {
                    content: "";
                    .pa;
                    .lb(0,-14px);
                    .size(100%,1px);
                    background-color: #e3e4e6;
                }
            }
        }
        .m-desc {
            .mt(14px);
            .fz(12px,16px);
            .color(#888);
        }
        .list {
            .pt(25px);
            .flex;
            flex-direction: column;
            gap: 15px;
            .item {
                .flex;
                .fz(12px,16px);
                color: #888;
                flex-direction: column;
                gap: 5px;
                .title {
                    .flex;
                    .fz(16px,21px);
                    gap: 10px;
                    color: #666;
                    align-items: center;
                    .icon {
                        .size(25px);
                    }
                }
            }
        }
    }
    .m-item {
        .flex;
        .w(320px);
        color: #222;
        box-sizing: border-box;
        flex-direction: column;
        background-color: #fff;
        border: 1px solid #e3e4e6;
        .title {
            .h(80px);
            .fz(24px,31px);
            .flex;
            gap: 10px;
            align-items: center;
            justify-content: center;
            background-color: #f9fbfd;
            .icon {
                .size(30px);
            }
        }
        .desc {
            .h(32px);
            .fz(12px,16px);
            .color(#888);
            padding: 20px 26px;
        }
        .provider {
            .fz(18px,24px);
            color: #be1719;
            letter-spacing: 1px;
            padding: 0 26px 14px 26px;
        }
        .conf {
            .fz(16px,30px);
            .pl(26px);
            color: #666;
            letter-spacing: 1px;
        }
        .button {
            .auto(x);
            .size(140px,47px);
            .flex;
            .mt(35px);
            .r(2px);
            align-items: center;
            justify-content: center;
            background: #f9fbfd;
        }
        &:hover {
            .button {
                color: #fff;
                background: linear-gradient(335deg, #ff9b01 0%, #bf1619 100%);
            }
        }
    }
}
</style>
