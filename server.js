const express = require('express');
const multer = require('multer');
const upload = multer({dest:'uploads/'});

const app = express();

app.use(express.static('public'))

app.get('/',(req,res) =>{

})

app.post('/upload', (req,res)=>{

})

app.listen(4000, ()=>console.log( "localhost"));