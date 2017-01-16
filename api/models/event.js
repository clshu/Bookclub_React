'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    eventdt: DataTypes.DATE,
    eventtime: DataTypes.STRING,
    eventnotes: DataTypes.STRING,
    memberId: DataTypes.INTEGER
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