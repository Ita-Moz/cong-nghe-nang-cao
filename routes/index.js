const router = require('express').Router()
let controller = require('../controllers/admin_controller')

router.get('/dashboard', controller.show);
router.get('/add', controller.add_show);
router.post('/add',controller.add);
router.delete('/deleted/:id',controller.deleted);
router.get('/search/:name',controller.search);

module.exports = router
