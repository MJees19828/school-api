const {createSchool,getSchool} = require("../controllers/schoolControllers")
const {Router} = require("express")
const router =Router();
router.post("/addschool", createSchool)
router.route("/school", getSchool)
module.exports=router