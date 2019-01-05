var http = require('http')
const express = require('express')
const app = express()
const port = 8080
var   path = "/"
var buttonEvents = require('./buttonEvents')
var route = require('./routeAPP')

function onRequest(req,res){
    res.writeHead(200, {'content-type': 'text/plain'})
    res.write('Hello World')
    buttonEvents.requestBasicQuestions();
    res.end()
}

http.createServer(route.handleRequest).listen(8080)




//app.listen(port, () => console.log("Example app listening on port ${port}!"))

var MongoClient = require('mongodb').MongoClient
var MongoDB = require('mongodb')




MongoClient.connect('mongodb://localhost:27017',function (err, client)
{
    if (err) throw (err)

    console.log("DB Connection Successful")
    var db = client.db('Users')
    db.collection('UserID').find(function (err, result) {
        if (err) throw err

        console.log(result)
        
    })

})

