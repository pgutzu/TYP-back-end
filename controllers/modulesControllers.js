const ModuleServices = require("../services/modulesServices");

class ModulesControllers {
  async getModules() {
    const result = await ModuleServices.getModules();
    return result;
  }

  async addModule(body) {
    const result = await ModuleServices.addModule(body);
    return result;
  }

  async updateModule(id, body) {
    const result = await ModuleServices.updateModule(id, body);
    return result;
  }

  async deleteModule(id) {
    const result = await ModuleServices.deleteModule(id);
    return result;
  }

  async getModuleById(id) {
    const result = await ModuleServices.getModuleById(id);
    return result;
  }
}

module.exports = new ModulesControllers();
