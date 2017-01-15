'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    postid: DataTypes.STRING,
    comment: DataTypes.STRING,
    postedon: DataTypes.DATE,
    memberid: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Post;
};