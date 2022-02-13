const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const db = require("./models/index")
const userRouter = require("./controllers/user")
require("dotenv").config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("build"))
app.use(morgan("tiny"))
app.use("/api/user", userRouter)

// function to test the connection to the database
async function connectPostgres(db) {
  try {
    await db.sequelize.authenticate()
    console.log(
      "Connection to Postgres database has been established successfully!"
    )
  } catch (error) {
    console.log("Unable to connect to Postgres database: ", error)
  }
}

connectPostgres(db)

if (process.env.NODE_ENV === "development") {
  db.sequelize.sync().then(() => {
    console.log("Development environment: Sync to database")
  })
} else if (process.env.NODE_ENV === "production") {
  db.sequelize.sync().then(() => {
    console.log("Production environment: Sync to database")
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
