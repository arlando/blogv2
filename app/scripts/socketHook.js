//Loads the socket to the host
define([],
function() {
   var socket = io.connect('http://' + window.location.host);
   return socket; 
});