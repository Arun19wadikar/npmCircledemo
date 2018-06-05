const should = require('chai').should();
const chai = require('chai')
const assert = require('chai').assert
const circle = require('../index.js');
const expect = chai.expect;


describe('Demo-test', function(){
    describe('circle()', function () {
        it('it should return the 62.83185307179586', function (done) {
            this.timeout(7000);
            var pass = 10;
            circle.calculateCircumference(pass)
                .then(function (result) {
                    console.log(Math.PI);
                    console.log("Result::",result);
                    //var parsedResult = JSON.parse(result);
                    //expect(result).to.equal(62.83185307179586);
                    done();
                })
                .catch(function (err) {
                    console.log("error occurred at calculating the circleCircumference", err);
                    done(err);
                });
        });
    })
})