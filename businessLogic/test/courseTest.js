
'use strict'

var Student = require("../typing/student"),
    Course = require("../typing/course"),
    chai = require("chai"),
    should = require("should"),
    expect = chai.expect;

describe("Course", function () {

    var _name = "Unit test for Node.js ",
        _code = "N101",
        _description = "This course will make you awesome",
        _student;

    beforeEach(function () {
        _student = Student.create("Harun", 10);
    });

    it("should save data correctly", function () {
        var course = Course.create(_name, _code, _description);

        should.exist(course.name);
        should.exist(course.code);
        should.exist(course.description);

        should.exist(course.students);
        course.students.should.eql([]);

        should.exist(course.times);
        course.times.should.eql([]);
    });

    it("should add the student to the students array", function () {
        var course = Course.create(_name, _code, _description);
        course.registerStudent(_student);

        course.students.length.should.equal(1);
        course.students[0].id.should.equal(_student.id);
    });

    it("should throw an error if we try to remove a student that isn't in the class", function () {
        var course = Course.create(_name, _code, _description);

        expect(function () {
            course.unregisterStudent("adasda")
        }).to.throw();
    });

    it("should add the given days/times to the course", function(){
        var course = Course.create(_name, _code, _description);
        var days = ["Monday","Friday"],
        times = ["10:00","14:00"];

        course.addTimes(days,times);

        course.times.length.should.equal(4);
        course.times[2].should.eql({
            day :"Friday", time : "10:00"
        })
    });

    it("should not add a non-day to the times array", function(){
        var course = Course.create(_name, _code, _description);
        var day = ["Mondayy"],
        time = ["10:00"];

        expect(function(){
            course.addTimes(day,time);
        }).to.throw();
    });
});



