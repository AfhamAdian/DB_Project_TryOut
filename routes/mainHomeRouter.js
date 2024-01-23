const express = require('express');
const { execute } = require('../DB/dbConnect.js');
const path = require('path');
const { result } = require('lodash');
const { searchByCompany, test } = require('../controller/mainHome.js');



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
    .get( async (req,res) => 
    {
        const sql="SELECT TYPE_NAME,CAR_TYPE_URL FROM CARTYPE";
        const sql2="SELECT NAME FROM USERS WHERE USER_TYPE = 'CO'";
        const car_types=await execute(sql,{});
        console.log(car_types);
        const company_names=await execute(sql2,{});
        console.log(company_names);
        res.render('index',{car_types: car_types,company_names: company_names,result: {}});
    })
    .post( async (req, res) => {
        res.write("Post is sent");
    })
    
mainHomeRouter
    .route('/showBrandWise/:companyName')
    .get( async ( req, res ) => {
        console.log("asche");
        const {
            companyName
        } = req.params;

        console.log(companyName);
        test();
        const result = await searchByCompany( companyName );
        console.log( result );
        const sql="SELECT TYPE_NAME,CAR_TYPE_URL FROM CARTYPE";
        const sql2="SELECT NAME FROM USERS WHERE USER_TYPE = 'CO'";
        const car_types=await execute(sql,{});
        const company_names=await execute(sql2,{});
        res.render('index',{car_types: car_types,company_names: company_names,result: result});
    })

    module.exports = mainHomeRouter; 