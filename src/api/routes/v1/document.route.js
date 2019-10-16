const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/document.controller');
const {
  list,
  create,
  update,
  remove
} = require('../../validations/document.validations');

const router = express.Router();
/**
 * @swagger
 *
 * definitions:
 *   Document:
 *     type: object
 *     required:
 *       - patient_id
 *       - name
 *       - created_by
 *     properties:
 *       patient_id:
 *         type: string
 *       name:
 *         type: string
 *       queries:
 *         type: array
 *         description: Holds question reference and the answer provided by the patient
 *         example: [{"answer": "I am feeling bit under the weather!","_id": "5da6cd3d671965c6e80872b8","question": {"_id": "5da6ca7ab0e218c6bb5a8866","question": "How are you feeling today?"}}]
 *       metadata:
 *         type: object
 *         description: Holds metadata for the document such as for video,images etc
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
 * /document:
 *   get:
 *     description: Returns list documents
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
 *         description: document
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Document'
 */
  .get(validate(list), controller.list)
/**
 * @swagger
 * /document:
 *   post:
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required:
 *           - patient_id
 *           - name
 *           - created_by
 *         properties:
 *           patient_id:
 *             type: string
 *           name:
 *             type: string
 *           queries:
 *             type: array
 *             example: [{"answer": "I am feeling bit under the weather!","_id": "5da6cd3d671965c6e80872b8","question": {"_id": "5da6ca7ab0e218c6bb5a8866","question": "How are you feeling today?"}}]
 *           metadata:
 *             type: object
 *             description: Holds metadata for the document such as for video,images etc
 *           is_active:
 *             type: boolean
 *           created_by:
 *             type: string
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: create doc result
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/definitions/Document'
 */
  .post(validate(create), controller.create)
/**
 * @swagger
 * /document:
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
 *           name:
 *             type: string
 *           queries:
 *             type: array
 *             example: [{"answer": "I am feeling bit under the weather!","_id": "5da6cd3d671965c6e80872b8","question": {"_id": "5da6ca7ab0e218c6bb5a8866","question": "How are you feeling today?"}}]
 *           metadata:
 *             type: object
 *             description: Holds metadata for the document such as for video,images etc
 *           is_active:
 *             type: boolean
 *           created_by:
 *             type: string
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: updated doc result
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/definitions/Document'
 */
  .put(validate(remove), controller.update)
/**
 * @swagger
 * /document:
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
 *         description: deleted doc result
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/definitions/Document'
 */
  .delete(validate(remove), controller.delete)


  module.exports = router;