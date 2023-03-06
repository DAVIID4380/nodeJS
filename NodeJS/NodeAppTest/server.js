const express = require('express');// require framework
const app = express(); // create instance of express
const morgan = require('morgan');

// config
app.set('port', 4000);

//middlewares
app.use(morgan('combined'));

// rutes
app.get('/', (req,res)=> {
    res.send({TITLE:'Hello ADSI 023'});
})

// start server
app.listen(app.get('port'), ()=>{
    console.log(`server Running on port ${app.get('port')}`);
});