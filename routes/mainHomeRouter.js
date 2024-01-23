const express = require('express');
const { execute } = require('../DB/dbConnect.js');
const path = require('path');
const { result } = require('lodash');
const { searchByCompany, searchByType, test } = require('../controller/mainHome.js');
const { type } = require('os');



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
        res.render('index',{});
    })
    .post( async (req, res) => {
        res.write("Post is sent");
    })
    
mainHomeRouter
    .route('/showBrandWise/:companyName')
    .post( async ( req, res ) => {
        console.log("asche");
        const {
            companyName
        } = req.params;

        console.log(companyName);
        test();
        const result = await searchByCompany( companyName );//
        console.log( result );
        res.send("ok");
    })

mainHomeRouter
    .route('/showTypeWise/:typeName')
    .post( async ( req, res ) => {
        //console.log("asche");
        const {
            typeName
        } = req.params;

        console.log(typeName);
        test();
        const result = await searchByType( typeName );
        console.log( result );
        res.send("ok");
    })

    module.exports = mainHomeRouter;//