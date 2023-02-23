const express = require("express");

const app = express();
var mysql = require('mysql');
const request = require('request');

const router = express.Router();


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'EasyFinance'
});

// module.exports = router;
router.use((req, res, next)=>{

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    console.log("Headers applied");
    // connection.connect();
    // connection.query('select * from Users', function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('The solution is: ', results);
    //   });
    next();
    // connection.end();
});

// ******** DATA ENTRY ************

// CREATE AN Account
router.get((req, res, next)=>{
  var queryData = req.query;
  var name = queryData.name;
  var email = queryData.email;
  var password = queryData.password;
  var dob = queryData.dob;
  var avatar = queryData.avatar;

  connection.connect();
  connection.query('INSERT INTO Users(name, email, password, dob, avatar) VALUES (?,?,?,?,?)', [name, email, password, dob, avatar], function (error, results, fields) {
      if (error) throw error;
      console.log('Account created ');
    });
  // next();
  connection.end();
});

 // create a goal & save the details to the DB
router.get((req, res, next)=>{
  var queryData = req.query;
  var gname = queryData.name;
  var amount = queryData.name;
  var time = queryData.name;
  var priority = queryData.name;
  var plan = queryData.name;
  var actionRequired = queryData.name;

  connection.connect();
  connection.query('INSERT INTO Goals(name, amount, time, priority, plan, actionRequired, created_dt) VALUES (?,?,?,?,?,?,NOW())', [gname, amount, time, priority, plan, actionRequired], function (error, results, fields) {
      if (error) throw error;
      console.log('Goal created');
    });
  // next();
  connection.end();
});


// create an income & save to DB
router.get((req, res, next)=>{
  var queryData = req.query;
  var iname = queryData.name;
  var amount = queryData.name;
  

  connection.connect();
  connection.query('INSERT INTO Incomes(name, amount, uid) VALUES (?,?,?)', [iname, amount, uid], function (error, results, fields) {
      if (error) throw error;
      console.log('Income saved');
    });
  // next();
  connection.end();
});

// create an investment & save to DB

// create an expense along with category & save it to the DB

// DATA ENTRY ENDS

// ********* DATA RETRIEVAL ***************

// Retreive a list of goals and their progress for a user

// Retrieve a list of expenses





module.exports = router;