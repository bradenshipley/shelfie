const axios = require("axios")

const getInventory = (req, res, next) => {
  const db = req.app.get("db")
  db.get_inventory()
    .then(inventory => {
      console.log(inventory)

      res.status(200).send(inventory)
    })
    .catch(err => {
      console.log("err")
      res.status(500).send(err)
    })
}

const addProduct = (req, res) => {
  req.app
    .get("db")
    .create_product(req.body.name, req.body.price, req.body.imgURL)
    .then(response => {
      db.getInventory().then(inventory => {
        res.status(200)
      })
    })
    .catch(err => err, "could not create")
}
module.exports = {
  getInventory,
  addProduct
}
