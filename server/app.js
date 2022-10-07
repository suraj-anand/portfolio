require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

// Middlewares
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

app.use(express.json())

// DB
const userDataModel = require("./models/userDataModel");
mongoose.connect(process.env.DB_STRING , (err) => {
    if (err)
        return err;
    console.log('Connected to MongoDB')
})

// Routes
app.get("/" , (req,res) => {
    res.send("Hello World!")
})

app.post("/api/userData" , (req,res) => {
    let newUserData = new userDataModel({
        ...req.body
    })

    newUserData.save((err) => {
        if(!err){
            console.log(`Saved Successfully`);
            res.status(201).json({status: true})
        }
        else{
            console.log(`Error on Saving`);
            console.log(err)
            res.status(501).json({status : false});
        }
    })
})

app.delete("/api/userData/:id" , (req,res) => {
   let id = req.params.id;

   console.log('Deleting Item : ' + id)
   userDataModel.findByIdAndRemove(id , (err) => {
    if(!err){
        console.log('Delete Successful')
        res.status(200).json({status : true});
    }
    else{
        console.log(err)
    }
   })
})

app.get("/api/userData" , (req,res) => {
    userDataModel.find({} , (err , foundData) => {
        if(!err){
            res.status(200).json({data : foundData})
        }
        else{
            res.status(501).json(err)
        }
    })
})

app.post("/api/login" , (req,res) => {
    console.log(process.env.username_ + "  = = = " + req.body.username)
    console.log(process.env.password_ + "  = = = " + req.body.username)
    if( req.body.username === process.env.username_ && req.body.password_ === process.env.password ){
        console.log('Auth Success')
        res.status(200).json({status: true})
    }else{
        console.log('Invalid Credentials')
        res.status(403).json({status: false})
    }
})

app.listen(8000, () => {
    console.log(`Server is running`)
})