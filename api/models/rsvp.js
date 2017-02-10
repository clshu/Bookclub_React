'use strict';

module.exports = function(sequelize, DataTypes) {
  var Rsvp = sequelize.define('Rsvp', {
    response: { type: DataTypes.INTEGER, defaultValue: 0},
    rsvpon: { type: DataTypes.DATE, defaultValue: sequelize.NOW }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Rsvp.belongsTo(models.Event);
        Rsvp.belongsTo(models.Member);
      }
    }
  });
  return Rsvp;
};
