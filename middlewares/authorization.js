const jwt = require("jsonwebtoken");
require("dotenv").config();

async function authorization (req, res, next)
{
    try{
        const jwtToken = req.header("token")
        if(!jwtToken){
            return res.status(403).json("Not Authorized!");
        }
        const payload = jwt.verify(jwtToken, process.env.ACCESS_TOKEN_SECRET);

        req.user = payload.user;
        
        next();
    }
    catch(err){
        console.error(err.message);
        return res.status(403).json("Not Authorized!");
    }
}

module.exports = authorization;