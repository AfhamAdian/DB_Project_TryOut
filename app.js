const express = require('express');
//const { dirname } = require('path');
const app = express();
app.use(express.json());
app.listen(3000);

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});


//ridercts
app.get('/abour-us',(req, res) => {
    res.redirect('/about');
});
// app.get('/us', (req, res) => {
//     res.redirect('/about');
//   });


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
