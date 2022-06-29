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
    username: "xvsmnhkfxjnxmx",
    password: "d05845c8e142cde4be2e8f771669a37f119d191bce0984f02ae7cbb9ac8ca8ae",
    database: "d59q4js1ncnq1s",
    host: "ec2-44-206-11-200.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
