<template>
    <a :href="data.link" target="_blank" class="m-item-rental">
        <span class="title">{{ data.title }}</span>
        <div class="config">
            <div class="item" v-for="(item, i) in data.config" :key="i">
                <span class="label">{{ item.label }}</span>
                <span class="value">{{ item.value }}</span>
            </div>
        </div>
        <span class="desc">{{ data.desc }}</span>
        <div class="price">
            <span class="number">{{ data.price }}</span>
            <span>元/年起</span>
        </div>
        <span class="button">立即购买</span>
    </a>
</template>
<script>
export default {
    props: ["data"],
    methods: {},
};
</script>

<style lang="less">
.m-item-rental {
    .flex;
    .size(292px,340px);
    .r(5px);
    .clip;
    .color(#222);
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid #e3e4e6;
    .title {
        .size(100%,80px);
        .x;
        .fz(24px,80px);
        background-color: #f9fbfd;
    }
    .config {
        .flex;
        padding: 19px 0;
        .item {
            .flex;
            flex: auto;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-right: 1px solid #dcdcdc;
            &:last-child {
                border: 0;
            }
            .label {
                .fz(12px,16px);
                .color(#888);
            }
            .value {
                .fz(16px,21px);
                .color(#666);
                letter-spacing: 2px;
            }
        }
    }
    .desc {
        .x;
        .fz(12px,16px);
        .color(#888);
    }
    .price {
        .flex;
        .fz(16px,21px);
        padding: 20px 0;
        align-items: baseline;
        justify-content: center;
        color: #666;
        gap: 6px;
        .number {
            .fz(36px,47px);
            color: #be1719;
        }
    }
    .button {
        .auto(x);
        .size(140px,47px);
        .flex;
        .r(2px);
        letter-spacing: 2px;
        align-items: center;
        justify-content: center;
        background: linear-gradient(360deg, #e4e5e7 0%, #f2f3f4 100%) #f9fbfd;
    }
    &:hover {
        .button {
            color: #fff;
            background: linear-gradient(335deg, #ff9b01 0%, #bf1619 100%);
        }
    }
} 
</style>
