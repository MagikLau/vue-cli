<template>
    <el-main>
        <el-form class="login-form" :model="loginForm">

            <el-form-item prop="username">
                <el-input
                        v-model="loginForm.username"
                        :placeholder="username"
                        name="username"
                        type="text"
                        auto-complete="on"
                />
            </el-form-item>

            <el-form-item prop="password">
                <el-input
                        :type="passwordType"
                        v-model="loginForm.password"
                        :placeholder="password"
                        name="password"
                        auto-complete="on"/>

            </el-form-item>

            <el-button type="primary" @click="loginCheck">Login</el-button>

        </el-form>

    </el-main>
</template>
<script>
    import io from 'socket.io-client';

    export default {
        name: 'login',
        data() {
            return {
                loginForm: {
                    username: 'admin',
                    password: '1111111'
                },
                passwordType: 'password',
                socket: io('localhost:3001'),
            }
        },
        methods: {
            popNotice(rcv_msg) {
                const h = this.$createElement;
                this.$notify({
                    title: 'New',
                    message: h('i', { style: 'color: teal'}, rcv_msg),
                    duration: 2000
                });
            },
            loginCheck() {
                alert('check '+this.loginForm.username+', '+this.loginForm.password);

                let msg = {
                    type: 'login',
                    username: this.loginForm.username,
                    password: this.loginForm.password
                };
                alert(JSON.stringify(msg));
                this.socket.emit('SEND_MESSAGE', msg);

                // this.$http.post('/api/user/login', {
                //     username: this.loginForm.username,
                //     password: this.loginForm.password
                // },{}).then((response) => {
                //     alert(response);
                //     console.log(response);
                // })

            }
        },
        mounted() {
            // this.socket = io('localhost:3001');
            this.socket.on('CONNECTED', (rcv_msg) => {
                this.popNotice(rcv_msg);
            });
            this.socket.on('MESSAGE', (rcv_msg) => {
                this.popNotice(rcv_msg);
            });
            this.socket.on('ERROR', (rcv_msg) => {
                this.popNotice(rcv_msg);
            });
            this.socket.on('SUCCEED', (rcv_msg) => {
                this.popNotice(rcv_msg);
            });
            this.socket.on('NOTMATCH', (rcv_msg) => {
                this.popNotice(rcv_msg);
            });
        },
        destroyed(){
            this.socket.close();
            console.log('closed');
        },
    }
</script>

<style>
    .el-form {
        /*width: 60%;*/
        margin: 0;
    }
    .el-form-item {
        margin: 0;
    }
    .el-input {
        width: 60%;
        margin-top: 50px;
    }
    .el-button {
        width: 60%;
    }
</style>
