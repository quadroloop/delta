// Delta Server
// Author: Bryce Narciso C. Mercines

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');
var fs = fs || require('fs');

// init lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

//db defaults


app.use(express.static('src'));



app.set('port', (process.env.PORT || 3000));

http.listen(3000);

function guid() { 
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); 
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

// get date
function nDate(){
  let date = new Date()
let options = {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        };
let formattedDate = date.toLocaleString(undefined, options);
  return formattedDate;
}

// get time
function nTime(){
  var ts = new Date();
  return ts.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}


 


var port = 3000;

// identify the user using ip


//welcome message
console.log("=======================")
console.log("    Delva v.0.11       ");
console.log("=======================")
console.log(" Running server         ");
console.log("------------------------");
console.log("listening on port: "+port);
console.log("-------------------------");

// Emit welcome message on connection
io.sockets.on('connection', function(socket) {

    socket.broadcast.emit('welcome', { message: 'Welcome!' });
   // socket functions here

});

