const express = require('express');
const router = express.Router();

const skillsCtrl = require('../controllers/skills');

// GET /todos
router.get('/', skillsCtrl.index)

// GET /todos/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
