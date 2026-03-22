const router = require("express").Router();
const { Signup, Login, Verify } = require('../Controllers/AuthController')

router.post('/signup', Signup)
router.post('/login', Login)
router.get('/verify', Verify)

module.exports = router;
