const express = require('express');
const oracledb = require('oracledb');


oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;


const app = express();
app.use(express.json());


const PORT = 3000;
app.listen(PORT, ()=> console.log('server started to listening at port 3000'));


//Connecting databse 

// DB pool creation function
const init = async ()=> {

    //oracledb.autoCommit = true             // CRUD operations will automatically change database permenantly
    //                                       // if flase, i have to use connection.commit() after every CRUD
   
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    try {
        await oracledb.createPool({
            user          : "hr",
            password      : "hr",  // mypw contains the hr schema password
            connectString : "localhost/orcl",
            poolIncrement : 1,
            poolMax       : 15,
            poolMin       : 4
        });
        console.log("Database pool created...");
    }catch(err){
        console.log(`Found error : ${err.message} while creating db pool...`);
    }

}
// Pool closing Function
const close = async () => {
    console.log('Closing db...');
    try{
        await oracledb.getPool().close(0);
        console.log('DB closed successfully...');
    }catch(err){
        console.log(`Found error : ${err.message + '\n'} while closing db...`);
    }
}

// SQL execution function
const execute = async ( sql, binds) => {
    console.log( "Sql statemnt passed with " + sql + " binds " + binds + "\n");

    let connection;
    try{
        connection = await oracledb.getConnection();
        resultQuery = await connection.execute( sql, binds );

        console.log(resultQuery.rows);
        console.log("SQL query Result returned Successfully" + '\n');
        
        return resultQuery.rows;                                // returns data trom DATABASE table

    }catch( err ){
        console.log(`Found error : ${err.message} while excecuting SQL QUERY`);
    }finally{
        if (connection) {
            try {
                await connection.close();           // Put the connection back in the pool
            } catch (err) {
                console.log(`Found error : ${err.message} while closing Connection after SQL Query`);
            }
        }
    }
}

init();



const homeRouter = express.Router();
//const homeRouter = require('./routes/homeRouter.js');
app.use('/',homeRouter);

const departmentRouter = express.Router();
//const departmentRouter = require('./routes/deptRouter.js');
app.use('/dept',departmentRouter);

const employeeRouter = express.Router();
app.use('/emp',employeeRouter);


//setting up router details
homeRouter
    .route('/')
    .get((req,res) => {
        res.sendFile('./views/index.html', { root: __dirname });
    })


departmentRouter
    .route('/')
    .get(getDept)
    .post(postDept)


employeeRouter
    .route('/')
    .get(getEmp)
    .post(postEmp)




/// 404 Page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
    



//// dept Router function
function getDept(req,res){
    res.sendFile('./views/dept.html', { root: __dirname });
    execute( "SELECT * FROM DEPARTMENTS", {});
}

function postDept(req,res){
    console.log("PostDept is working");
}


//// emp Router Function
function getEmp(req,res){
    console.log("GetEMP working");
    res.sendFile('./views/emp.html', { root: __dirname });
    execute("SELECT * FROM EMPLOYEES", {});
}

function postEmp(req,res){
    res.write("PostEMP is working");
}