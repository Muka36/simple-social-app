 const express = require('express');

const res = require('express/lib/response');

 const app = express();

const date = require ('date-format');
const  format  = require('express/lib/response');

 const PORT = 4000 || process.env.PORT

 const d = new Date();
 d.getFullYear();

 

 app.get("/", (req, res) => {
    res.status(200).send("hieeee");
 });
 
app.get("/api/v1/instagram", (req,res)=>{
    const instagram = {
        "username":"Muthukarthick",
        "followers":55,
        "following":5,
        "date" : date()
    }
    res.status(200).send(instagram);
})
app.get("/api/v1/linkedIn", (req,res)=>{
    const linkedIn = {
        "username":"Muthukarthick",
        "followers":55,
        "following":5,
        "date" : date(new Date ())
    }
    res.status(200).send(linkedIn);
})
app.get("/api/v1/facebook", (req,res)=>{
    const facebook = {
        "username":"Muthukarthick",
        "followers":55,
        "following":5,
        "date | time" : date(' dd/MM | hh:mm:ss.SSS', new Date())
    }
    res.status(200).send(facebook);
})


app.get("/api/v1/:token",(req,res) =>{
    console.log(req.params.token);
    res.status(200).json ({param : req.params.token});
})

 app.listen(PORT,()=>{
     console.log("working")
 });
  

 