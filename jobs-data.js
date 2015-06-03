var mongoose = require("mongoose");
var Promise = require("bluebird");


var Job = mongoose.model('Job');


var findJobs = function(query) {
    return Promise.cast(mongoose.model('Job').find(query).exec());
};

exports.findJobs = findJobs;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

var createJobs = Promise.promisify(Job.create, Job);

exports.seedJobs = function() {
  return findJobs({}).then(function(collection) {
        if (collection.length === 0) {
           return Promise.map(jobs,function(job) {
               return createJobs(job);
           });
        }
    });
};

 ///exports.seedJobs = seedJobs();

var jobs = [{
    title: 'Cook',
    description: 'You will be making bagels'
}, {
    title: "Wlapa big",
    description: "Take your place on the head"
}, {
    title: "Killer",
    description: "Kill some one"
}];
