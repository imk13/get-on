const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/question.controller');
const {
  list,
  create,
  update,
  remove
} = require('../../validations/question.validations');

const router = express.Router();

/**
 * @swagger
 *
 * definitions:
 *   Question:
 *     type: object
 *     required:
 *       - question
 *     properties:
 *       question:
 *         type: string
 *       metadata:
 *         type: object
 *         description: Holds metadata for the question such as for video,images, MCQ options etc
 *       is_active:
 *         type: boolean
 *         default: true
 *       created_by:
 *         type: string
 *       created_at: 
 *         type: string
 *         example: "2019-10-16T07:56:45.019Z"
 *         format: date-time
 *       updated_at:
 *         type: string
 *         example: "2019-10-16T07:56:45.019Z"
 *         format: date-time
 */

router
  .route('/')
/**
 * @swagger
 * /question:
 *   get:
 *     description: Returns list quetions
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: page
 *         in: query
 *         schema:
 *           type: number
 *         required:
 *         - page
 *       - name: limit
 *         in: query
 *         schema:
 *           type: number
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Question result
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Question'
 */
  .get(validate(list), controller.list)
/**
 * @swagger
 * /question:
 *   post:
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required:
 *           - question
 *         properties:
 *           question:
 *             type: string
 *           metadata:
 *             type: object
 *             description: Holds metadata for the question such as for video,images, MCQ options etc
 *           is_active:
 *             type: boolean
 *             default: true
 *           created_by:
 *             type: string
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: create question result
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/definitions/Question'
 */
  .post(validate(create), controller.create)
/**
 * @swagger
 * /question:
 *   put:
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required:
 *           - _id
 *         properties:
 *           _id:
 *             type: string
 *             format: uuid
 *           question:
 *             type: string
 *           metadata:
 *             type: object
 *             description: Holds metadata for the question such as for video,images, MCQ options etc
 *           is_active:
 *             type: boolean
 *             default: true
 *           created_by:
 *             type: string
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: create question result
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/definitions/Question'
 */
  .put(validate(remove), controller.update)
/**
 * @swagger
 * /question:
 *   delete:
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required:
 *           - _id
 *         properties:
 *           _id:
 *             type: string
 *             format: uuid
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: create question result
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/definitions/Question'
 */
  .delete(validate(remove), controller.delete)


  module.exports = router;