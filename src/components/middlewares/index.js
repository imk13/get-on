const { env } = require('../../config/vars');

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
const errHandler = (err, req, res, next) => {
  const response = {
    code: err.status,
    message: err.message,
    errors: err.errors,
    stack: err.stack,
  };

  if (env !== 'dev') {
    delete response.stack;
  }

  res.status(err.status);
  res.json(response);
};
exports.errHandler = errHandler;