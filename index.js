const express = require("express")
const app= express()
app.use(express.json())

app.post('/webhook',(req,res)=>{
    console.log("received")
    console.log(req.body)
    res.status(200).send("received")
});








app.listen(3000,()=>{
    console.log("Server start on 3000")
});



