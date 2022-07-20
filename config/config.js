const dotenv = require('dotenv');

// Load env
dotenv.config();

module.exports = {
  development: {
    username: "latif_project_fsw",
    password: "root",
    database: "second_hand",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "perdly",
    password: "root",
    database: "second_hand_test",
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