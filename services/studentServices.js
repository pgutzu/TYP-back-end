const { Students } = require("../models/_models");

class StudentServices {
  async addStudent(body) {
    return new Promise((res) => {
      const student = Students.create(body);
      res(student);
    });
  }

  getStudents() {
    return new Promise((res) => {
      Students.findAll().then((result) => res(result));
    });
  }

  deleteStudent(id) {
    return new Promise((res) => {
      Students.destroy({ where: { id } }).then((result) => res(result));
    });
  }

  updateStudent(id, body) {
    return new Promise(async (res) => {
      await Students.update(body, { where: { id } });
      await Students.findOne({
        where: { id },
      }).then((result) => res(result));
    });
  }

  getStudentById(id) {
    return new Promise((res) => {
      try {
        const student = Students.findOne({
          where: { id },
        }).then((result) => res(result));
      } catch {
        if (err) throw err;
      }
    });
  }
}

module.exports = new StudentServices();
