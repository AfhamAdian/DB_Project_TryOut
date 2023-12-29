const express = require('express');
const path = require('path')
const port = 5001;
const bodyparser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/search',(req,res)=>{
    console.log(req.body);
    
})

app.listen(port,()=>{
    console.log('Server is running')
})


