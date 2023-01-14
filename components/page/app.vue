<template>
    <a :href="data.link" target="_blank" class="m-item-app" :style="style(data.bg)">
        <span class="title">
            <img :src="require(`../../static/images/${data.icon}`)" class="icon" />{{ data.title }}
        </span>
        <span class="label">{{ data.label }}</span>
        <span class="desc" v-html="data.desc"></span>
        <span class="button">了解更多</span>
    </a>
</template>
<script>
export default {
    props: ["data"],
    methods: {
        style(link) {
            return {
                backgroundImage: `url(${require(`../../static/images/${link}`)})`,
            };
        },
    },
};
</script>

<style lang="less">
.m-item-app {
    .flex;
    .size(400px,280px);
    .color(#222);
    padding: 45px 36px;
    flex-direction: column;
    box-sizing: border-box;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    letter-spacing: 1px;
    .title {
        .flex;
        .fz(24px,31px);
        gap: 10px;
        align-items: center;
        .icon {
            .size(35px);
        }
    }
    .label {
        .mt(18px);
        .fz(16px,21px);
        .color(#666);
    }
    .desc {
        .mt(7px);
        .h(32px);
        .fz(12px,16px);
        .color(#888);
    }
    .button {
        .db;
        .size(120px,45px);
        .r(2px);
        .fz(16px,45px);
        .x;
        .mt(30px);
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
@media screen and (max-width: @phone) {
    .m-item-app {
        .w(100%); 
    }
}
</style>
