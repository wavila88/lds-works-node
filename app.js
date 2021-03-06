const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const { API_VERSION } = require("./config");

//Conecting to db
//mongoose.connect('mongodb://Localhost/lds_work')
mongoose.connect('mongodb+srv://root:1234@lds-work-dmkcf.mongodb.net/lds-work?retryWrites=true&w=majority')
.then(db => console.log("DB Conectado"))
.catch(err => console.log("Error conectando", err))

// Load routings
const messageRoutes = require("./routers/routes");

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// Configure Header HTTP
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Router Basic
app.use(`/api/${API_VERSION}`, messageRoutes);

module.exports = app;
