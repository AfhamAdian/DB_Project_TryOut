const express = require('express');
const { execute } = require('../DB/dbConnect.js');
const path = require('path');



// Assuming __dirname is the 'route' directory
const routeDirectory = __dirname;
//console.log('Route Directory:', routeDirectory);

// Construct the absolute path to the 'view' directory
const viewDirectory = path.join(routeDirectory, '..', 'views');
//console.log('Absolute Path to View Directory:', viewDirectory);

// Construct the absolute path to the desired file in the 'view' directory
const filePathInView = path.join(viewDirectory, 'page1.html');
//console.log('Absolute Path to File in View Directory:', filePathInView);


const mainHomeRouter = express.Router();

mainHomeRouter
    .route('/')
    .get( (req,res) => 
    {
        res
    })