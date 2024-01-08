const mongoose = require('mongoose')
const{model,Schema}= require("mongoose")

const  jobSchema = new Schema({
  title : String,
  description : String,
  recruiterId:{
    type: Schema.Types.ObjectId,
    ref: 'Recruiter'
  },
  skills : [String],
  deadLine : Date,
  experience : {
    min :Number,
    max :Number
},
  openings : String ,
  location  : String ,
  salary : {
    min: Number ,
     max : Number
},
  qualification  : String
},{ timestamps : true })

const Job =model("Job",jobSchema)

module.exports = Job

