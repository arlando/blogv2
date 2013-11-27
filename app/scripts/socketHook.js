//Loads the socket to the host
define([
    'socketio'
],
function() {
   var socket = io.connect('http://localhost');
   return socket; 
});