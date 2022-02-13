const Sequalize = require("sequelize")
const dbconfig = require("../config/db.config")[
  process.env.NODE_ENV || "development"
]

const sequalize = new Sequalize(dbconfig.postgres.options)

const db = {
  Sequalize: Sequalize,
  sequelize: sequalize,
  users: require("./user.js")(sequalize),
}

module.exports = db
