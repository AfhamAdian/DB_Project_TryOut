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

const homeRouter = express.Router();
homeRouter
    .route('/')
    .get((req,res) => {
        res.sendFile(filePathInView);
    })
    .post( async ( req, res ) => {
        //console.log(req.body);
        const text = req.body.searchBar;
        //console.log( text );
        const results = await execute(text,{});
        //console.log( results );
        res.json( results );
    })


module.exports = homeRouter; 