// Dependencies Required 
// const express = require("express");
// const router = express.Router();

// var path = require("path");
// Import model to use its databse functions
var db = require("../models");
<<<<<<< HEAD

// var Sequelize = require("Sequelize");
=======
var Sequelize = require("Sequelize");
var express = require("express");
>>>>>>> 260c2b5cd8ff4229e78b0008170264dbe310204c

module.exports = function(app) {


// * Get all teams
    app.get("/", function(req, res){
        db.teams.findAll({
            // attributes: ['team_name']
        })
        .then(function(data) {  
            var teamsObject = {
                teams: data
            };
            // console.log('teamsObject', teamsObject);
            // eventually render this info
            res.render("gameover", teamsObject);
        });
    });

// // * Get selected team data
//     app.get("/team", function(req, res){
//         db.team.findOne
//     })



// * Get all user data
    app.get("/user", function(req, res){
        db.user.findAll({})
        .then(function(dbUser) {  
            res.json(dbUser);
        });
    });


    // * Get top 10 scores 
    app.get("/leaderboard", function(req, res){
        // a leraderboard of all the high scores
        db.user.findAll({ limit: 10,
           order: [
               ['points', 'DESC'],
        ],      
        })
        .then(function(dbUser) {  
            res.json(dbUser);
    });

});
    // * Post new User to user table
    app.post("/api/users", function(req, res){
        console.log(req.body);
        db.user.create({
            username: req.body.username,
            // ? Will we post after user has played and their score has been calculated?
            points: req.body.points
        })
        .then(function(dbPost) { 
            // res.json(dbPost);
            // redirect to leaderboard
            res.redirect("/leaderboard");
        });
    });
    
    // app.post("/api/teams", function(req, res){
    //     //response
    // })
    
    // app.put("/api/teams/:id", function(req, res){
    //     //response
    // })
    

    
    // app.get("/game", function(req, res){
    //     // the actual functionality of the app
    // })
    
    // app.get("/profile", function(req, res){
        // generated user profiles after logging in
        // will have some statistics
    // })
    
    

};

