const express = require("express");
const router = express.Router();
const usersRoutes = require("./usersRoutes.js");
const studentRoutes = require("./studentRoutes.js");
const modulesRoutes = require("./modulesRoutes");
const SNRoutes = require("./SNRoutes.js");
const UserControllers = require('../controllers/userControllers')

router.use("/users", usersRoutes);
router.use("/students", studentRoutes);
router.use("/modules", modulesRoutes);
router.use("/socialNetworks", SNRoutes);
/**
 * @swagger
 *  /api/login:
 *    post:
 *      summary: Login as a user
 *      description:
 *          Login route.
 *      tags:
 *          - Login
 *      parameters:
 *        - name: user
 *          in: body
 *          description: login object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Login'
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
 *   Login:
 *     description: Login object
 *     properties:
 *       login:
 *         type: string
 *         example: example@example.com
 *         description: login for user
 *       password:
 *         type: string
 *         example: 123123
 *         description: password for user
 *     required:
 *      - login
 *      - password
 */

router.use("/login", async (req, res) => {
  try {
    let token = await UserControllers.login(req.body);
    res.send(token);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
