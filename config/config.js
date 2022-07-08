const dotenv = require('dotenv');

// Load env
dotenv.config();

module.exports = {
  development: {
<<<<<<< HEAD
    username: "perdly",
=======
    username: "latif_project_fsw",
>>>>>>> e33f12e737032d49494a22c6ff0e7fd660ead171
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