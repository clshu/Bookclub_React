'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    eventid: DataTypes.STRING,
    eventdt: DataTypes.DATE,
    eventtime: DataTypes.STRING,
    hostid: DataTypes.STRING,
    bookid: DataTypes.STRING,
    eventnotes: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Event;
};