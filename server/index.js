require("dotenv").config()
//our .env is invoked immediately with a config function, that's why its at the top
const cors = require("cors")
const express = require("express")
const { json } = require("body-parser")
const massive = require("massive")
const controller = require("./controller")
const app = express()
app.use(cors())
app.use(json())

//adding ?ssl=true to the end of the urltells massive to make the connection. the url is held in our .env file, which is included in our .env file. process.env.NAMEOFURLVARIABLE is the syntax
//since we have a request, we have a response using a .then()
massive(process.env.CONNECTION_STRING)
  .then(db => {
    //we are going to set a variable called 'db' and when we access it we want to use the db object that we got as a response
    app.set("db", db)
    console.log("database connected")
  })
  .catch(err => {
    err, console.log("could not connect db")
  })

app.get("/api/inventory", controller.getInventory)
app.post("/api/product", controller.addProduct)

const port = process.env.PORT || 3001
app.listen(3001, () => console.log(`listening on ${port}`))
