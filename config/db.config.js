require("dotenv").config()

module.exports = {
  development: {
    postgres: {
      options: {
        host: "localhost",
        port: 5432,
        database: "dev",
        dialect: "postgres",
        username: "postgres",
        password: "admin",
      },
      client: null,
    },
  },
  test: {
    postgres: {
      options: {
        host: "localhost",
        port: 5432,
        database: "test",
        dialect: "postgres",
        username: "postgres",
        password: "admin",
      },
      client: null,
    },
  },
  production: {
    postgres: {
      options: {
        host: "localhost",
        port: 5432,
        database: "production",
        dialect: "postgres",
        username: "postgres",
        password: "admin",
      },
      client: null,
    },
  },
}
