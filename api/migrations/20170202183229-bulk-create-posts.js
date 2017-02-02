'use strict';
var fs = require('fs');
var path = require('path');
var models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    // convert callback into a promise
    var p = new Promise(function(resolve,reject){

        // read the csv file
        fs.readFile(path.join(__dirname,'..','seeders','posts.csv'),'utf8',function(err,contents){
              if(err){
                reject(err);
              }else{
           
                // convert csv file contents to array of objects
                  var postsArr = contents.trim().split("\n")  // converts it into array of lines

                              // converts each line into array of columns values
                              .map(function(line){
                                return line.replace(/\\/,"").split('+');
                              })

                              // converts each line from an array to an object and returns an array of objects
                              .reduce(function(posts,row){
                                posts = posts || [];
                                posts.push({
                                  content: row[0],
                                  postedon:row[1],
                                  MemberId:row[2]
                                  
                                })
                                return posts;
                              },[])
                
                // resolve the data we need              
                 resolve(postsArr);
              }
      })
 })    

  
  // return the promise
   return p.then(function(data){
      return models.Post.bulkCreate(data,{ individualHooks: true });
   })

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return models.Post.destroy({where:{id:{$lte:4}}});
  }
};
