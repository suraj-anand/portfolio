require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const nodemailer = require("nodemailer")
const app = express()

// Mail Setting

// Middlewares
app.use(cors({
    origin: true,
    credentials: true    
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


app.get("/test" , (req,res) => {
    res.send("Backend site made of Express.js")
})

app.post("/api/userData" , (req,res) => {

    console.log(req.body);
    
    let newUserData = new userDataModel({
        ...req.body
    })

    newUserData.save((err) => {

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            auth : {
                user: process.env.gmail_id,
                pass: process.env.gmail_app_pass,
    
            }
        })
    
        transporter.sendMail({
            from: "suraj02anand@gmail.com",
            to: req.body.email,
            subject: "Thanks for Contacting Suraj",
            html : `
                    <h3>Hi ${req.body.name}!</h3>
                    <p>Thanks for filling up the form on my portfolio :)</p>
                    <p>I'll Get in touch with you soon.</p>
                    <p>Have a nice day ${req.body.name}.</p>
                    <p style="color:darkblue">Thanks & Regards</p>
                    <p style="color:gray">Suraj A</p>
                `
        } , (err,info) => {
            console.log("sending....")
            if(err){
                console.log("failed :(")
                console.log(err)
            }
            else{
                console.log("Sent :)")
                console.log(info)
            }
        })

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


app.get("/api/testMail" , (req,res) => {
    
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running`)
})