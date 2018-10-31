<!--suppress XmlInvalidId -->
<template>
  <div class="index">
      <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
              <!--<app-header/>-->
              <el-header>Header</el-header>
              <el-main>
                  <div class="messages" v-for="(msg, index) in messages" :key="index">
                      <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
                  </div>
                  <form @submit.prevent="sendMessage">
                      <div class="gorm-group">
                          <label for="user">User:</label>
                          <input type="text" v-model="user" class="form-control" title="user">
                      </div>
                      <div class="gorm-group pb-3">
                          <label for="message">Message:</label>
                          <input type="text" v-model="message" class="form-control" title="message">
                      </div>
                      <button type="submit" class="btn btn-success">Send</button>
                  </form>
              </el-main>
              <!--<app-footer/>-->
              <el-footer>Footer</el-footer>
          </el-container>
      </el-container>
      <router-view />
  </div>
</template>
<script>

import AppHeader from "@/components/Header";
import AppFooter from "@/components/Footer";
import io from 'socket.io-client';

export default {
    name: 'home',
    data() {
        return {
            user: '',
            message: '',
            messages: [],
            socket : io('localhost:3001')
        }
    },
    methods: {
        sendMessage(e) {
            e.preventDefault();

            this.socket.emit('SEND_MESSAGE', {
                user: this.user,
                message: this.message
            });
            this.message = ''
        }
    },
    mounted() {
        this.socket.on('MESSAGE', (data) => {
            this.messages = [...this.messages, data];
            // you can also do this.messages.push(data)
        });
    },
    components: {
        'app-header': AppHeader,
        'app-footer': AppFooter,
    }
};
</script>

<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
