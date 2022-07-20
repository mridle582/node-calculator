const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;


// Normal Calc
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);
    var result = n1 + n2;

    res.send("The result of the calculation is: " + result);
});


// BMI Calc
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(Math.pow(height, 2));

    res.send("Caluclated BMI: " + bmi);
})

app.listen(port, function() {
    console.log(`My Calculator is listening on port ${port}`);
});
