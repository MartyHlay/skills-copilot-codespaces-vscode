// Create web server
// 1. Use the express module
// 2. Create an express app
// 3. Create a route handler
// 4. Listen on a port

// 1. Use the express module
const express = require("express");
const { check, validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const assert = require("assert");
const { ObjectId } = require("mongodb");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const nodemailer = require("nodemailer");
const { response } = require("express");
const { send } = require("process");
const bcrypt = require("bcrypt");
const { request } = require("http");
const { resourceUsage } = require("process");
const { json } = require("body-parser");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { Router } = require("express");
const { Console } = require("console");
const { stringify } = require("querystring");
const { urlencoded } = require("body-parser");
const { sendMail } = require("./sendMail");
const { sendConfirmation } = require("./sendConfirmation");
const { sendReset } = require("./sendReset");
const { sendConfirmationReset } = require("./sendConfirmationReset");
const { sendConfirmationDelete } = require("./sendConfirmationDelete");

// 2. Create an express app
const app = express();
dotenv.config();

// 3. Create a route handler
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// MongoDB
const url = process.env.MONGO_URI;
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbName = "comments";
const collectionName = "comments";

// Connect to MongoDB
client.connect((err) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
