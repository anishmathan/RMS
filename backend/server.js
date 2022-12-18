const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");

// MongoDB
mongoose
  .connect("mongodb://localhost:27017/RMS", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    

  })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));
  mongoose.set('strictQuery', false);


const app = express();
const port = 4000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Setting up middlewares
app.use(cors());
app.use(express.json());

// Routing
app.use("/", require("./routes/apiRoutes"));


app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
