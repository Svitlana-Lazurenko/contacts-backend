const { HttpError } = require('../helpers');

const validateBody = schema => {
  const func = (req, res, next) => {
    const body = req.body;
    const requiredFields = ['name', 'email', 'phone'];
    const missingField = requiredFields.find(field => !(field in body));
    const { error } = schema.validate(body);

    if (Object.keys(body).length === 0) {
      next(HttpError(400, 'Missing fields'));
    }

    if (missingField) {
      next(HttpError(400, `Missing required ${missingField} field`));
    }

    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };

  return func;
};

module.exports = validateBody;
