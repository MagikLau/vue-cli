const path = require('path');
// const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// const userApi = require('./api/userApi');
//
// app.use(bodyParser);

// app.use('/api/user', userApi);

const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});

const mysql_util = require('./util/mysql_util')();

const io = require('socket.io')(server);

io.on('connection', function(socket) {

    socket.emit('CONNECTED', 'Socket.id: '+socket.id+' connected!'); // emit an event to the socket

    console.log('User: '+socket.id+' connect!');

    socket.on('SEND_MESSAGE', function(data) {
        console.log('Receive msg: '+JSON.stringify(data));
        if( data.type === 'login' ) {
            mysql_util.init();
            let sql = 'select * from user where username=?';
            let params = {
                username: data.username,
            };
            mysql_util.query(sql, [params.username], function(err, result) {
                if (err) {
                    console.log('err: '+JSON.stringify(err));
                    socket.emit('ERROR', err);
                }
                if (result) {
                    console.log('result: '+JSON.stringify(result));

                    if ( result[0].password === data.password ){
                        socket.emit('SUCCEED', 'SUCCEED! '+JSON.stringify(result[0]));
                    }else{
                        socket.emit('NOTMATCH', 'Not Match!');
                    }
                }
            });

        }

        // console.log('io emit: '+JSON.stringify(data));
        // io.emit('MESSAGE', data);
    });
});
