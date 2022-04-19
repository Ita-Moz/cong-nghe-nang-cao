const router = require('express').Router();
let controller = require('../controllers/admin_controller');
const accountController = require('../controllers/account_controller');

router.get('/dashboard', controller.show);
router.get('/add', controller.add_show);
router.post('/add',controller.add);
router.delete('/deleted/:id/:image',controller.deleted);
router.get('/search/:name',controller.search);
router.put('/update/:id',controller.update);

//------------------------------


//Quản lí tài khoản User, Admin
router.get('/login', accountController.login);
router.post('/login', accountController.addUser);
router.delete('/delete-user', accountController.delUser);


router.get('/dashboard/quan-ly-user', accountController.viewAccUser);



module.exports = router
