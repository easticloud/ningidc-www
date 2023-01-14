<template>
    <a href="/about#contact" target="_blank" class="m-item-server">
        <span class="title"> {{ data.title }} </span>
        <div class="box">
            <div class="desc">
                <span v-for="(item, i) in data.desc" :key="i">● {{ item }}</span>
            </div>
            <span class="label">● 测试IP及测试包请向客服索要</span>
        </div>
        <span class="button">立即购买</span>
    </a>
</template>
<script>
export default {
    props: ["data"],
};
</script>

<style lang="less">
.m-item-server {
    .flex;
    .r(5px);
    .clip;
    .size(293px,275px);
    .color(#222);
    box-sizing: border-box;
    border: 1px solid #e3e4e6;
    flex-direction: column;
    .title {
        .flex;
        .fz(24px0.31px);
        .size(100%,80px);
        align-items: center;
        justify-content: center;
        background-color: #f9fbfd;
    }
    .box {
        padding: 20px;
        .fz(12px,16px);
        .color(#888);
        .flex;
        flex-direction: column;
        gap: 15px;
        .desc {
            .flex;
            gap: 50px;
        }
    }
    .button {
        .size(140px,47px);
        .r(2px);
        .fz(16px,21px);
        .flex;
        .auto(x);
        .mt(30px);
        align-items: center;
        justify-content: center;
        letter-spacing: 2px;
        background: #f9fbfd;
    }
    &:hover {
        .button {
            .color(#fff);
            background: linear-gradient(335deg, #ff9b01 0%, #bf1619 100%);
        }
    }
}
</style>
