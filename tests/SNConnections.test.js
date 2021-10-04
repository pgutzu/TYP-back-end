const request = require("supertest");
const app = require("../index");
const { Students } = require("../models/_models");
const { SocialNetworks, Users } = require("../models/_models");
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

describe("SOCIAL NETWORKS creating", () => {
  const connect = request(app);
  describe("When student already exists", () => {
    test("Should response with status 200 and SN id defined", async () => {
      await Users.create({
        login: "SN TEST",
        password: "ssssuuuup",
        isAdmin: false,
      });
      let lastUser = await Users.findOne({
        order: [["createdAt", "DESC"]],
        where: {},
      });
      await Students.create({
        fullName: "SNSUPERTEST",
        user_id: lastUser.id,
      });
      let lastStudent = await Students.findOne({
        order: [["createdAt", "DESC"]],
        where: {},
      });
      const response = await connect.post("/api/socialNetworks").send({
        instagram: "SNSUPERTEST",
        telegram: "SNSUPERTEST",
        student_id: lastStudent.id,
      });
      await deleteLast(SocialNetworks);
      await deleteLast(Students);
      await deleteLast(Users);
      expect(response.statusCode).toBe(200);
      expect(response.body.id).toBeDefined();
    });
  });
  describe("When student with such id not created", () => {
    test("should response with status 500", async () => {
      const response = await connect.post("/api/students").send({
        fullName: "Supertest34",
        user_id: 11293824776,
      });
      expect(response.statusCode).toBe(500);
    });
  });
});
