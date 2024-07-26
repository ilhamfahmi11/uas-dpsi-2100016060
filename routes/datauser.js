const express = require('express');
const router = express.Router();
const dataUserController = require('../controllers/datauser');

router.post('/', dataUserController.create);
router.get('/', dataUserController.findAll);
router.get('/:id', dataUserController.findOne);
router.put('/:id', dataUserController.update);
router.delete('/:id', dataUserController.delete);

module.exports = router;
