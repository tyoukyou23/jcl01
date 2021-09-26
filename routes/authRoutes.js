const { Router } = require("express")
const router = Router()
const AuthController = require("../controller/authController")

router.post("/signup",AuthController.signup_post)
router.post("/login",AuthController.login_post)
router.get("/logout",AuthController.logout_get)

module.exports = router