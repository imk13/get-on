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

router
  .route('/')
  /**
   * Get list of documents
   */
  .get(validate(list), controller.list)
  /**
   * create document
   */
  .post(validate(create), controller.create)
  /**
   * update document
   */
  .put(validate(remove), controller.update)
  /**
   * delete document
   */
  .delete(validate(remove), controller.delete)


  module.exports = router;