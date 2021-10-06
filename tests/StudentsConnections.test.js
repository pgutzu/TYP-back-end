const request = require("supertest");
const app = require("../index");
const { Students, StudentModules, Modules } = require("../models/_models");
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
async function createUser() {
  return await Users.create({
    login: "sssuuuuup",
    password: "ssssuuuup",
    isAdmin: false,
  });
}
async function createModule() {
  return await Modules.create({
    title: "SUUUUUP",
    color: "#SUUUP",
  });
}
async function createStudent() {
  return await Students.create({
    fullName: "Suuup Suuuup",
    user_id: lastUser.id,
  });
}

const connect = request(app);

describe("STUDENTS creating", () => {
  describe("When User already exists ", () => {
    test("Should response with 200 status code", async () => {
      await Users.create({
        login: "CREATE TEST1",
        password: "ssssuuuup",
        isAdmin: false,
      });
      let lastUser = await Users.findOne({
        order: [["createdAt", "DESC"]],
        where: {},
      });
      const response = await connect.post("/api/students").send({
        fullName: "Supertest34",
        user_id: lastUser.id,
      });
      deleteLast(Students);
      deleteLast(Users);
      expect(response.statusCode).toBe(200);
    });
  });
  describe("When user with such id not created", () => {
    test("should response with status 500", async () => {
      const response = await connect.post("/api/students").send({
        fullName: "Supertest34",
        user_id: 112938224776,
      });
      expect(response.statusCode).toBe(500);
    });
  });
});

// describe("STUDENT_MODULES creating", () => {
//   const connect = request(app);
//   describe("When student and module already exists", () => {
//     const lastUser = createUser();
//     let lastModule = createModule();
//     let lastStudent = createStudent();
//     test("Should response with status 200 and obj containing StudentModule id", async () => {
//       const response = await connect.post("/api/studentmodules").send({
//         moduleId: lastModule.id,
//         studentId: lastStudent.id,
//       });
//       // await deleteLast(StudentModules);
//       // await deleteLast(Modules);
//       // await deleteLast(Students);
//       // await deleteLast(Users);
//       expect(response.statusCode).toBe(200);
//       e;
//       xpect(response.body.id).toBeDefined();
//     });
//   });
//   describe("When such user not exists", () => {
//     test("Should response with status 500", async () => {
//       const response = await connect.post("/api/studentmodules").send({
//         moduleId: 1,
//         studentId: 213812465126378,
//       });
//       expect(response.statusCode).toBe(500);
//     });
//   });
//   describe("When such module not exists", () => {
//     test("Should response with status 500", async () => {
//       const response = await connect.post("/api/studentmodules").send({
//         moduleId: 112312647139210,
//         studentId: 1,
//       });
//       expect(response.statusCode).toBe(500);
//     });
//   });
// });
