const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;

const _ = require('lodash');

const logEvent = require("./logEvent");
const EventEmitter = require('events');


class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();


//// registering every server restart event
/// oh man it took 4 hours

myEmitter.on( 'log', (msg) => logEvent(msg));
myEmitter.emit('log','log in event emiited!');



// Building Server

const PORT = process.env.PORT || 3000;

const server = http.createServer( (req,res) => {
    console.log('Request has been made to the server');
    console.log(req.url+'\n'+req.method);

    res.setHeader('Content-Type','text/html');

    let path = './views';
    switch( req.url.toLocaleLowerCase())
    {
        case '/':
            path += '/index.html';
            break;
        case '/about' :
            path += '/about.html';
            break;
        default :
            path += '/404.html';
            break;
    }

    fs.readFile( path, (err,dt)=>{                                          /// this has to be made async
        res.end(dt);
    })
});



server.listen( PORT, () => {
    console.log('server is listening to port 3000');
});



// {
//     "dependencies": {
//       "date-fns": "^3.0.6",
//       "express": "^4.18.2",
//       "lodash": "^4.17.21",
//       "oracledb": "^6.3.0",
//       "uuid": "^9.0.1"
//     },
//     "name": "project_try_1",
//     "version": "1.0.0",
//     "main": "index.js",
//     "devDependencies": {
//       "nodemon": "^3.0.2"
//     },
//     "scripts": {
//       "start": "node appWithDBpool.js",
//       "dev" : "node appWithDb.js",
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "description": ""
//   }
  