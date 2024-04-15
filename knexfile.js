// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://postgres:docker@127.0.0.1:5432/food_table"
  },

  localhost: {
    client: "postgresql",
    connection: "postgres://postgres:docker@db:5432/food_table"

  },

  // development: {
  //   client: 'pg',
  //   connection: 'postgres://postgres:docker@localhost/space_database'
  //   // replace USER_NAME, USER_PASSWORD, and DATABASE_NAME with your Docker PostgreSQL container's username, password and an *empty* database
  //   // that you have created on your Docker PostgreSQL container volume
  // },

  staging: {
    client: "postgresql",
    connection: {
      database: "food_type",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "food_type",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};