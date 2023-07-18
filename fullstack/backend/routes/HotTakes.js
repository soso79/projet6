const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();




const HotTakesCtrl = require('../controllers/HotTakes');

router.get('/', auth, HotTakesCtrl.getAllSauce);
router.post('/', auth, HotTakesCtrl.createSauce);
router.get('/:id', auth, HotTakesCtrl.getOneSauce);
router.put('/:id', auth, HotTakesCtrl.modifySauce);
router.delete('/:id', auth, HotTakesCtrl.deleteSauce);

module.exports = router;
