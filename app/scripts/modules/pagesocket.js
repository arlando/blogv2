require([
    'socketHook'
],
function( socket ) {
    //example
    socket.on('message', function(data) {
        console.log(data);
    });
    socket.emit('send', { data: 'whassuppp' });
});