require([
    'socketHook',
    'underscore'
],
function( socket, _ ) {
    //socket = io.connect('http://localhost');
    socket.on('message', function(data) {
        console.log(data);
    });
    socket.emit('send', { data: 'whassuppp' });
});