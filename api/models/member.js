const bcrypt = require('bcrypt-nodejs');

'use strict';

function hashPassword(member, options, callback) {
  const SALT_FACTOR = 10;
  bcrypt.genSalt(SALT_FACTOR, function(err, salt){
        if (err) { return callback(err); }
        // hash (encrypt) our password using the salt
        bcrypt.hash(member.password, salt, null, function(err, hash) {
          if (err) { return callback(err); }
           // overwrite plain password with encrypted password
          member.password = hash;
          return callback(null, options);
        });
  })
}

module.exports = function(sequelize, DataTypes) {
  var Member = sequelize.define('Member', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING,
    favbook1: DataTypes.STRING,
    favbook2: DataTypes.STRING,
    favbook3: DataTypes.STRING,
    aboutme: DataTypes.STRING,
    joindt: DataTypes.DATE,
    piclink: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        Member.hasMany(models.Event);
        Member.hasMany(models.Post);
        Member.hasMany(models.Rsvp);
        Member.hasMany(models.Rating);
    
      }
    },
    hooks: {
      beforeCreate: hashPassword
    },
    instanceMethods: {
      comparePassword: function(plainPassword, callback) {
        bcrypt.compare(plainPassword, this.password, function(err, isMatched) {
            if (err) { return callback(err); }
            return callback(null, isMatched);
        });
      }
    }

  })

  return Member;
};
