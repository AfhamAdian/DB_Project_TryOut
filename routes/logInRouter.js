const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const { authUser,sendUserData,sendUserDataByUserName } = require('../controller/logIn.js');
const { updatePassword } = require('../controller/updatePassWord.js');

const jwt = require('jsonwebtoken');
require('dotenv').config();

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
        try{
            const {
                username,
                password
            } = req.body;

            console.log(username);
            console.log(password);//
            
            const bool = await authUser( username, password );
            const result = await sendUserData( username, password );

            if( bool == true ){

                  const payLoad = {
                    username: username,
                    password: password
                }
                
            res.json( { message: 'Successful' });
                //const accessToken = jwt.sign( payLoad, process.env.ACCESS_TOKEN_SECRET );    
                //res.json({ message: 'Login Successful', accessToken: accessToken }); 
                
                // const user = {
                //     username: username,
                // }
                
                // res.render('dashboard',  );
            }
            else{
                res.json('Invalid Username or Password');
            }
        }catch(err){
            console.log(err);
        }
    })

    // here i will redirect to forgot password page
    // then use the updatePass.ejs page to get new password 
    // and update the password in database

loginRouter
    .route('/forgotPassword')
    // here we will send cookies in get request
    .get( async(req,res) =>
    {
        // res.cookie('username', 'abc', { maxAge: 900000, httpOnly: false });
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
                res.cookie('isLoggedIn',true, { maxAge: 900000, httpOnly: false , secure: false });
            }
            else{
                res.json('Error! Try Again');
            }
        }

    })


module.exports = loginRouter;