const express = require("express");
const app = express();

const studentRouter = require("../api/students/router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/student", studentRouter);

module.exports = app;
