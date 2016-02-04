var express = require('express');
var router = express.Router();
var connection = require('../database');


// Get HomePage
router.get('/', function(req, res) {
    connection.query('select * from person',function(err,rows,fields){
        if(err)
            console.log(err);
        else{
            res.render('index',{title: 'chimp', data: rows});
        }
    });
});

// Post a person to the database
router.post('/',function(req,res){
    connection.query('insert into person (firstname,lastname,email) values (?,?,?)',[req.body.firstname,req.body.lastname,req.body.email],function(error,results,fields){
        if(error)
            console.log(error);
        else
            res.redirect('/');
    });
});

// Deletes person from database
router.get('/delete/:id',function(req,res){
    connection.query('delete from person where id = ?',[req.params.id],function(error,results,fields){
        console.log('id is ' + req.params.id);
        if(error)
            res.send('Unable to delete');
        else
            res.redirect('/');
    });
});

// Update a Person to the database
router.get('/edit/:id',function(req,res){
    connection.query('select * from person where id = ?',req.params.id,function(error,results,fields){
        if(error)
            console.log(error);
        else{
            res.render('edit',{data: results});
        }
    });
});

router.post('/edit/:id',function(req,res){
    connection.query('update person set firstname = ? , lastname = ? , email = ? where id = ?',[req.body.firstname,req.body.lastname,req.body.email,req.params.id], function(error,results,fields){
        if(error)
            console.log(error);
        else{
            res.redirect('/');
        }
    });
});


module.exports = router;
