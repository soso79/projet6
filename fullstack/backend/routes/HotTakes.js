const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');


const HotTakesCtrl = require('../controllers/HotTakes');

router.get('/', auth, HotTakesCtrl.getAllSauce);
router.post('/', auth, HotTakesCtrl.createSauce);
router.get('/:id', auth, HotTakesCtrl.getOneSauce);
router.put('/:id', auth, HotTakesCtrl.modifySauce);
router.delete('/:id', auth, HotTakesCtrl.deleteSauce);

module.exports = router;
