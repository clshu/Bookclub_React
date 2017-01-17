'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    dt: DataTypes.DATE,
    notes: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Event.belongsTo(models.Member);
        Event.hasOne(models.Book);
        Event.hasMany(models.Rsvp);
      }
    }
  });
  return Event;
};