const express = require('express');
const logger = require('morgan')
const bodyParser = require('body-parser')
const http = require('http');



const app = express();
app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var models = require('./models')
models.sequelize.sync()
    .then(() => {
        console.log("Database works  fine");
    })
    .catch(error => console.log(error))
require('./routes')(app);


console.log("testing");
app.get('*', (req, res) => {

    res.json({ test: "hello world" })
})

app.listen(3000, () => { console.log('server is running'); })