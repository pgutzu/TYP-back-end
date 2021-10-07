const express = require("express");
const router = express.Router();
const SNControllers = require("../controllers/SNControllers");
const Validator = require("../helpers/validator");
const { body, validationResult } = require("express-validator");
/**
 * @swagger
 * /api/socialNetworks/{id}:
 *  get:
 *      summary: Get all SN of student with {id}
 *      description: Get all social networks from user {id}
 *      tags:
 *          - SocialNetworks
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a user
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SNControllers.getSN(id);
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
 *  /api/socialNetworks:
 *    post:
 *      summary: Add social networks to student with {id}
 *      description:
 *          Add 'socialNetworks' object.
 *      tags:
 *          - SocialNetworks
 *      parameters:
 *        - in: body
 *          name: SocialNetworks
 *          required: true
 *          description: Object to add
 *          schema:
 *              $ref: '#/definitions/SocialNetworks'
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

router.post("/", Validator.validateSN(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      success: false,
      errors: errors.array(),
    });
  } else {
    try {
      const result = await SNControllers.addSN(req.body);
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  }
});

/**
 * @swagger
 * /api/socialNetworks/{id}:
 *  put:
 *      summary: Update social network of student with {id}
 *      tags:
 *        - SocialNetworks
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: User {id} to update social networks
 *          type: integer
 *        - in: body
 *          name: SocialNetworks
 *          required: true
 *          description: New social networks
 *          schema:
 *              $ref: '#/definitions/SocialNetworks'
 *      responses:
 *          '200':
 *              description: Successfull response
 * definitions:
 *  SocialNetworks:
 *      type: object
 *      required:
 *          - instagram
 *          - telegram
 *          - student_id
 *      properties:
 *          instagram:
 *              type: string
 *              example: "@pgutzu"
 *              description: Student's instagram
 *          telegram:
 *              type: string
 *              example: "@pgutzu"
 *              description: Student's telegram
 *          student_id:
 *              type: integer
 *              example: 1
 *              description: Student's id
 */

router.put("/:id", async (req, res) => {
  try {
    const result = await SNControllers.updateSN(req.params.id, req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/socialNetworks/{id}:
 *  delete:
 *      summary: Delete social networks with {id}
 *      tags:
 *        - SocialNetworks
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of SN to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.delete("/:id", async (req, res) => {
  try {
    const result = await SNControllers.deleteSN(req.params.id);
    res.send("Success");
  } catch (err) {
    res.send("Something gone wrong");
  }
});

module.exports = router;
