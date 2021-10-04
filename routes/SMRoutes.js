const express = require("express");
const router = express.Router();
const SMControllers = require("../controllers/SMControllers");

/**
 * @swagger
 * /api/studentModules/{id}:
 *  get:
 *      summary: Get all SM of student with {id}
 *      description: Get all student modules of user {id}
 *      tags:
 *          - StudentModules
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a student
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SMControllers.getSM(id);
    if (!result) {
      res.sendStatus(404);
    } else {
      res.send(result);
    }
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 *  /api/studentModules:
 *    post:
 *      summary: Add new student module object
 *      description:
 *          Add 'studentModule' object.
 *      tags:
 *          - StudentModules
 *      parameters:
 *        - in: body
 *          name: StudentModule
 *          required: true
 *          description: Object to add
 *          schema:
 *              $ref: '#/definitions/StudentModule'
 *      responses:
 *        200:
 *          description: Successful response
 *          schema:
 *              title: Return String
 *              type: string
 *              example: "Object succesfully added"
 *        500:
 *          description: Error
 *          schema:
 *            type: string
 *            example: "Could not add Section"
 */

router.post("/", async (req, res) => {
  try {
    const result = await SMControllers.addSM(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send('Invalid data input');
  }
});

/**
 * @swagger
 * /api/studentModules/{id}:
 *  put:
 *      summary: Update student module with {id}
 *      tags:
 *        - StudentModules
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: User module {id} to update
 *          type: integer
 *        - in: body
 *          name: StudentModule
 *          required: true
 *          description: New StudentModule object
 *          schema:
 *              $ref: '#/definitions/StudentModule'
 *      responses:
 *          '200':
 *              description: Successfull response
 * definitions:
 *  StudentModule:
 *      type: object
 *      required:
 *          - moduleId
 *          - studentId
 *      properties:
 *          moduleId:
 *              type: integer
 *              example: 1
 *              description: Module id
 *          studentId:
 *              type: integer
 *              example: 1
 *              description: Student's id
 */

router.put("/:id", async (req, res) => {
  try {
    const result = await SMControllers.updateSM(req.params.id, req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/studentModules/{id}:
 *  delete:
 *      summary: Delete studentModule with {id}
 *      tags:
 *        - StudentModules
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of SM to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.delete("/:id", async (req, res) => {
  try {
    const result = await SMControllers.deleteSM(req.params.id);
    res.send("Success");
  } catch (err) {
    res.send("Something gone wrong");
  }
});

module.exports = router;
