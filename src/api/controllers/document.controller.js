
const Document = require('../models/document');
const Utils = require('../../utils');
/**
 * Get doc list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    let pagination = Utils.getPagination(req.query);
    let query = {'is_active': true};
    const transformedDocs = await Document
      .find(query)
      .skip(pagination.limit * (pagination.page - 1))
      .limit(pagination.limit)
      .populate({path:'queries.question', select: 'question'});
    res.json({data: transformedDocs});
  } catch (error) {
    next(error);
  }
};

exports.listBy = async (req, res, next) => {
  try {
  	let pagination = Utils.getPagination(req.query);
    let query = {'is_active': true};
    const transformedDocs = await Document
      .find(query)
      .skip(pagination.limit * (pagination.page - 1))
      .limit(pagination.limit)
      .populate({path:'queries.question', select: 'question'});
    res.json({data: transformedDocs});
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
  	let data = req.body;
  	let doc = new Document(data);
  	let result = await doc.save();
    res.json({data: result});
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
  	let data = req.body;
  	let doc = await Document.findById(data._id);
  	let result = {};
  	if(doc) {
  		for(key in data) {
  			doc[key] = data[key];
  		}
  		result = await doc.save();
  	}
    res.json({data: result});
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
  	let data = req.body;
  	let doc = await Document.findById(data._id);
  	let result = {};
  	if(doc) {
  		doc.is_active = false;
  		result = await doc.save();
  	}
    res.json({data: result});
  } catch (error) {
    next(error);
  }
};