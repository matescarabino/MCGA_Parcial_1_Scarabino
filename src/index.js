const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const routes = require('./routes/Products');

dotenv.config();
// Middleware Json
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen({ port: process.env.PORT }, () => {
      console.log(`🚗 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });

app.use('/',routes);


