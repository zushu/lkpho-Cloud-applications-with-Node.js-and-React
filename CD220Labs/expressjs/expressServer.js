const express = require('express');
const app = new express();

let loginDetails = [];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

app.get("/fetch/:num",(req,res)=>{
    let num = parseInt(req.params.num);
    if (num > 0 && num <= 12)
    {
    res.send(num + "th month is " +months[num-1])
    }
    else 
    {
        res.send("invalid month number")
    }
})
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

