const express = require('express');
const ctrl = require('../../controllers/contacts');
const { validateBody, isValidId, validateStatusBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', authenticate, ctrl.listContacts);

router.get('/:id', authenticate, isValidId, ctrl.getContactById);

router.post('/', authenticate, validateBody(schemas.addOrUpdateSchema), ctrl.addContact);

router.delete('/:id', authenticate, isValidId, ctrl.removeContact);

router.put(
  '/:id',
  authenticate,
  isValidId,
  validateBody(schemas.addOrUpdateSchema),
  ctrl.updateContact
);

router.patch(
  '/:id/favorite',
  isValidId,
  validateStatusBody(schemas.updateStatusContactSchema),
  ctrl.updateStatusContact
);

module.exports = router;
