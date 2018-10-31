const express = require('express');

const app = express();

const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log('user:'+socket.id+' connect!');
    socket.on('SEND_MESSAGE', function(data) {
        console.log('server emit: '+data);
        io.emit('MESSAGE', data);
    });
});
