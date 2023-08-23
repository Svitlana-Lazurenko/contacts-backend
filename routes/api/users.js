const express = require('express');
const ctrl = require('../../controllers/users');
const {
  validateBody,
  validateSubscriptionBody,
  authenticate,
  upload,
} = require('../../middlewares');
const { schemas } = require('../../models/user');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch(
  '/:id/subscription',
  authenticate,
  validateSubscriptionBody(schemas.updateSubscriptionUserSchema),
  ctrl.updateSubscriptionUser
);

router.patch('/avatars', authenticate, upload.single('avatar'), ctrl.updateAvatar);

module.exports = router;
