const dotenv = require('dotenv');

// Load env
dotenv.config();

module.exports = {
  development: {
    username: "jaenulatif",
    password: "root",
    database: "rumah-tani-local",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "jaenulatif",
    password: "root",
    database: "rumah-tani-local-test",
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