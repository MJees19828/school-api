const mongoose = require ("mongoose")


const schoolSchema = mongoose.Schema({
    schoolname:{
        type: String,
        required:true,
        unique: true
    },
    location:{
        type:String,
        required:true,
        unique: false,
    },
    Address:{
        gps: String,
        box:String
    },
category:{
    type: String,
    required:true,
},
facilities:{
    type: Array,
    required: true,
   
},
numOfStudents:{
    type: String,
    required:true
},
contact:{
    phone: String,
    email: String,
}
},{ 
    timestamps:true
})
const school=mongoose.model("school",schoolSchema)
module.exports=school