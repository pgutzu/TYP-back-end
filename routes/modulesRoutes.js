const express = require("express");
const router = express.Router();
const ModulesControllers = require("../controllers/modulesControllers");

/**
 * @swagger
 * /api/modules:
 *  get:
 *      summary: Get all modules
 *      description: Returns all modules from DB
 *      tags:
 *          - Modules
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/", async (req, res) => {
  try {
    const modules = await ModulesControllers.getModules();
    res.send(modules);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 *  /api/modules:
 *    post:
 *      summary: Add new module
 *      description:
 *          Add new 'Module' object.
 *      tags:
 *          - Modules
 *      parameters:
 *        - name: Module
 *          in: body
 *          description: module object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Modules'
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
 *   Modules:
 *     description: Module object
 *     properties:
 *       title:
 *         type: string
 *         example: JavaScript
 *         description: Module name
 *       color:
 *         type: string
 *         example: '#FC39FE'
 *         description: color
 *     required:
 *      - title
 *      - color
 */

router.post("/", async (req, res) => {
  try {
    const newModule = await ModulesControllers.addModule(req.body);
    res.send(newModule);
  } catch (err) {
    res.sendStatus(500);
  }
});

/**
 * @swagger
 * /api/modules/{id}:
 *  get:
 *      summary: Get module with {id}
 *      tags:
 *        - Modules
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of a module
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/:id", async (req, res) => {
  const module = await ModulesControllers.getModuleById(req.params.id);
  if (!module) {
    res.sendStatus(404);
  } else {
    res.send(module);
  }
});

/**
 * @swagger
 * /api/modules/{id}:
 *  put:
 *      summary: Updates a module with {id}
 *      tags:
 *        - Modules
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a module to update
 *          type: integer
 *        - in: body
 *          name: Modules
 *          required: true
 *          description: Object to update
 *          schema:
 *              $ref: '#/definitions/Modules'
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.put("/:id", async (req, res) => {
  try {
    const updatedModule = await ModulesControllers.updateModule(
      req.params.id,
      req.body
    );
    res.send(updatedModule);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/modules/{id}:
 *  delete:
 *      summary: Delete module with {id}
 *      tags:
 *        - Modules
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of a module to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.delete("/:id", async (req, res) => {
  try {
    await ModulesControllers.deleteModule(req.params.id);
    res.send("Module deleted");
  } catch (err) {
    res.send("something gone wrong");
  }
});

module.exports = router;
