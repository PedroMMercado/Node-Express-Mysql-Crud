var express = require('express');
var router = express.Router();
var connection = require('../database.js');

// get
router.get('/', function (req,res) {
    connection.query('select * from person',function(err,rows,fields){
        if(err)
            console.log(err);
        else{
            console.log(JSON.stringify(rows));
            res.render('rest',{data:JSON.stringify(rows)});
        }
    });
});

// post
router.post('/',function(req,res){

});

// create
router.put('/',function(req,res){

});

// delete
router.delete('',function(req,res){

});

module.exports = router;