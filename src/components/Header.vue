<template>
    <!--<el-header>-->
        <el-menu
                class="el-menu-demo"
                mode="horizontal"
                router="true"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/login">Login</el-menu-item>
        </el-menu>
    <!--</el-header>-->

</template>

<script>
export default {
    name: 'app-header',
    data () {
        return {
            title: 'Vue Header',
        };
    }
}
</script>
