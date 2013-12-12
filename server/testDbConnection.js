'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');
var baucis = require('baucis');
var socketIO = require('socket.io');
var mongoose = require('mongoose');
var prod = false;

// start mongoose
if (process.env.DATABASE_URL) {
    prod = true;
}

mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost/post_database" );
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log('Connected to Database');
});