const request = require("supertest");
const app = require("../index");
const { Students } = require("../models/_models");
const { Users, StudentModules, Modules } = require("../models/_models");
async function deleteLast(database) {
  await database
    .findOne({
      order: [["createdAt", "DESC"]],
      where: {},
    })
    .then((obj) =>
      database.destroy({
        where: { id: obj.id },
        limit: 1,
      })
    );
}
jest.setTimeout(60000); 
describe("STUDENT_MODULES creating", () => {
  const connect = request(app);
  describe("When student and module already exists", () => {
    test("Should response with status 200 and obj containing StudentModule id", async () => {
      await Users.create({
        login: "SMCONNECTIONSTEST",
        password: "SMCONNECTIONSTEST",
        isAdmin: false,
      });
      let lastUser = await Users.findOne({
        order: [["createdAt", "DESC"]],
        where: {},
      });
      await Modules.create({
        title: "SMCONNECTIONS",
        color: "SMCONNECTIONS",
      });
      let lastModule = await Modules.findOne({
        order: [["createdAt", "DESC"]],
        where: {},
      });
      await Students.create({
        fullName: "SMCONNECTIONS 1",
        user_id: lastUser.id,
      });
      let lastStudent = await Students.findOne({
        order: [["createdAt", "DESC"]],
        where: {},
      });
      const response = await connect.post("/api/studentmodules").send({
        moduleId: lastModule.id,
        studentId: lastStudent.id,
      });
      await deleteLast(StudentModules);
      await deleteLast(Modules);
      await deleteLast(Students);
      await deleteLast(Users);
      expect(response.statusCode).toBe(200);
      expect(response.body.id).toBeDefined();
    });
  });
  describe("When such user not exists", () => {
    test("Should response with status 500", async () => {
      const response = await connect.post("/api/studentmodules").send({
        moduleId: 1,
        studentId: 213812465126378,
      });
      expect(response.statusCode).toBe(500);
    });
  });
  describe("When such module not exists", () => {
    test("Should response with status 500", async () => {
      const response = await connect.post("/api/studentmodules").send({
        moduleId: 112312647139210,
        studentId: 1,
      });
      expect(response.statusCode).toBe(500);
    });
  });
});
