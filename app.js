//require('dotenv').config()
var express = require('express')
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
var schema = require('./schemas')
var regiforms = schema.regiform;
var clientLogins = schema.userform;
var clientcomplaints = schema.complaint;
var assign=schema.assign;
var clientCameras = schema.pushcamera;
var clientSignup = schema.tranform;

app.use(cors())
mongoose.connect('mongodb://roshenikosanam:rosheni123@ds159204.mlab.com:59204/wastageaccumulation', { useNewUrlParser: true });
var port = process.env.PORT || 3000;
app.post("/register", function (req, res) {

    var form = req.body;
    console.log(req.body)

clientLogins.create(form,function(err,data){
   
     if(err)
         console.log(err);
         else
         {
		 console.log("Data successfully inserted");
         return res.json({ "inserted": true });
         }
        })
    })
    app.post("/complaint", function (req, res) {

        var form = req.body;
        console.log(req.body)
    
    clientcomplaints.create(form,function(err,data){
       
         if(err)
             console.log(err);
             else
             {
             console.log("Data successfully inserted");
             return res.json({ "inserted": true });
             }
            })
        })

        app.get("/getvehicle", function (req, res) {
            console.log(req.query)
            clientLogins.find({'Role':req.query.Role, 'available':req.query.available}, function (err, data) {
                if (err)
                    throw err;
                
                console.log(JSON.stringify(data))
                console.log(data.length)
                if(data.length == 0)
                return res.json({"isVerified":false})
                else
                return res.json(data)
        })
        })

        app.get("/getdrivertask", function (req, res) {
            console.log(req.query)
            assign.find({'driveremail':req.query.driveremail}, function (err, data) {
                if (err)
                    throw err;                
                console.log(JSON.stringify(data))
                console.log(data.length)
                if(data.length == 0)
                return res.json({"isVerified":false})
                else
                return res.json(data)
        })
        })
        app.get("/getcomplaint", function (req, res) {
            console.log(req.query)
            clientcomplaints.find({'for':req.query.for}, function (err, data) {
                if (err)
                    throw err;
                
                console.log(JSON.stringify(data))
                console.log(data.length)
                if(data.length == 0)
                return res.json({"isVerified":false})
                else
                return res.json(data)
        })
        })


    app.get("/getRole", function (req, res) {
        console.log(req.query)
        clientLogins.find({'Email':req.query.Email, 'Password':req.query.Password}, function (err, data) {
            if (err)
                throw err;
            
            console.log(JSON.stringify(data))
            console.log(data.length)
            if(data.length == 0)
            return res.json({"isVerified":false})
            return res.json(data)
    })
    })

    
    app.get("/getlist", function (req, res) {
        console.log(req.query)
        clientLogins.find({"Role":"d"}, function (err, data) {
            if (err)
                throw err;
            
            console.log(JSON.stringify(data))
            console.log(data.length)
            if(data.length == 0)
            return res.json({"isVerified":false})
            return res.json(data)
    })
    })

    app.get("/getinfo", function (req, res) {
        console.log(req.query)
        clientLogins.find({"Role":"d"}, function (err, data) {
            if (err)
                throw err;
            
            console.log(JSON.stringify(data))
            console.log(data.length)
            if(data.length == 0)
            return res.json({"isVerified":false})
            return res.json(data)
    })
    })

    app.post("/pushcamera", function (req, res) {

        var form = req.body;
        console.log(req.body)
    clientCameras.create(form,function(err,data){
   
        if(err)
            console.log(err);
            else
            {
            console.log("Data successfully inserted");
            return res.json({ "inserted": true });
            }
           })
       })

       app.post("/tranform", function (req, res) {

        var form = req.body;
        console.log(req.body)
    
    clientSignup.create(form,function(err,data){
       
         if(err)
             console.log(err);
             else
             {
             console.log("Data successfully inserted");
             return res.json({ "inserted": true });
             }
            })
        })

  //     var form = req.body;)
// app.get("/register", function (req, res) {
//     var form = req.body;
//     console.log(req.body)
//     regiforms.create(form,function(err,data){
  
//      if(err)
// 		 console.log(err);
// 	 else
// 		 console.log("Data successfully inserted");
// })
// return true;
// })
app.post("/drivertask", function (req, res) {

    var form = req.body;
    console.log(req.body)

    assign.create(form,function(err,data){
   
     if(err)
         console.log(err);
         else
         {
		 console.log("Data successfully inserted");
         return res.json({ "inserted": true });
         }
        })
    })


app.listen(process.env.PORT ||3000, () => {
    console.log("server running on 3000")
});
