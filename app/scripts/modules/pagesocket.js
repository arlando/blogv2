require([
    'socketHook'
],
function( socket ) {
    socket.on('message', function(data) {
        console.log(data);
    });
    socket.emit('send', { data: 'whassuppp' });
});