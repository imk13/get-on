const Joi = require('joi');

module.exports = {
  list: {
    query: {
      page: Joi.number().min(1),
      limit: Joi.number().min(1).max(100),
    }
  },
  create: {
  	name: Joi.string().trim().length(1),
  	created_by: Joi.string().trim().length(1)
  }
};