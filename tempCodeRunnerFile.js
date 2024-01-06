
// Router and Page
const homeRouter = require('./routes/homeRouter.js');
app.use('/',homeRouter);

const departmentRouter = require('./routes/deptRouter.js');
app.use('/dept',departmentRouter);

const employeeRouter = require('./routes/empRouter.js');
app.use('/emp',employeeRouter);



/// 404 Page Ridercting 
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
    
