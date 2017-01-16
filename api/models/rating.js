'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rating = sequelize.define('Rating', {
    stars: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    ratedon: DataTypes.DATE,
    bookId: DataTypes.INTEGER,
    memberId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Rating.belongsTo(models.Book);
      }
    }
  });
  return Rating;
};