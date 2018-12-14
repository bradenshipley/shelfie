require("dotenv").config()

const cors = require("cors")
const express = require("express")
const { json } = require("body-parser")
const massive = require("massive")
const controller = require("./controller")
const app = express()
app.use(cors())
app.use(json())

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance)
  console.log("database is connected")
})

app.get("/api/inventory", controller.getInventory)
app.post("/api/product", controller.addProduct)
app.delete("/api/product/:id", controller.deleteProduct)
app.put("/api/edit/:id", controller.updateProduct)

const port = process.env.SERVERPORT || 3001
app.listen(3001, () => console.log(`listening on ${port}`))
