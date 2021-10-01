const SMServices = require("../services/SMServices");

class SMControllers {
  async getSM(id) {
    const SM = await SMServices.getSM(id);
    return SM;
  }

  async addSM(body) {
    const result = await SMServices.addSM(body);
    return result;
  }

  async updateSM(id, body) {
    const result = await SMServices.updateSM(id, body);
    return result;
  }

  async deleteSM(id) {
    const result = await SMServices.deleteSM(id);
    return result;
  }
}

module.exports = new SMControllers();
