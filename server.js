var express = require("express");
var jobModel = require("./models/Job");
var jobsData = require("./jobs-data.js");


var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public/'));

app.get('/api/jobs', function(req, res) {
 jobsData.findJobs().then(function(collection) {
        res.send(collection);
    });
});

app.get('*', function(req, res) {
    res.render('index');
});


//mongoose.connect('mongodb://localhost/jobfinder');

jobsData.connectDB('mongodb://dmitry:kt8q3d6@ds043082.mongolab.com:43082/jobfinder')
.then(function() {
    console.log("connected to mongodb successfully");
    jobModel.seedJobs;
});



app.listen(process.env.PORT, process.env.IP);