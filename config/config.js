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
    username: "catcoder",
    password: "beanstaroast",
    database: "second_hand",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: `${process.env.DBUSERNAME}`,
    password: `${process.env.DBPASSWORD}`,
    database: `${process.env.DBNAME}`,
    host: `${process.env.DBHOST}`,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};