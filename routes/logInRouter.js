const express = require('express');
const { execute } = require('../DB/dbConnect.js');
const path = require('path');
const { result } = require('lodash');
const { authUser,sendUserData,sendUserDataByUserName } = require('../controller/logIn.js');
const { updatePassword } = require('../controller/updatePassWord.js');

// Assuming __dirname is the 'route' directory
const routeDirectory = __dirname;
//console.log('Route Directory:', routeDirectory);

// Construct the absolute path to the 'view' directory
const viewDirectory = path.join(routeDirectory, '..', 'views');
//console.log('Absolute Path to View Directory:', viewDirectory);

// Construct the absolute path to the desired file in the 'view' directory
const filePathInView = path.join(viewDirectory, '');
//console.log('Absolute Path to File in View Directory:', filePathInView);


const loginRouter = express.Router();

loginRouter
    .route('/')
//
    .get( async(req,res) =>
    {
        // here we will render login.ejs page
        res.render('login',{});
    })

    .post( async ( req, res ) => 
    {
        // here we will take login data from user and check if it is valid or not
        // if valid then redirect to home page
        // else show error message
        const {
            username,
            password
        } = req.body;

        console.log(username);
        console.log(password);
        
        const bool = await authUser( username, password );
        const result = await sendUserData( username, password );

        if( bool == true ){
            res.json('Login Successful');
        }
        else{
            res.json('Invalid Username or Password');
        }

    })

    // here i will redirect to forgot password page
    // then use the updatePass.ejs page to get new password 
    // and update the password in database

loginRouter
    .route('/forgotPassword')
    
    .get( async(req,res) =>
    {
        res.render('updatePass',{});
    })
    
    .post( async ( req, res ) =>
    {
        const {
            username,
            newPassword,
            confirmPassword
        } = req.body;

        const userCheck = await sendUserDataByUserName( username );

        if( userCheck.length == 0 ){
            res.josn('Invalid Username');
            return;
        }

        if( newPassword === confirmPassword ){
            const bool = await updatePassword( username, newPassword );
            if( bool == true ){
                res.json('Password Updated Successfully');
            }
            else{
                res.json('Error! Try Again');
            }
        }

    })


module.exports = loginRouter;