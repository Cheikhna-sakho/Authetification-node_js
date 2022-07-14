const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
global._basedir = __dirname;
const port = "1212";

//router
const userRoot = require(__dirname + '/routes/user');
const authRoot = require(__dirname + '/routes/auth');

//Midlleware
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());
//ROOT

app.use("/user", userRoot);
app.use("/auth",authRoot);
// app.use("/billet", BilletRoot);
app.listen(port, console.log("vous etes bien connecter au port " + port))





