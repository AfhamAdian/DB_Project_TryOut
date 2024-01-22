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
        const query_text="SELECT * FROM USERS WHERE LOWER(NAME) LIKE LOWER('%" + text + "%')";
        const results = await execute(query_text,{});
        //console.log( results );
        if(results.length > 0)
            res.json(results);
        else 
            res.json([]);
    })
    homeRouter
    .route('/insertTest')
    .post(async(req,res) => {

        const {
            id,
            name,
            pass
        } = req.body;

        console.log(id);
        console.log(name);
        console.log(pass);

        const query_text = 'INSERT INTO USERS(ID,NAME,PASSWORD) VALUES(:id,:name,:pass)';
        const binds = {
           id,name,pass
        }
        await execute(query_text,binds);
    })


module.exports = homeRouter; 