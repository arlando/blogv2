//Loads the socket to the host
define([
    'socketio'
],
function( io ) {
   var socket = io.connect('http://localhost');
   return socket; 
});