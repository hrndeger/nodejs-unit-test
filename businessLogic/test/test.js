'use strict';


var chai = require('chai'),
    expect = chai.expect;


chai.should();

describe('number tests', function () {

    function isEven(num) {
        return num % 2 === 0;
    }

    describe('isEven', function () {
        it('should return true when number is even', function () {
            isEven(4).should.be.true
        });

        it('should return false when number is odd', function () {
            isEven(5).should.be.false
        });
    })

    function add(num1, num2) {
        return num1 + num2;
    }

    describe('add without setup/teardown', function () {

        var num;

        beforeEach(function () {
            num = 5;
        });

        afterEach(function () {

        });

        it('should be ten when adding 5 to 5', function () {
            num = add(num, 5);
            num.should.equal(10);
        });
    })

});


