const express = require('express');
const ctrl = require('../../controllers/contacts');
const { validateBody, isValidId, validateStatusBody } = require('../../middlewares');
const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', ctrl.listContacts);

router.get('/:id', isValidId, ctrl.getContactById);

router.post('/', validateBody(schemas.addOrUpdateSchema), ctrl.addContact);

router.delete('/:id', isValidId, ctrl.removeContact);

router.put('/:id', isValidId, validateBody(schemas.addOrUpdateSchema), ctrl.updateContact);

router.patch(
  '/:id/favorite',
  isValidId,
  validateStatusBody(schemas.updateStatusContactSchema),
  ctrl.updateStatusContact
);

module.exports = router;
