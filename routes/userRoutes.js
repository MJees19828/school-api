const {Router} = require("express")
const {addUser, loginUser, getUser} = require("../controllers/userControllers")

const router = Router()
router.post("/register", addUser).post('/login', loginUser)
router.route('/').get(getUser)
module.exports =router