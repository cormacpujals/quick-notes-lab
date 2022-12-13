const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const notesCtrl = require('../../controllers/api/notes');

router.post('/', notesCtrl.create);

module.exports = router;