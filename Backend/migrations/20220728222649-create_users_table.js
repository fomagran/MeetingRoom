"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: Sequelize.STRING(35),
      password: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("Users");
  },
};
