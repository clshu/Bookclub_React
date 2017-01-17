'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rating = sequelize.define('Rating', {
    stars: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    ratedon: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Rating.belongsTo(models.Book);
        Rating.belongsTo(models.Member);
      }
    }
  });
  return Rating;
};