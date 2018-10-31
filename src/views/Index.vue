<!--suppress XmlInvalidId -->
<template>
  <div class="index">
      <app-header/>
      <div class="card-body">
          <div class="card-title">
              <h3>Chat Group</h3>
              <hr>
          </div>
          <div class="card-body">
              <div class="messages" v-for="(msg, index) in messages" :key="index">
                  <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
              </div>
          </div>
      </div>
      <div class="card-footer">
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
      </div>
      <app-footer/>
      <router-view />
  </div>
</template>
<script>

import AppHeader from "@/components/Header";
import AppFooter from "@/components/Foofer";
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
