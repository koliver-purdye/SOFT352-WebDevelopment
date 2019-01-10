var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/Users'


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index',{header: 'Welcome to the sign in page'});

});

/* Get other pages */


router.post('/AddUser', function(req,res,next) {
    /*Check validity -- This section did not work and caused errors
    req.check('Password', 'Password is invalid').isLength({min: 4})
    var errors = req.validationErrors();
    if (errors)
    {
        req.session.errors= errors;
        req.session.success= false;
        res.render('Index');
        alert('This is not a valid profile to create');
    }
    /*---------------*/
        console.log(req);
        var userItem = req.body;
        mongo.connect(url, function (err, client) { //Opens the Database connection
            assert.equal(null, err);
            var db = client.db('Users')
            db.collection('UserID').insertOne(userItem, function (err, db) { //Selects the collection and inserts the new user that has just entered their details
                assert.equal(null, err);
                console.log('Item Inserted');
                db.disconnect;
            })
            req.session.success= true;
            res.render('Index');
        })

    })

router.get('/showProfile',function(req,res,next) //This get request is used to get the details of the user that has just signed in.
{
    var userNameToQuery = req.body;
    console.log(userNameToQuery);
    var resultArray = [];
    mongo.connect(url, function(err, client){
        var db = client.db('Users');
        var cursor = db.collection('UserID').find({Username: userNameToQuery}); //This queries the database to find the relevant user
        cursor.forEach(function(doc){
            console.log(doc);
            resultArray.push(doc);

        },function(){
            db.disconnect;
            res.json(resultArray[0]);
        })

    })
})

router.get('/signIn',function(req,res,next){ // this request checkes if the details that have been added to sign in are attributed to a user
    console.log('I arrived here');
    var resultArray = [];
    var PasswordToQuery = req.query.Password;
    var UsernameToQuery = req.query.Username;
    console.log(PasswordToQuery, UsernameToQuery);
    mongo.connect(url, function(err, client){
        var db = client.db('Users')
        var cursor = db.collection('UserID').find({Password: PasswordToQuery},{Username: UsernameToQuery});
        cursor.forEach(function(doc) {    //For each of the documents in the cursor the value will be put on to the array
            console.log(doc);
            resultArray.push(doc);
        }, function () {
            db.disconnect;
            res.json(resultArray[0]);
        })
        if(resultArray[0] != null){
            req.session.username = req.query.Username;
            res.cookie('UserCookie', req.query.Username)
        }
        });
    });




router.get('/Index', function(req,res,next){ //this takes you to the home page/sign in page
   res.render('index',{header: 'Welcome to the sign in page'});
    /* res.render('index',{header: 'Welcome to the sign in page', success: req.session.success, errors: req.session.errors});
    req.session.errors = null; */
})

//Basic request handlers -------------------------------

router.get('/Basic', function(req, res, next) { //This renders the Basic learning page
    res.render('Basic',{header: 'This is the Basic JavaScript Learning Section'});
});

router.get('/BasicQuiz', function(req, res, next) { //This renders the Basic Quiz page


    //res.render('BasicQuiz',{header: 'Basic Quiz'});
    res.render('BasicQuiz',{header: 'Basic Quiz'});
});

router.get('/BasicQuestion',function(req, res, next){
    //code to get the basic Question set from mongo

    var resultQuestions = [];
    mongo.connect(url, function (err, client) {
        var db = client.db('Questions');
        var cursor = db.collection('BasicQuestions').find();
        cursor.forEach(function(doc){
            resultQuestions.push(doc);

        },function() {
            db.disconnect;
            res.json(resultQuestions);
        })
    })
})

//-------------------------------------------------------

//Intermediate request handlers same principles as before -------------------------

router.get('/Intermediate', function(req, res, next) {
    res.render('Intermediate',{header: 'This is the Intermediate JavaScript Learning Section'});

});

router.get('/IntermediateQuiz', function(req, res, next) {
    res.render('IntermediateQuiz',{header: 'Intermediate Quiz'});

});

router.get('/IntermediateQuestion', function(req,res,next){
    var resultQuestions = [];
    mongo.connect(url, function (err, client) {
        var db = client.db('Questions');
        var cursor = db.collection('IntermediateQuestions').find();
        cursor.forEach(function(doc){
            resultQuestions.push(doc);

        },function() {
            db.disconnect;
            res.json(resultQuestions);
        })
    })
})
//-------------------------------------------------------

//Advanced request handlers -----------------------------
router.get('/AdvancedQuiz', function(req, res, next) {
    res.render('AdvancedQuiz',{header: 'Advanced Quiz'});

});

router.get('/Advanced', function(req, res, next) {
    res.render('Advanced',{header: 'This is the Advanced JavaScript Learning Section'});

});

router.get('/AdvancedQuestions', function(req, res, next){
    var resultQuestions = [];
    mongo.connect(url, function (err, client) {
        var db = client.db('Questions');
        var cursor = db.collection('AdvancedQuestions').find();
        cursor.forEach(function(doc){
            resultQuestions.push(doc);

        },function() {
            db.disconnect;
            res.json(resultQuestions);
        })
    })
})

//-------------------------------------------------------

//Profile Handlers --------------------------------------
router.get('/Profile', function(req, res, next) {

    if(req.query.Username) {
        res.render('Profile');
        res.cookie('User',req.query);
    }
    else
    {
        res.render('Profile', {header: 'Please sign in/up to see your profile'});
    }
});

//-------------------------------------------------------

module.exports = router;
