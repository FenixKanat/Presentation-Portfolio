const express = require('express');
const multer = require('multer');
const aws = require('aws-sdk');
const app = express();

const upload = multer({
    
    limits: {fileSize :1000000 },
    dest:'uploads/'
    
});


app.use(express.static('public'))

app.get('/',(req,res) =>{

})

app.post('/upload', (req,res)=>{

})

app.listen(4000, ()=>console.log( "localhost"));