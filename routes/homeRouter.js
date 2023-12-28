const express = require('express');
const path = require('path');


// Assuming __dirname is the 'route' directory
const routeDirectory = __dirname;
//console.log('Route Directory:', routeDirectory);

// Construct the absolute path to the 'view' directory
const viewDirectory = path.join(routeDirectory, '..', 'views');
//console.log('Absolute Path to View Directory:', viewDirectory);

// Construct the absolute path to the desired file in the 'view' directory
const filePathInView = path.join(viewDirectory, 'index.html');
//console.log('Absolute Path to File in View Directory:', filePathInView);

const homeRouter = express.Router();
homeRouter
    .route('/')
    .get((req,res) => {
        res.sendFile(filePathInView);
    })


module.exports = homeRouter; 