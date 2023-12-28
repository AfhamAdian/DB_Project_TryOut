const express = require('express');
const oracledb = require('oracledb');


oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;


const app = express();
app.use(express.json());


const PORT = 3000;
app.listen(PORT, ()=> console.log('server started to listening at port 3000'));


// connecting database

// const dbConnect = async () => {
//     let con;
//     try {
//         con = await oracledb.getConnection({
//             user: "hr",
//             password: "hr",
//             connectString: "localhost/orcl"
//         });
//         console.log("Database successfully connected");
//         // const dbData = await con.execute('SELECT * FROM departments');
//         // console.log(dbData.rows);
//     } catch (err) {
//         con = undefined;
//         console.error(err);
//     }
//     return con;
// }



// var dbSocket;
// const alu = async (msg) => {
//     console.log(msg);
//     dbSocket = await dbConnect();
//     query(dbSocket, msg);
// };

// const query = async (cont, queryStatement) => {
//     try {
//         if (cont === undefined) {
//             console.log("dbSocket is empty. Cannot perform query");
//             return;
//         }
//         const dbData = await cont.execute(queryStatement);
//         console.log(dbData.rows);
//     } catch (err) {
//         console.error(err);
//     }
// }













// var dbSocket = undefined;

// /// function for performing query
// const query = async (queryStatement) =>{
//     if( dbSocket == undefined) dbSocket = await dbConnect();
//     console.log(queryStatement);
//     queryHelper(dbSocket, queryStatement);
// }


// const queryHelper = async (cont, queryStatement) => {
//     try {
//         if (cont === undefined) {
//             console.log("dbSocket is empty. Cannot perform query");
//             return;
//         }
//         const dbData = await cont.execute(queryStatement);
//         console.log(dbData.rows);
//     } catch (err) {
//         console.error(err);
//     }
// }

const { dbConnect, query } = require('./DB/dbConnect.js');
var dbSocket = undefined;







// using routers
//const homeRouter = express.Router();
const homeRouter = require('./routes/homeRouter.js');
app.use('/',homeRouter);

//const departmentRouter = express.Router();
const departmentRouter = require('./routes/deptRouter.js');
app.use('/dept',departmentRouter);

const employeeRouter = express.Router();
app.use('/emp',employeeRouter);


//setting up router details
// homeRouter
//     .route('/')
//     .get((req,res) => {
//         res.sendFile('./views/index.html', { root: __dirname });
//     })


// departmentRouter
//     .route('/')
//     .get(getDept)
//     .post(postDept)


employeeRouter
    .route('/')
    .get(getEmp)
    .post(postEmp)




/// 404 Page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
    








//// dept ROuter function
// function getDept(req,res){
//     res.sendFile('./views/dept.html', { root: __dirname });
//     //query('SELECT * FROM DEPARTMENTS;');
//     query( "SELECT * FROM DEPARTMENTS");
// }

// function postDept(req,res){
//     console.log("PostDept is working");
// }

//// emp Router Function
function getEmp(req,res){
    console.log("GetEMP working");
    res.sendFile('./views/emp.html', { root: __dirname });
    query(dbSocket,"SELECT * FROM EMPLOYEES");
}

function postEmp(req,res){
    res.write("PostEMP is working");
}