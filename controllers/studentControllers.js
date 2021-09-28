const StudentServices = require("../services/studentServices");

class StudentControllers {
  async getStudents() {
    const students = await StudentServices.getStudents();
    return students;
  }

  async addStudent(body) {
    const student = await StudentServices.addStudent(body);
    return student;
  }

  async updateStudent(id, body) {
    const student = await StudentServices.updateStudent(id, body);
    return student;
  }

  async deleteStudent(id) {
    const result = await StudentServices.deleteStudent(id);
    return result;
  }

  async getStudentById(id) {
    const student = await StudentServices.getStudentById(id);
    return student;
  }

  async getFullData(id) {
    const data = await StudentServices.getFullData(id);
    return data;
  }

  async getFullDataAll() {
    const data = await StudentServices.getFullDataAll();
    return data
  }
}

module.exports = new StudentControllers();
