const Joi = require('joi');

module.exports = {
  list: {
    query: {
      page: Joi.number().min(1).required(),
      limit: Joi.number().min(1).max(100)
    }
  },
  create: {
    body: {
      name: Joi.string().trim().min(1).required(),
      patient_id: Joi.string().trim().min(1).required(),
      created_by: Joi.string().trim().min(1).required(),
    }
  },
  update: {
    body: {
      _id : Joi.string().trim().min(1).required(),
    }
  },
  remove: {
    body: {
      _id : Joi.string().trim().min(1).required(),
    }
  }
};