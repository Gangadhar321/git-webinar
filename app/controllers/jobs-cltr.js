const _ = require('lodash')
const {validationResult} = require('express-validator')
const Job = require('../models/job-model')


const jobsCltr = {}

jobsCltr.create = async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }
    const body = _.pick(req.body,['title','description','location','deadLine','skills','experince','openings','qualification','salary'])
    const job =  new Job (body)
    try{
        
        job.recruiterId = req.user.id 
        await job.save()
        res.json(job)
    }
    catch(e){
        res.status(500).json(e)
    }

}

jobsCltr.listJobs = async(req,res)=>{
        try{
        
       const job = await Job.find()
        res.status(200).json(job)

    }catch(e){
        res.status(500).json(e)
        console.log(e)
    }
}

jobsCltr.updateJobs = async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }
    const body = _.pick(req.body,['title','description','location','deadLine','skills','experince','openings','qualification','salary'])
    
    const id = req.params.id
    try{
        let job
        if(req.user.role == 'recruiter'){
            job = await Job.findOneAndUpdate({_id: id, recruiterId: req.user.id}, body, {new: true})
        }
        if(!job){
           return res.status(400).json({errors:'job not found'})
        }
        res.json(job)
    }
    catch(e){
        res.status(500).json(e)
    }
}

jobsCltr.deleteJob = async (req,res) =>{
    const id = req.params.id
    try{
    const job = await Job.findOneAndDelete({_id:id,recruiterId:req.user.id})
    res.json(job)
    }
    catch(e){
    res.json(e)
    }
}

jobsCltr.listJobs = async (req,res) =>{
    const {skills} = req.query
    const {location} = req.query
    console.log(req.query)

    try{
        if(skills && location){
            const jobs = await Job.find({
                skills : {$in : skills},
                location : location
            })
            return res.status(200).json(jobs)
        }
        if(skills){
            const jobs = await Job.find({skills : {$in : skills}})
            return res.status(200).json(jobs)
        }
        if(location){
            const jobs = await Job.find({location : location})
            return res.status(200).json(jobs)
        }
        if(!skills || !location){
            return res.status(404).json({errors : "not found"})
        }

    }catch(e){
        res.status(500).json(e)
    }
}

 
module.exports = jobsCltr


