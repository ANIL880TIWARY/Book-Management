const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const multer = require("multer")
const port = process.env.PORT || 3000
const mongoString ="mongodb+srv://anil88:ghkHXqTEPEofBujh@cluster0.syc39.mongodb.net/bookManagement?retryWrites=true&w=majority"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())
mongoose.connect(mongoString, {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);


app.listen(port, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
