const request = require("supertest");
const app = require("../index");
const { Users } = require("../models/_models");
const db = Users;
async function deleteLast(database) {
  Users.findOne({
    order: [["createdAt", "DESC"]],
    where: {},
  }).then((user) =>
    Users.destroy({
      where: { id: user.id },
      limit: 1,
    })
  );
}

describe("/api/users/", () => {
  describe("POST /api/users/register => given a proper object", () => {
    afterEach(async () => await deleteLast(db));
    const connect = request(app)
    test("should response with a json object containing the user id", async () => {
      const response = await connect.post("/api/users/register").send({
        login: "Supertest44",
        password: "Supertest",
        isAdmin: false,
      });
      expect(response.body.id).toBeDefined();
    });
    test("should response with 200 status code", async () => {
      const response = await connect.post("/api/users/register").send({
        login: "Supertest34",
        password: "Supertest2",
        isAdmin: false,
      });
      expect(response.statusCode).toBe(200);
    });
  });
  describe("POST /api/users/register => when some kind of information is missing", () => {
    const connect = request(app)
    test("should response with 500 statuscode", async () => {
      const response = await connect.post("/api/users/register").send({
        login: "Supertest",
        lastName: "Superlastname",
        isAdmin: false,
      });
      expect(response.statusCode).toBe(500);
    });
  });
  describe("POST /api/users/register => when user already exists", () => {
    const connect = request(app)
    test(`should response with status 500 and user 'already exists' message`, async () => {
      await connect.post("/api/users/register").send({
        login: "Supertest",
        lastName: "Superlastname",
        isAdmin: false,
      });
      setTimeout(async () => {
        await rconnect.post("/api/users/register").send({
          login: "Supertest",
          lastName: "Superlastname",
          isAdmin: false,
        });
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual("User with this login already exists");
      }, 3000);
    });
  });
});
