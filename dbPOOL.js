const oracledb = require('oracledb');

const mypw = ...  // set mypw to the hr schema password

async function run() {
    try {
        await oracledb.createPool({
            user          : "hr",
            password      : mypw  // mypw contains the hr schema password
            connectString : "localhost/FREEPDB1"
            poolIncrement : 0,
            poolMax       : 4,
            poolMin       : 4
        });

        let connection;
        try {
            // get connection from the pool and use it
            connection = await oracledb.getConnection();
            result = await connection.execute(`SELECT last_name FROM employees`);
            console.log("Result is:", result);
        } catch (err) {
            throw (err);
        } finally {
            if (connection) {
                try {
                    await connection.close(); // Put the connection back in the pool
                } catch (err) {
                    throw (err);
                }
            }
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        await oracledb.getPool().close(0);
    }
}

run();