const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const posts = require("./routes/api/posts");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
require("dotenv").config();

const port = 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost/dev-connector")
  .then(() => console.log("MongoDB Connected!!!"))
  .catch(err => console.log(err));

//Passport Middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profiles);
app.use("/api/posts", posts);

// Server static assets if in Production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/", (req, res) => res.send("Hello World!!!"));

app.listen(port, () => console.log(`Server is running on port ${port}!!!`));
