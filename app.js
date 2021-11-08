const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
var nirmit;
var nirmitMain = "";

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing 


app.get('/', (req, res) => {
    res.render('index');
});


app.post("/", (req, res) => {
console.log(req.body);
res.send("bhattt");
nirmit = JSON.stringify(req.body) + " ";
nirmitMain = nirmitMain + nirmit;
console.log(nirmitMain);
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});
