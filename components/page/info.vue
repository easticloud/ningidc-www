<template>
    <div class="m-item-info wp">
        <img :src="require(`../../static/images/${data.img}`)" class="img" />
        <div class="box">
            <span class="title">{{ data.title }}</span>
            <span class="desc">{{ data.desc }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data"],

    methods: {},
};
</script>

<style lang="less">
.m-item-info {
    .flex;
    .size(100%,300px);
    .r(5px);
    gap: 10px; 
    box-sizing: border-box;
    background-color: #fff;
    .img {
        .size(520px,300px);
    }
    .box {
        .flex;
        padding: 30px;
        flex-direction: column;
        .title {
            .fz(21px,27px);
        }
        .desc {
            .mt(14px);
            .fz(18px,30px);
            color: #666;
        }
    }
    &.right {
        .img {
            order: 1;
        }
    }
}
@media screen and (max-width: @phone) {
    .m-item-info {
        flex-direction: column;
        .h(auto);
        gap: 20px;
        padding: 20px;
        .img {
            .size(100%,auto);
        }
        .box {
            .title {
                .fz(16px,24px);
            }
            .desc {
                .mt(10px);
                .fz(14px,20px);
            }
        }
        &.right {
            .img {
                order: 0;
            }
        }
    }
}
</style>
