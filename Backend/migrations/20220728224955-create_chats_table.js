"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("Chats", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: Sequelize.STRING(35),
      content: Sequelize.STRING(300),
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("Chats");
  },
};
