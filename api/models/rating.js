'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rating = sequelize.define('Rating', {
    ratingsid: DataTypes.STRING,
    stars: DataTypes.NUMBER,
    comment: DataTypes.STRING,
    ratedon: DataTypes.DATE,
    bookid: DataTypes.STRING,
    memberid: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rating;
};