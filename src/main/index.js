const express = require('express');
const logger=require('../utils/logger');

const app = express();

function handleRequest(req,res){
    logger.l('request');
    res.send('ye h');
}
app.get('/',handleRequest);
app.listen(80,()=>{
    logger.s("started!");
});