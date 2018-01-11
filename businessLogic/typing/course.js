'use strict'

function Course() { }

Course.create = function (name, code, description) {
    var course = new Course();

    course.name = name;
    course.code = code;
    course.description = description;

    course.students = [];
    course.times = [];

    return course;
}

var validDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

var _p = Course.prototype;

_p.registerStudent = function (student) {
    this.students.push(student);
};


_p.unregisterStudent = function (student) {
    var self = this;

    if (!this.students.some(function (student, i) {
        if (student.id === studentId) {
            self.students.splice(i, 1);
            return true;
        }
    })) {
        throw new Error("Student '" + studentId + "' is not registered for this course")
    }
};

_p.addTimes = function (days, times) {
    var self = this;

    if (!Array.isArray(days)) {
        days = [days];
    }

    if (!Array.isArray(times)) {
        times = [times];
    }

    days.forEach(function (day) {
        if (validDays.indexOf(day) === -1) {
            throw new Error(day + "is not a valid day");
        }
        times.forEach(function (time) {
            self.times.push({
                "day": day,
                "time": time
            })
        })
    });
};

_p.showSchedule = function () {
    var scheduleString = "",
        first = true;

    this.times.forEach(function (time) {
        if (!first) {
            scheduleString += "\n";
        }
        first = false;

        scheduleString += time.day + " at " + time.time;
    });

    return scheduleString;
};

_p.showStudents = function () {

    var studentString = "",
        first = true;

    this.students.forEach(function (student) {
        if (!first) {
            studentString += "\n";
        }
        first = false;

        studentString += student.toString();
    });

    return studentString;
}

_p.toString = function () {
    return this.name + "\t" + this.code;
};

module.exports = Course;