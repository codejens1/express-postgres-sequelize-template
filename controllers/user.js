const userRouter = require("express").Router()
const db = require("../models/index")
const User = db.users
require("dotenv").config()

userRouter.post("/", async (req, res) => {
  // TODO: Validate request body

  const user = {
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  }

  try {
    const result = await User.create(user)
    res.send(result)
  } catch (error) {
    res.status(500).send(error)
  }
})

userRouter.get("/:id", async (req, res) => {
  const id = req.params.id

  try {
    const result = await User.findByPk(id)

    if (result) {
      res.send(result)
    } else {
      res.status(404).send({
        message: "Not possible to find with id: " + id,
      })
    }
  } catch (error) {
    res.status(500).send(error)
  }
})

userRouter.put("/:id", async (req, res) => {
  const id = req.params.id

  try {
    const result = await User.update(req.body, {
      where: { id: id },
    })

    if (result) {
      res.send(result)
    } else {
      res.status(404).send({
        message: "Not possible to update with id: " + id,
      })
    }
  } catch (error) {
    res.status(500).send(error)
  }
})

userRouter.delete("/:id", async (req, res) => {
  const id = req.params.id

  try {
    const result = await User.destroy({
      where: { id: id },
    })

    if (result) {
      res.send({
        message: "User deleted successfully",
      })
    } else {
      res.status(404).send({
        message: "Not possible to delete with id: " + id,
      })
    }
  } catch (error) {
    res.status(500).send(error)
  }
})

userRouter.get("/", async (req, res) => {
  try {
    const result = await User.findAll()

    if (result) {
      res.send(result)
    } else {
      res.status(404).send({
        message: "Not possible to find anything",
      })
    }
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = userRouter
