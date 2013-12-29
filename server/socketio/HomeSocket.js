//binds an input text field to listen to any input
//limited to the MAX_MESSAGE_LENGTH
var socketIO = require('socket.io');

module.exports = function(appServer) {
    'use strict';
    var io = socketIO.listen(appServer),
        //default message for clients
        currentmessage = 'leave a message...',
        MAX_MESSAGE_LENGTH = 1024;


    return io.sockets.on('connection', function(socket) {
        //get the current message on connect
        socket.on('getmessage', function() {
            socket.emit('updatemessage', currentmessage);
        });

        //when the client sends us a message
        socket.on('sendmessage', function (message) {
            currentmessage = (message.length < MAX_MESSAGE_LENGTH ) ? message : currentmessage;
            socket.broadcast.emit('updatemessage', currentmessage);
        });
    });
};
