const request = require("supertest");
const app = require("../index");
const { Students } = require("../models/_models");
const { SocialNetworks } = require("../models/_models");
function deleteLast(database) {
  database
    .findOne({
      order: [["createdAt", "DESC"]],
      where: {},
    })
    .then((user) =>
      database.destroy({
        where: { id: user.id },
        limit: 1,
      })
    );
}

describe("STUDENTS creating", () => {
  describe("When User already exists ", () => {
    test("Should response with 200 status code", async () => {
      const response = await request(app).post("/api/students").send({
        fullName: "Supertest34",
        user_id: 1,
      });
      deleteLast(Students);
      expect(response.statusCode).toBe(200);
    });
  });
  describe("When user with such id not created", () => {
    test("should response with status 500", async () => {
      const response = await request(app).post("/api/students").send({
        fullName: "Supertest34",
        user_id: 11293824776,
      });
      expect(response.statusCode).toBe(500);
    });
  });
});

describe("SOCIAL NETWORKS creating", () => {
  describe("When student already exists", () => {
    test("Should response with status 200", async () => {
      const response = await request(app).post("/api/socialNetworks").send({
        instagram: "@pgutzu",
        telegram: "@pgutzu",
        student_id: 2,
      });
      deleteLast(SocialNetworks);
      expect(response.statusCode).toBe(200);
    });
  });
  describe("When student with such id not created", () => {
    test("should response with status 500", async () => {
      const response = await request(app).post("/api/students").send({
        fullName: "Supertest34",
        user_id: 11293824776,
      });
      expect(response.statusCode).toBe(500);
    });
  });
});
