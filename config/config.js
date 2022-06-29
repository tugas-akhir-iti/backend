const dotenv = require('dotenv');

// Load env
dotenv.config();

module.exports = {
  development: {
    username: "perdly",
    password: "root",
    database: "second_hand",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "perdly",
    password: "root",
    database: "second_hand",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
