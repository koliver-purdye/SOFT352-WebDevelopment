const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello World!'))



app.listen(port, () => console.log("Example app listening on port ${port}!"))

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

