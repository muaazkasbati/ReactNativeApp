const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
require("./Employee");

const app = express();

const con = "mongodb+srv://root:muaaz@cluster0.q7zdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//GJ6LblfwGtPJw4mL
const Employee = mongoose.model("employee");
app.use(bodyparser.json());

mongoose.connect(con,{useNewUrlParser: true})

mongoose.connection.on("connected", (err)=>{
    console.log("connected to mongooo")
})


app.get("/",(req,res)=>{
    Employee.find({})
    .then((data)=>{
        res.send(data);
    })
    .then((err)=>{
        console.log(err);
    })
})

app.post("/create",(req,res)=>{

    const employee = new Employee({
        name:req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position,
      
    })
    employee.save()
    .then((data)=>{
        console.log(data);
        // res.send(data)
    })
    .then((err)=>{
        console.log(err);
    })
    res.send("Data Inserted")
})

app.post("/update",(req,res)=>{
    Employee.findByIdAndUpdate(
        req.body.id,
        {
        name:req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position,
        }
    
    )
  
    .then((data)=>{
        console.log(data);
        // res.send(data)
    })
    .then((err)=>{
        console.log(err);
    })
    res.send("Data Updated")
})


app.post("/delete",(req,res)=>{
   
    Employee.findByIdAndDelete(req.body.id)
  
    .then((data)=>{
        console.log(data);
        // res.send(data)
    })
    .then((err)=>{
        console.log(err);
    })
    res.send("User Deleted")
})


app.listen(process.env.PORT || 3000 ,()=>{
    console.log("kia hua");
})


