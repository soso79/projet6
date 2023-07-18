const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');



const HotTakesCtrl = require('../controllers/HotTakes');

router.get('/', auth, HotTakesCtrl.getAllSauce);
router.post('/', auth, multer, HotTakesCtrl.createSauce);
router.get('/:id', auth, HotTakesCtrl.getOneSauce);
router.put('/:id', auth, HotTakesCtrl.modifySauce);
router.delete('/:id', auth, HotTakesCtrl.deleteSauce);

module.exports = router;
