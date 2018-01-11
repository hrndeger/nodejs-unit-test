'use strict'

var Student = require("../typing/student"),
    Course = require("../typing/course"),
    chai = require("chai"),
    should = require("should"),
    expect = chai.expect;


describe("Student", function () {
    var _studentName = "Harun",
        _grade = 10;

    it("should save the info on the student and create an id when created", function () {
        var student = Student.create(_studentName, _grade);

        should.exist(student.name);
        student.name.should.equal(_studentName);

        should.exist(student.grade);
        student.grade.should.equal(_grade);

        should.exist(student.id);
    });

    it("should increase the student's grade by 1 when advanceGrade is called", function () {
        var student = Student.create(_studentName, _grade);

        student.advanceGrade();

        student.grade.should.equal(_grade + 1);
    });
});