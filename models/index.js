'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//load models
db.users = require('./User.js')(sequelize, Sequelize);
db.products = require('./Product.js')(sequelize, Sequelize);
db.categories = require('./Category.js')(sequelize, Sequelize);
db.orders = require('./Order.js')(sequelize, Sequelize);
db.order_details = require('./order_detail.js')(sequelize, Sequelize);
db.notifications = require('./Notification.js')(sequelize, Sequelize);
db.banks = require('./Bank.js')(sequelize, Sequelize);
db.roles = require('./Role.js')(sequelize, Sequelize);
db.order_statuses = require('./order_status.js')(sequelize, Sequelize);
db.questions = require('./Question.js')(sequelize, Sequelize);
db.carts = require('./Cart.js')(sequelize, Sequelize);
db.notifications = require('./Notification.js')(sequelize, Sequelize);
db.deliveries = require('./Delivery.js')(sequelize, Sequelize);


//call associate function
db.users.associate(db)
db.products.associate(db)
db.categories.associate(db)
db.orders.associate(db)
db.order_details.associate(db)
db.notifications.associate(db)
db.banks.associate(db)
db.roles.associate(db)
db.order_statuses.associate(db)
db.questions.associate(db)
db.carts.associate(db)
db.notifications.associate(db)
db.deliveries.associate(db)

module.exports = db;