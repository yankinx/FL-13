function Student(name, email) {
    let _name = name;
    let _email = email;
    let _homeworkResults = [];
    this.getName = function () {
        return _name;
    }
    this.getEmail = function () {
        return _email;
    }
    this.addHomeworkResult = function (topic, success) {
        _homeworkResults.push({ topic: topic, success: success });
    }
    this.getHomeworkResult = function () {
        return _homeworkResults;
    }
}
function FrontendLab(students, failedLimit) {
    let _studentsList = Array.from(students, student => {
        return new Student(student.name, student.email);
    })
    let _failedHomeworksLimit = failedLimit;
    this.printStudentsList = function () {
        _studentsList.forEach(student => {
            console.log(`name: ${student.getName()}, email: ${student.getEmail()}`);
            console.log(student.getHomeworkResult());
        });
    }
    this.addHomeworkResults = function (homeworkResults) {
        _studentsList.forEach(student => {
            let s_email = student.getEmail();
            homeworkResults.results.forEach(el => {
                if (s_email === el.email) {
                    student.addHomeworkResult(homeworkResults.topic, el.success);
                    return;
                }
            })
        })
    }
    this.printStudentsEligibleForTest = function () {
        _studentsList.forEach(student => {
            let valid = 0;
            student.getHomeworkResult().forEach(el => {
                if (el.success) {
                    valid++;
                    return;
                }
            });
            if (valid >= _failedHomeworksLimit) {
                console.log(`name: ${student.getName()}, email: ${student.getEmail()}`);
            }
        })
    }
}
