const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/userControllers");
const { body, validationResult } = require("express-validator");
const Validator = require('../helpers/validator')
/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: Get all users
 *      description: Returns all users from DB
 *      tags:
 *          - Users
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/", async (req, res) => {
  try {
    const users = await UserControllers.getUsers();
    res.send(users);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      summary: Get user with {id}
 *      tags:
 *        - Users
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of user
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/:id", async (req, res) => {
  const user = await UserControllers.getUserById(req.params.id);
  if (!user) {
    res.sendStatus(404);
  } else {
    res.send(user);
  }
});

/**
 * @swagger
 *  /api/users/register:
 *    post:
 *      summary: Add new user
 *      description:
 *          Register 'User' object.
 *      tags:
 *          - Users
 *      parameters:
 *        - name: user
 *          in: body
 *          description: user object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Users'
 *      responses:
 *        200:
 *          description: Successful response
 *          schema:
 *              title: Return String
 *              type: string
 *              example: "Section added succesfully"
 *        500:
 *          description: Error
 *          schema:
 *            type: string
 *            example: "Could not add Section"
 * definitions:
 *   Users:
 *     description: Users object
 *     properties:
 *       login:
 *         type: string
 *         example: example@example.com
 *         description: login for user
 *       password:
 *         type: string
 *         example: 123123
 *         description: password for user
 *       isAdmin:
 *         type: boolean
 *         example: false
 *         description: admin or user
 *     required:
 *      - login
 *      - password
 *      - isAdmin
 */

router.post(
  "/register",Validator.validateLogin(),async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        success: false,
        errors: errors.array(),
      });
    } else {
      try {
        const newUser = await UserControllers.register(req.body);
        res.send(newUser);
      } catch (err) {
        res.status(500).send(err);
      }
    }
  }
);

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *      summary: Updates a user with {id}
 *      tags:
 *        - Users
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a user to update
 *          type: integer
 *        - in: body
 *          name: Users
 *          required: true
 *          description: Object to update
 *          schema:
 *              $ref: '#/definitions/Users'
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await UserControllers.updateUser(
      req.params.id,
      req.body
    );
    res.send(updatedUser);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *      summary: Delete user with {id}
 *      tags:
 *        - Users
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of user to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await UserControllers.deleteUser(req.params.id);
    res.send("User deleted");
  } catch (err) {
    res.send("something gone wrong");
  }
});

module.exports = router;
