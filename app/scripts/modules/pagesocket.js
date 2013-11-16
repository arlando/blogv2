require([
    'socketHook',
    'underscore'
],
function( socket, _ ) {
    socket.on('message', function(data) {
        console.log(data);
    });
    socket.emit('send', { data: 'whassuppp' });
});