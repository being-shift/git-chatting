const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const app = express();
app.use(cors());

mongoose.connect(process.env.DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => console.log(new Date(), "connected to database"));

const db = mongoose.connection;
db.on('error', console.error.bind(console, new Date() + 'connection error'));
db.once('open', ()=>{ console.log(new Date(), 'mongo db connection OK'); });

module.exports = app;