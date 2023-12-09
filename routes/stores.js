const express = require('express');
const router = express.Router();
const { getStores,addStores } = require('../controllers/stores')


router.get('/', getStores)
router.post('/', addStores)

module.exports = router;