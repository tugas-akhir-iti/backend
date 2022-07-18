const db = require("../models");
const Categories = db.categories;

async function findAll(req, res) {
  const categories = await Categories.findAll();
  res.send({
    data: categories,
  });
}

module.exports = {
  findAll,
};
