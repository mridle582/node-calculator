const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


const port = 3000;


app.get('/', function(req, res){
    // res.send('Hello World');
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    console.log(req.body);
    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);
    var result = n1 + n2;

    res.send("The result of the calculation is: " + result);
});

app.listen(port, function() {
    console.log(`My Calculator is listening on port ${port}`);
});
