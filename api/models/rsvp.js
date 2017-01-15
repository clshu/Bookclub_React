'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rsvp = sequelize.define('Rsvp', {
    rsvpid: DataTypes.STRING,
    response: DataTypes.STRING,
    rsvpon: DataTypes.DATE,
    eventid: DataTypes.STRING,
    memberid: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rsvp;
};