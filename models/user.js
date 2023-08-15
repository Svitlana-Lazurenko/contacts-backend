const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleMongooseError } = require('../helpers');

const subscriptionList = ['starter', 'pro', 'business'];

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscriptionList,
      default: 'starter',
    },
    token: String,
  },
  { versionKey: false, timestamps: false }
);

userSchema.post('save', handleMongooseError);

const registerSchema = Joi.object({
  subscription: Joi.string().valid(...subscriptionList),
  email: Joi.string().required(),
  password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).required(),
});

const updateSubscriptionUserSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required(),
});

const schemas = {
  registerSchema,
  loginSchema,
  updateSubscriptionUserSchema,
};

const User = model('user', userSchema);

module.exports = {
  User,
  schemas,
};
