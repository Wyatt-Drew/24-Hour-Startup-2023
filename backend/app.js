const express = require("express");

const app = express();

const appRoutes = require("./routes/route");

app.use(appRoutes);

module.exports = app;