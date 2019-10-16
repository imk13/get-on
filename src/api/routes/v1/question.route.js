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

router
  .route('/')
  /**
   * get list of question
   */
  .get(validate(list), controller.list)
  /**
   * create question
   */
  .post(validate(create), controller.create)
  /**
   * update question
   */
  .put(validate(remove), controller.update)
  /**
   * delete question
   */
  .delete(validate(remove), controller.delete)


  module.exports = router;