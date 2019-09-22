<template>
    <div class="world">
        <div class="right">
            <ul>
                <li>
                    <router-link to="/helloworld/world1">你好世界1</router-link>
                </li>
                <li>
                    <router-link to="/helloworld/world2">你好世界2</router-link>
                </li>
            </ul>
        </div>
        <div class="left">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.world {
    display: flex;

    .right {
    display: inline-block;
    border: 1px solid #000;
    height: 500px;
    width: 300px;
    }
    .left {
        display: inline-block;
        border: 1px solid #000;
        height: 500px;
        width: 300px;
    }
}
</style>
