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
    import NavMenu from "../components/NavMenu";
    import io from 'socket.io-client';

    export default {
        name: 'index',
        data(){
            return {
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

        },
        mounted() {
            this.socket.on('CONNECTED', (rcv_msg) => {
                this.popNotice(rcv_msg);
            });
            this.socket.on('MESSAGE', (rcv_msg) => {
                // this.messages = [...this.messages, data];
                // this.messages.push(data);
                if( rcv_msg.user ){
                    this.popNotice(rcv_msg);
                }

            });
        },
        destroyed(){
            this.socket.close();
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
        padding: 0;
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
