const request = require("supertest");
const app = require("../index");
const { Students, StudentModules } = require("../models/_models");
const { SocialNetworks } = require("../models/_models");
function deleteLast(database) {
  database
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

describe("STUDENT_MODULES creating", () => {
  describe("When student and module already exists", () => {
    test("Should response with status 200 and obj containing StudentModule id", async () => {
      const response = await request(app).post("/api/studentmodules").send({
        module_id: 1,
        student_id: 1,
      });
      deleteLast(StudentModules);
      expect(response.statusCode).toBe(200);
      expect(response.body.id).toBeDefined();
    });
  });
  describe("When such user not exists", () => {
    test("Should response with status 500", async () => {
      const response = await request(app).post("/api/studentmodules").send({
        module_id: 1,
        student_id: 213812465126378,
      });
      expect(response.statusCode).toBe(500);
    });
  });
  describe("When such module not exists", () => {
    test("Should response with status 500", async () => {
      const response = await request(app).post("/api/studentmodules").send({
        module_id: 11231264712839210,
        student_id: 1,
      });
      expect(response.statusCode).toBe(500);
    });
  });
});
