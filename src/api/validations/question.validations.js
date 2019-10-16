const Joi = require('joi');

module.exports = {
  list: {
    query: {
      page: Joi.number().min(1).required(),
      limit: Joi.number().min(1).max(100),
    }
  },
  create: {
    body: {
      question: Joi.string().trim().required(),
      created_by: Joi.string().trim().required()
    }
  }
};