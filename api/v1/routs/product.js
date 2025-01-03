const router=require('express').Router();
const{Get,GetById,AddNew,Update,Delete}=require('../controllers/product');
router.get('/',Get);
router.get('/:id',GetById);
router.post('/',AddNew);
router.put('/:id',Update);
router.delete('/:id',Delete);

module.exports=router;