const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');

const config = require('./config/database');

mongoose.Promise = global.Promise;

mongoose.connect(config.uri, (err)=> {
    if(err) {
        console.log('Could not connect to DB: ', err )
    } else {
        console.log(config.secret);
        console.log('Succesfully connected to DB: ', config.database);
    }
});

app.use(express.static(__dirname + '/client/dist/client/'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'))
});

app.listen(3000, () => {;
console.log('Listening on port 3000');
})