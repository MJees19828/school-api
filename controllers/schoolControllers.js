const school = require("../models/schoolSchema")
const createSchool=(req,res) =>{
    const newSchool = new school({
        schoolname:req.body.schoolname,
        location:req.body.location,
        Address: req.body.Address,
        category: req.body.category,
        facilities: req.body.facilities,
        numOfStudents: req.body.numOfStudents,
        contact: req.body.contact,
    })
    newSchool.save();
    res.status(200).json(newSchool)
}
module.exports={createSchool}