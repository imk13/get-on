
const Question = require('../models/question');
const Utils = require('../../utils');
const logger = require('../logger');
/**
 * Get question list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    let pagination = Utils.getPagination(req.query);
    let query = {'is_active': true};
    const questionList = await Question
      .find(query)
      .skip(pagination.limit * (pagination.page - 1))
      .limit(pagination.limit);
    logger.info(questionList);
    res.json({data: questionList});
  } catch (error) {
    next(error);
  }
};

exports.listBy = async (req, res, next) => {
  try {
  	let pagination = Utils.getPagination(req.query);
    let query = {'is_active': true};
    const questionList = await Question
      .find(query)
      .skip(pagination.limit * (pagination.page - 1))
      .limit(pagination.limit);
    res.json({data: questionList});
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
  	let body = req.body;
    logger.info(JSON.stringify(body));
  	let ques = new Question(body);
  	let result = await ques.save();
    res.json({data: result});
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
  	let body = req.body;
  	let ques = await Question.findById(body._id);
  	let result = {};
  	if(ques) {
  		for(key in body) {
  			ques[key] = body[key];
  		}
  		result = await ques.save();
  	}
    res.json({data: result});
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
  	let body = req.body;
  	let ques = await Question.findById(body._id);
  	let result = {};
  	if(ques) {
  		ques.is_active = false;
  		result = await ques.save();
  	}
    res.json({data: result});
  } catch (error) {
    next(error);
  }
};