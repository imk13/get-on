
const Question = require('../models/document');
/**
 * Get question list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const transformedDocs = [];
    res.json({data: transformedDocs});
  } catch (error) {
    next(error);
  }
};

exports.listBy = async (req, res, next) => {
  try {
  	let queryParams = req.query;
    const transformedDocs = [];
    res.json({data: transformedDocs});
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
  	let body = req.body;
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