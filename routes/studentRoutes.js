const express = require("express");
const router = express.Router();
const StudentControllers = require("../controllers/studentControllers");

/**
 * @swagger
 * /api/students:
 *  get:
 *      summary: Get all students
 *      description: Returns all students from DB
 *      tags:
 *          - Students
 *      responses:
 *          '200':
 *              description: Successfull response
 */
 router.get("/", async (req, res) => {
  try {
    const students = await StudentControllers.getStudents();
    res.send(students);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/students/full:
 *  get:
 *      summary: Get full information of all students
 *      tags:
 *        - Students
 *      consumes:
 *        - application/json
 *      responses:
 *          '200':
 *              description: Successfull response
 */
router.get("/full", async (req, res) => {
  try {
    let data = await StudentControllers.getFullDataAll();
    res.send(data);
  } catch {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/students/{id}:
 *  get:
 *      summary: Get student with {id}
 *      tags:
 *        - Students
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of a student
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */
router.get("/:id", async (req, res) => {
  const student = await StudentControllers.getStudentById(req.params.id);
  if (!student) {
    res.sendStatus(404);
  } else {
    res.send(student);
  }
});

/**
 * @swagger
 *  /api/students:
 *    post:
 *      summary: Add new student
 *      description:
 *          Add new 'Student' object.
 *      tags:
 *          - Students
 *      parameters:
 *        - name: Student
 *          in: body
 *          description: student object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Students'
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
 *   Students:
 *     description: Students object
 *     properties:
 *       fullName:
 *         type: string
 *         example: Kirill Sachuk
 *         description: User full name
 *       user_id:
 *         type: integer
 *         example: 1
 *         description: id of a user connected to student
 *     required:
 *      - fullName
 *      - user_id
 */

router.post("/", async (req, res) => {
  try {
    const newStudent = await StudentControllers.addStudent(req.body);
    res.send(newStudent);
  } catch (err) {
    res.sendStatus(500);
  }
});

/**
 * @swagger
 * /api/students/{id}:
 *  put:
 *      summary: Updates a student with {id}
 *      tags:
 *        - Students
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a student to update
 *          type: integer
 *        - in: body
 *          name: Students
 *          required: true
 *          description: Object to update
 *          schema:
 *              $ref: '#/definitions/Students'
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await StudentControllers.updateStudent(
      req.params.id,
      req.body
    );
    res.send(updatedStudent);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/students/{id}:
 *  delete:
 *      summary: Delete student with {id}
 *      tags:
 *        - Students
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of a student to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent = await StudentControllers.deleteStudent(
      req.params.id
    );
    res.send("Student deleted");
  } catch (err) {
    res.send("something gone wrong");
  }
});

/**
 * @swagger
 * /api/students/full/{id}:
 *  get:
 *      summary: Get full information of a student with {id}
 *      tags:
 *        - Students
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of student
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */
router.get("/full/:id", async (req, res) => {
  try {
    let data = await StudentControllers.getFullData(req.params.id);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
