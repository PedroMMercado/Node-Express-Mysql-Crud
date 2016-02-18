var express = require('express');
var router = express.Router();
var connection = require('../database.js');

// get
router.get('/', function (req,res) {
    connection.query('select * from person',function(err,rows,fields){
        if(err)
            console.log(err);
        else{
            res.json(rows);
        }
    });
});

// post
router.post('/',function(req,res){
    connection.query('insert into person (firstname,lastname,email) values (?,?,?)',[req.body.firstname,req.body.lastname,req.body.email], function(error,results,fields){
        if(error)
            console.log(error);
        else{
            connection.query('select * from person',function(err,rows,fields){
                if(err)
                    console.log(err);
                else{
                    res.json(rows);
                }
            });
        }
    });
});

// edit
router.put('/update/:id',function(req,res){
    connection.query('update person set firstname = ? , lastname = ? , email = ? where id = ?',[req.body.firstname,req.body.lastname,req.body.email,req.params.id], function(error,results,fields){
        if(error)
            console.log(error);
        else{
            connection.query('select * from person',function(err,rows,fields){
                if(err)
                    console.log(err);
                else{
                    res.json(rows);
                }
            });
        }
    });
});

// delete
router.delete('/delete/:id',function(req,res){
    connection.query('delete from person where id = ?',[req.params.id],function(error,results,fields){
        if(error)
            res.send('Unable to delete');
        else{
            connection.query('select * from person',function(err,rows,fields){
                if(err)
                    console.log(err);
                else{
                    res.json(rows);
                }
            });
        }
    });
});

module.exports = router;