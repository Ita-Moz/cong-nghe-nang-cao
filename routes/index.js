const router = require('express').Router();
let controller = require('../controllers/admin_controller');
const accountController = require('../controllers/account_controller');

router.get('/dashboard', controller.show);
router.get('/add', controller.add_show);
router.post('/add',controller.add);
router.delete('/deleted/:id',controller.deleted);
router.get('/search/:name',controller.search);
//------------------------------

router.get('/login', accountController.login);




//Quản lí tài khoản User, Admin
router.post('/login', accountController.addUser);


router.get('/dashboard/quan-ly-user', accountController.viewAccUser);



module.exports = router
