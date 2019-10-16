const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/document.controller');
const {
  list, create
} = require('../../validations/document.validations');

const router = express.Router();

router
  .route('/')
  /**
   * @api {get} v1/doc List Doc
   * @apiDescription Get a list of Doc
   * @apiVersion 1.0.0
   * @apiName ListDoc
   * @apiGroup User
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [perPage=1]  Doc per page
   * @apiParam  {String}             [name]       User's name
   * @apiParam  {String}             [email]      User's email
   * @apiParam  {String=user,admin}  [role]       User's role
   *
   * @apiSuccess {Object[]} Doc List of Doc.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Doc can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(validate(list), controller.list)
  /**
   * crate document
   */
  .post(validate(create), controller.create)


  module.exports = router;