const express = require('express');
const { execute } = require('../DB/dbConnect.js');
const path = require('path');


async function searchByCompany( companyName ) 
{
    try{

        const sql = `
            SELECT 
            MODEL_COLOR_ID,
            MODEL_NAME,
            SEAT_CAP,
            ENGINE_CAP,
            COLOR,
            PRICE,
            LAUNCH_DATE,
            STOCK,
            WARRANTY,
            CAR_IMAGE_URL,
            TYPE_ID,
            VOUCHER_NO
            FROM company 
                    JOIN users ON ( users.ID = company.ID )
                    JOIN cars ON ( company.ID = cars.COMPANY_ID );
            WHERE NAME = '${companyName}'
        `;

        const binds = {

        }

        const result = await execute( sql, binds );
        return result;

    }catch(err){
        console.log(err);
    }

}



module.exports = searchByCompany;