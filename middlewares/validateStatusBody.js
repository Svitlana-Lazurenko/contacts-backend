const { HttpError } = require('../helpers');

const validateStatusBody = schema => {
  const func = (req, res, next) => {
    const body = req.body;
    const { error } = schema.validate(body);

    if (Object.keys(body).length === 0) {
      next(HttpError(400, 'Missing field favorite'));
    }

    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };

  return func;
};

module.exports = validateStatusBody;
