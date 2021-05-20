const cors=require('cors')
const dataservice=require('./services/dataservice')
const express=require('express')
 const app=express()
 app.use(express.json())
 
 app.use(cors({origin:"http://localhost:4200",credentials:true}))

 app.post('/register',(req,res) => {
     console.log(req.body.uid)
     dataservice.register(req.body.uid, req.body.uname, req.body.pswd)
     .then((result)=>{
         res.status(result.statuscode).json(result)
     })
 })

 app.post('/login',(req,res)=>{
     console.log((req.body.uid))
     dataservice.login(req.body.uid,req.body.pswd)
     .then((result)=>{
         res.status(result.statuscode).json(result)
     })
 })

 app.post('/buy',(req,res)=>{
     dataservice.buy(req.body.uid,req.body.pswd)
     .then((result)=>{
         res.status(result.statuscode).json(result)
     })
 })

 

 app.listen(3000,()=>{
    console.log("working");
})
