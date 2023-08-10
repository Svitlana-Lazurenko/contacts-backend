const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleMongooseError } = require('../middlewares');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: false }
);

contactSchema.post('save', handleMongooseError);

const addOrUpdateSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Missing required name field',
  }),
  email: Joi.string().required().messages({
    'any.required': 'Missing required email field',
  }),
  phone: Joi.string().required().messages({
    'any.required': 'Missing required phone field',
  }),
  favorite: Joi.boolean(),
});

const updateStatusContactSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addOrUpdateSchema,
  updateStatusContactSchema,
};

const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
  schemas,
};
