const express = require ('express');
const bodyParser = require ('body-parser');
const massive = require ('massive');
require ('dotenv').config()
const ctrl = require ('./ctrl')
const app = express();

app.use(bodyParser.json());


app.listen(3443, console.log("Arrgh, ye be at port 3443"));