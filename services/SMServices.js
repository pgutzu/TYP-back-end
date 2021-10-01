const { StudentModules } = require("../models/_models");

class SMServices {
  addSM(body) {
    return new Promise((res) => {
      const result = StudentModules.create(body);
      res(result);
    });
  }

  getSM(id) {
    return new Promise((res) => {
      const SM = StudentModules.findOne({
        where: {
          studentId: id,
        },
      });
      res(SM);
    });
  }

  //сделать, чтобы возвращало обновленный объект
  updateSM(id, body) {
    return new Promise((res) => {
      const SM = StudentModules.update(
        {
          body,
        },
        {
          where: {
            id,
          },
        }
      );
      res(SM);
    });
  }

  deleteSM(id) {
    return new Promise((res) => {
      const result = StudentModules.destroy({ where: { id } });
      res(result);
    });
  }
}

module.exports = new SMServices();
