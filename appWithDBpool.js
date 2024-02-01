const express = require('express');
const oracledb = require('./DB/dbConnect.js');

const app = express();
app.use(express.json());
app.set("view engine","ejs");

app.use(express.urlencoded({extended : true}));


// creating Server
const PORT = 3000;
app.listen(PORT, ()=> console.log('server started to listening at port 3000'));


// initializing the DataBase Pool
oracledb.init();


// Router and Page
const mainHomeRouter = require('./routes/mainHomeRouter.js');
app.use('/', mainHomeRouter );

const homeRouter = require('./routes/homeRouter.js');
app.use('/test',homeRouter);

const departmentRouter = require('./routes/deptRouter.js');
app.use('/dept',departmentRouter);

const employeeRouter = require('./routes/empRouter.js');
app.use('/emp',employeeRouter);

app.use('/login', require('./routes/loginRouter.js'));



/// 404 Page Ridercting 
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
    


//i will now make a endpoint for login 
// with Email and Password
// now write the codes

