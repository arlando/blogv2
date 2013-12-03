//Loads the socket to the host
define([],
function() {
   var socket = io.connect('http://arlando.net');
   return socket; 
});