const express = require('express');// require framework
const app = express(); // create instance of express
const morgan = require('morgan');
const bodyParser = require('body-parser');

// config
app.set('port', 4000);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// rutes
app.use('/api/v1/users/', require('./api/v1/routes/users.routes'));

// start server
app.listen(app.get('port'), ()=>{
    console.log(`server Running on port ${app.get('port')}`);
});