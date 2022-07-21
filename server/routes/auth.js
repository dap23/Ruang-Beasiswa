const router = require("express").Router();
const Auth = require("../controllers/auth");

router.post("/register", Auth.signUp);

router.post("/login", Auth.signIn);

module.exports = router;
