'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Rsvps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rsvpid: {
        type: Sequelize.STRING
      },
      response: {
        type: Sequelize.STRING
      },
      rsvpon: {
        type: Sequelize.DATE
      },
      eventid: {
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
    return queryInterface.dropTable('Rsvps');
  }
};