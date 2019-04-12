require("dotenv").config();

let express = require("express");
let layouts = require("express-ejs-layouts");
let app = express();

let router = express.Router();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("home hit");
  res.render("site/home");
});

app.get("/about", (req,res) => {
  console.log("about hit");
  res.render("site/about")
});

app.listen(process.env.PORT || 3006, () => {
  console.log(`listening on ${process.env.PORT || 3006}`);
});
