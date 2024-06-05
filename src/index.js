const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")

const templatePath = path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)

app.get("/",(req,res)=>{
  res.render("login")
})