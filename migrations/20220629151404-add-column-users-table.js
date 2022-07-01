'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'user_province', {
      allowNull: true,
      type: Sequelize.STRING(50),
      after: 'user_password',
    });

    await queryInterface.renameColumn('Users', 'user_city', 'user_regency');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'user_province');
  }
};