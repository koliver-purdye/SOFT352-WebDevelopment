var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/Users'


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layouts/layout', { title: 'Express' });
});

/* Get other pages */
router.get('/index', function(req, res, next) {
    res.render('index', {header: 'Welcome to the JavaScript Learning Webiste'});
    console.log('This is the index page');
});

router.post('/AddUser', function(req,res,next) {
    console.log(req.body);
    var userItem = req.body
    mongo.connect(url, function(err, client){
        assert.equal(null, err);
        var db = client.db('Users')
        db.collection('UserID').insertOne(userItem, function(err, db){
            assert.equal(null, err);
            console.log('Item Inserted');
            db.disconnect
        })

    })
    res.redirect('/index')
})

router.get('/signIn',function(req,res,next){
    console.log('I arrived here');
    var result = "";
    var Password = req.body.Password;
    var Username = req.body.Username;
    console.log(req.body);
    mongo.connect(url, function(err, client){
        var db = client.db('Users')
        var cursor = db.collection('UserID').find({ Password : Password},{ Username: Username});
        if (cursor.count() == 0){
        cursor.forEach(function(doc) {
            result.push(doc);
            db.close();
        }, function () {
           res.render('index', result);
        })}
        else{
            res.render('index', result);


        };
        });
    });




router.get('/login', function(req,res,next){

})

router.get('/Basic', function(req, res, next) {
    res.render('Basic',{header: 'This is the Basic JavaScript Learning Section'});

});

router.get('/BasicQuiz', function(req, res, next) {
    res.render('Basic',{header: 'This is the Basic JavaScript Learning Section'});
    res.valueOf
    console.log('This was requested from button')

});

router.get('/Intermediate', function(req, res, next) {
    res.render('Intermediate',{header: 'This is the Intermediate JavaScript Learning Section'});

});

router.get('/IntermediateQuiz', function(req, res, next) {
    res.render('Intermediate',{header: 'This is the Intermediate JavaScript Learning Section'});

});


router.get('/AdvancedQuiz', function(req, res, next) {
    res.render('Advanced',{header: 'This is the Advanced JavaScript Learning Section'});

});

router.get('/Advanced', function(req, res, next) {
    res.render('Advanced',{header: 'This is the Advanced JavaScript Learning Section'});

});

router.get('/ProfileQuiz', function(req, res, next) {
    res.render('Profile',{header: 'This is your profile'});

});

router.get('/Profile', function(req, res, next) {
    res.render('Profile',{header: 'This is your profile'});

});


module.exports = router;
