const express = require("express");
const bodyParser = require("body-parser");
const constants = require("./constants/serverConstants.json");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./routes/tasks"));

app.listen(constants.port, () => {
    console.log("Its done");
});
