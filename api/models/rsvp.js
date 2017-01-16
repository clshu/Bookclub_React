'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rsvp = sequelize.define('Rsvp', {
    response: DataTypes.STRING,
    rsvpon: DataTypes.DATE,
    eventId: DataTypes.INTEGER,
    memberId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Rsvp.belongsTo(models.Event);
      }
    }
  });
  return Rsvp;
};