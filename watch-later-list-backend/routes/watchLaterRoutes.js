const express = require('express');
const router = express.Router();
const watchLaterController = require('../controllers/watchLaterController');

router.post('/', watchLaterController.createRecord);
router.get('/', watchLaterController.getAllRecords);
router.put('/:id', watchLaterController.updateRecord);
router.delete('/:id', watchLaterController.deleteRecord);

module.exports = router;