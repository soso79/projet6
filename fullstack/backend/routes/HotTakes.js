const express = require('express');
const router = express.Router();

const HotTakesCtrl = require('../controllers/HotTakes');

router.get('/', HotTakesCtrl.getAllSauce);
router.post('/', HotTakesCtrl.createSauce);
router.get('/:id', HotTakesCtrl.getOneSauce);
router.put('/:id', HotTakesCtrl.modifySauce);
router.delete('/:id', HotTakesCtrl.deleteSauce);

module.exports = router;
