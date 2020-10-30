const express = require('express');
const app=express();
const path=require('path');
const port = 5500
const router  = express.Router();



router.get('/',function(req,res){
res.sendFile(path.join(__dirname+'/home.html'));
});

app.use('/',router);
app.listen(port,() => console.log(`Example app listening at http://localhost:${port}`))

