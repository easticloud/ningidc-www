<template>
    <div class="m-item-file">
        <div class="m-icons">
            <span class="line"></span>
            <div class="icons">
                <div class="item" v-for="(item, i) in data" :key="i">
                    <img class="icon" :src="require(`../../static/images/index/b-0${i + 1}.svg`)" />
                    <span class="title">{{ item }}</span>
                </div>
            </div>
        </div>
        <a href="/about#contact" target="_blank" class="button">联系我们</a>
    </div>
</template>
<script>
export default {
    props: ["data"],
};
</script>

<style lang="less">
.m-item-file {
    .flex;
    .w(100%);
    flex-direction: column;
    gap: 92px;
    .m-icons {
        .flex;
        .size(100%,98px);
        align-items: center;
        position: relative;
        background: url(../../static/images/index/line.svg) right center no-repeat;
        .icons {
            .pa;
            .lt(0);
            .full;
            .flex;
            padding: 0 50px;
            box-sizing: border-box;
            justify-content: space-between;
            .item {
                .flex;
                .size(98px);
                position: relative;
                align-items: center;
                justify-content: center;
                background: url(../../static/images/index/b-bg.svg) center center no-repeat;

                .title {
                    .pa;
                    .w(100%);
                    .x;
                    .lb(0,-40px);
                    .fz(16px,21px);
                    .color(#666);
                }
            }
        }
    }
    .button {
        .auto(x);
        .flex;
        .r(25px);
        .size(140px,50px);
        .color(#fff);
        align-items: center;
        justify-content: center;
        background: linear-gradient(335deg, #ff9b01 0%, #bf1619 100%);
        box-shadow: 2px 2px 4px 1px #f1c4b0;
    }
}
@media screen and (max-width: @phone) {
    .m-item-file {
        gap: 30px;
        .m-icons {
            .h(auto);
            background: none;

            .icons {
                position: static;
                flex-direction: column;
                gap: 10px;
                .pl(30px);
                .item {
                    .size(50px);
                    background-size: contain;
                    position: relative;
                    .icon {
                        .w(24px);
                    }
                    .title {
                        .pa;
                        .w(200px);
                        .lt(68px,0);
                        .fz(18px,50px);
                        .color(#666);
                        .x(left);
                    }
                }
                &::before {
                    content: "";
                    .pa;
                    .db;
                    .size(100%,16px);
                    .lt(0,51%);
                    margin-left: calc(-50% + 56px);
                    transform: rotate(90deg);
                    background-image: url(../../static/images/index/line.svg);
                    background-repeat: no-repeat;
                    background-position: right 0 center;
                }
            }
        }
    }
}
</style>
