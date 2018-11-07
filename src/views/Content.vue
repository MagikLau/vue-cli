<template>
    <el-main>

        <el-row :span="24">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-input
                            size="small"
                            placeholder="User"
                            suffix-icon="el-icon-date"
                            v-model="user">
                    </el-input>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <el-input
                            size="small"
                            placeholder="Message"
                            suffix-icon="el-icon-date"
                            v-model="message">
                    </el-input>
                </div>
            </el-col>
        </el-row>

        <el-button type="primary" @click="sendMessage">Send</el-button>

        <!--<div class="grid-content bg-blue-light" v-for="(msg, index) in messages" :key="index">-->
        <!--{{ msg.user }}: {{ msg.message }}-->
        <!--</div>-->

    </el-main>

</template>
<script>

    import io from 'socket.io-client';

    export default {
        name: 'content',
        data(){
            return {
                user: '',
                message: '',
                // messages: [],
                socket: io('localhost:3001'),
            }
        },
        methods: {
            sendMessage(e) {
                // e.preventDefault();
                let msg = {
                    user: this.user,
                    message: this.message
                };
                alert(JSON.stringify(msg));
                this.socket.emit('SEND_MESSAGE', msg);
                alert('Sent');
                this.message = '';
            }
        },
        destroyed(){
            this.socket.close();
            console.log('closed');
        },
    }
</script>
