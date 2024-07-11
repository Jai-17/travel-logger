const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const placesRoutes = require("./routes/places-routes");
const HttpError = require("./controllers/places-controllers");
const userRoutes = require("./routes/users-routes");
const app = express();

require('dotenv').config();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes); // => /api/places...
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.uxfclu9.mongodb.net/places?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
