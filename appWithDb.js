const express = require('express');
const app = express();

const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

/// starting server 
app.use(express.json());
app.listen(3000);


// conecing oracle db 
// var con;
// const dbConnect = async () => {
//     try{
//         con = await oracledb.getConnection({
//             user        : "hr",
//             password     : "hr",
//             connectionString : "localhost/orcl"
//         });
//         console.log("Database Succesfully connected");
//         // const dbData = await con.execute( 'SELECT * FROM departments' );
//         // console.log( dbData.rows );
//     }
//     catch(err){
//         con = undefined;
//         console.log( err );
//     }
//     return con;
// }
// // connectinf db
// const dbScocket = dbConnect();

// const query = async ( cont,queryStatement ) => {
//     try{
//         if( cont == undefined ){
//             console.log("dbSocket is empty\nCannot perform Query");
//             return;
//         }
//         const dbData = await cont.execute( 'SELECT * FROM departments' );
//         console.log( dbData.rows );
//     }
//     catch(err){
//         console.log( err );
//     }
// }
// // passing query
// query(dbScocket,'SELECT * FROM departments');





const dbConnect = async () => {
    let con;
    try {
        con = await oracledb.getConnection({
            user: "hr",
            password: "hr",
            connectString: "localhost/orcl"
        });
        console.log("Database successfully connected");
        // const dbData = await con.execute('SELECT * FROM departments');
        // console.log(dbData.rows);
    } catch (err) {
        con = undefined;
        console.error(err);
    }
    return con;
}

// Connecting to the database
var dbSocket;
(async () =>{
    dbSocket = await dbConnect();
    query(dbSocket, 'SELECT * FROM departments');
})();

const query = async (cont, queryStatement) => {
    try {
        if (cont === undefined) {
            console.log("dbSocket is empty. Cannot perform query");
            return;
        }
        const dbData = await cont.execute(queryStatement);
        console.log(dbData.rows);
    } catch (err) {
        console.error(err);
    }
}

// Passing a query
// setTimeout (() => {
//     query(dbSocket, 'SELECT * FROM departments');
// },500);








///home page
app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});
///about page
app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});


//redirects
app.get('/abour-us',(req, res) => {
    res.redirect('/about');
});
app.get('/us', (req, res) => {
    res.redirect('/about');
});


// apis
let user = {};

app.get('/user', (req, res) =>{
    res.send(user);
})

app.post('/user', (req,res) => {
    console.log(req.body);
    user = req.body;
    res.json({
            message: "data recieved"
        });
});

app.patch('/user', (req,res) =>{
    console.log( req.body );
    for( key in req.body)
    {
        user[key] = req.body[key];
    }
    res.json({
        message: "data updated"
    });
});

app.delete('/user',(req,res) => {
    user = {};
    res.json({
        message: "data has been deleted"
    });
});

// 404 page 

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})
