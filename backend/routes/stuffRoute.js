const express = require('express')
const router = express.Router();
const {getStuff, postStuff, putStuff, deleteStuff} = require('../controllers/stuffController');

router.route('/').get(getStuff).post(postStuff)
router.route('/:id').put(putStuff).delete(deleteStuff)

module.exports = router;