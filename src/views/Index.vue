<template>
    <div class="index">
        <AppHeader />
        <el-container>
            <NavMenu />
            <el-container direction="vertical">
                <router-view />
                <AppFooter />
            </el-container>
        </el-container>

    </div>
</template>
<script>

    import AppHeader from "@/components/Header";
    import AppFooter from "@/components/Footer";
    import io from 'socket.io-client';
    import NavMenu from "../components/NavMenu";

    let socket;
    // let path, token;

    export default {
        name: 'index',
        data(){

        },
        methods: {
            open(rcv_msg) {
                const h = this.$createElement;
                this.$notify({
                    title: 'New',
                    message: h('i', { style: 'color: teal'}, rcv_msg),
                    duration: 2000
                });
            },
            sendMessage(e) {
                // e.preventDefault();
                let msg = {
                    user: this.user,
                    message: this.message
                };
                alert(JSON.stringify(msg));
                socket.emit('SEND_MESSAGE', msg);
                alert('Sent');
                this.message = '';
            },
        },
        mounted() {
            socket = io('localhost:3001');
            socket.on('CONNECTED', (rcv_msg) => {
                this.open(rcv_msg);

                // this.user = rcv_msg.user;
            });
            socket.on('MESSAGE', (rcv_msg) => {
                // this.messages = [...this.messages, data];
                // this.messages.push(data);
                if( rcv_msg.user ){
                    this.open(rcv_msg);
                }

            });
        },
        destroyed(){
            socket.close();
            console.log('closed');
        },
        components: {
            AppHeader,
            NavMenu,
            AppFooter,
        }
    };
</script>

<style>
    .el-header {
        background-color: #409EFF;
        color: #FFFFFF;
        text-align: center;
        line-height: 60px;
        padding: 0;
    }

    .el-footer {
        background-color: #545c64;
        color: #FFFFFF;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #545c64;
        color: #FFFFFF;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #FFFFFF;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        /*margin-bottom: 40px;*/
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
