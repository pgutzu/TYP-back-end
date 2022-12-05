const { Modules } = require("../models/_models");

class ModulesServices {
  addModule(body) {
    return new Promise((res) => {
      const module = Modules.create(body);
      res(module);
    });
  }

  getModules() {
    return new Promise((res) => {
      Modules.findAll().then((result) => res(result));
    });
  }

  deleteModule(id) {
    return new Promise((res) => {
      Modules.destroy({ where: { id } }).then((result) => res(result));
    });
  }

  updateModule(id, body) {
    return new Promise(async (res) => {
      await Modules.update(body, { where: { id } });
      await Modules.findOne({ where: { id } }).then((result) => res(result));
    });
  }

  getModuleById(id) {
    return new Promise((res) => {
      try {
        const user = Modules.findOne({
          where: { id },
        }).then((result) => res(result));
      } catch {
        if (err) throw err;
      }
    });
  }
}

module.exports = new ModulesServices();
