const express = require("express");
const dotenv = require('dotenv');
const utilRouter = require("./router/util");

const app = express();
app.use(express.json());

// Routing the incoming web traffic
app.use("/", utilRouter);
require('dotenv').config({path: __dirname + '/.env'});

// Assign the port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}.`));

module.exports = app;