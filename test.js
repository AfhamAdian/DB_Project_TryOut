const { format } = require('date-fns');
const { v4 : uuid } = require('uuid');

const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');


console.log(__dirname);
console.log(__filename);



async function logInEvent()
{
    const dateTime = format( new Date(), 'ddMMyyyy\tHH:mm:ss');
    const logItem = dateTime + '\t' + uuid() + '\t' + '\n';
    console.log( logItem );

    try {
        if( !fs.existsSync(path.join(__dirname,'logs')))
        {
            await fsPromises.mkdir( path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile( path.join(__dirname, 'logs', 'eventLog.txt'), logItem );
    }
    catch(err)
    {
        console.log(err); 
    }
};
