'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ratingsid: {
        type: Sequelize.STRING
      },
      stars: {
        type: Sequelize.NUMBER
      },
      comment: {
        type: Sequelize.STRING
      },
      ratedon: {
        type: Sequelize.DATE
      },
      bookid: {
        type: Sequelize.STRING
      },
      memberid: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Ratings');
  }
};