'use strict';
var fs = require('fs');
var path = require('path');
var models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    // convert callback into a promise
    var p = new Promise(function(resolve,reject){

        // read the csv file
        fs.readFile(path.join(__dirname,'..','seeders','members.csv'),'utf8',function(err,contents){
              if(err){
                reject(err);
              }else{
           
                // convert csv file contents to array of objects
                  var membersArr = contents.trim().split("\n")  // converts it into array of lines

                              // converts each line into array of columns values
                              .map(function(line){
                                return line.replace(/\\/,"").split('+');
                              })

                              // converts each line from an array to an object and returns an array of objects
                              .reduce(function(members,row){
                                members = members || [];
                                members.push({
                                  fname: row[0],
                                  lname:row[1],
                                  address1:row[2],
                                  city:row[3],
                                  state:row[4],
                                  zip:row[5],
                                  mobile:row[6],
                                  email:row[7],
                                  favbook1:row[8],
                                  favbook2:row[9],
                                  favbook3:row[10],
                                  aboutme:row[11],
                                  piclink:row[12],
                                  password:row[13],
                                  joindt:row[14]
                                  
                                })
                                return members;
                              },[])
                
                // resolve the data we need              
                 resolve(membersArr);
              }
      })
 })    

  
  // return the promise
   return p.then(function(data){
      return models.Member.bulkCreate(data,{ individualHooks: true });
   })

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return models.Member.destroy({where:{id:{$lte:4}}});
  }
};
