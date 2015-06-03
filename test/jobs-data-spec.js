var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require("../models/Job");
var Promise = require("bluebird");
var jobsData = require("../jobs-data.js");


function resetJobs() {
    return new Promise(function(resolve, reject) {
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    });
}


describe("get job", function() {
    
    var jobs;

    before(function(done) {
     jobsData.connectDB('mongodb://localhost/jobfinder')
            .then(resetJobs())
            .then(jobsData.seedJobs) //gov
            .then(jobsData.findJobs)
            .then(function(collection) {
                jobs=collection;
                done();
            });
});
    
    it("should never be empty since job are seeded", function() {
             expect(jobs.length).to.be.at.least(1);
    });
    
    it("should have a job with title", function() {
             expect(jobs[0].title).to.be.not.empty;
             
    });
    
    it("should have a job with description", function() {
            expect(jobs[0].description).to.be.not.empty;
    });
    
});
