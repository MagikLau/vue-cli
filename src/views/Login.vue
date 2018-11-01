<template>
    <el-main>
        <el-container >
            <el-header>Login page</el-header>
            <el-main>
                <el-input v-model="username" type="text" placeholder="请输入用户名" />
                <el-input v-model="password" type="password" placeholder="请输入密码" />
            </el-main>
        </el-container>
    </el-main>
</template>
