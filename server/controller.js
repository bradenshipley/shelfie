const axios = require("axios")

const getInventory = (req, res, next) => {
  const db = req.app.get("db")
  db.get_inventory()
    .then(inventory => {
      // console.log(inventory)

      res.status(200).send(inventory)
    })
    .catch(err => {
      console.log("err")
      res.status(500).send(err)
    })
}

const addProduct = (req, res) => {
  const db = req.app.get("db")
  // console.log(req.body)

  db.create_product([req.body.name, req.body.price, req.body.imgurl])
    .then(response => {
      // console.log(response)
      db.get_inventory().then(() => {
        res.status(200).send(response)
      })
    })
    .catch(err => console.log(err))
}
const deleteProduct = (req, res) => {
  const db = req.app.get("db")
  console.log(req.body)
  db.delete_product([req.params.id])
    .then(response => {
      // console.log(response)
      db.get_inventory().then(() => {
        res.status(200).send(response)
      })
    })
    .catch(err => console.log(err))
}
const updateProduct = (req, res, next) => {
  const db = req.app.get("db")
  console.log(req.body)
  db.update_product([
    req.params.id,
    req.body.name,
    req.body.price,
    req.body.imgur
  ])
    .then(response => {
      db.get_inventory().then(() => {
        res.status(200).send(response)
      })
    })
    .catch(err => console.log(err))
}

module.exports = {
  getInventory,
  addProduct,
  deleteProduct,
  updateProduct
}
