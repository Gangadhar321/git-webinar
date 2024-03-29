require('dotenv').config() 
const express = require('express')
const app = express()
const port = 3031
const configureDB = require('./config/db')
const usersCltr = require('./app/controllers/users-cltr')
const recruitersCltr = require('./app/controllers/recruiters-cltr')
const jobsCltr = require ('./app/controllers/jobs-cltr')

const { checkSchema } = require('express-validator')

const { registerSchema, loginSchema} = require('./app/validations/user-validations')
const { authenticateUser, authorizeUser} = require('./app/middlewares/auth')
const recruiterValidationSchema = require('./app/validations/recruiter-validation')
const jobValidationSchema = require ('./app/validations/job-validation')


configureDB() 
app.use(express.json())

app.post('/api/users/register', checkSchema(registerSchema),  usersCltr.register)
app.post('/api/users/login', checkSchema(loginSchema), usersCltr.login)
app.get('/api/users/account', authenticateUser, usersCltr.account)

app.post('/api/recruiters', authenticateUser, authorizeUser(['recruiter']),checkSchema(recruiterValidationSchema), recruitersCltr.create)

app.post('/api/jobs', authenticateUser,authorizeUser(['recruiter']),checkSchema(jobValidationSchema),jobsCltr.create)
app.get('/api/jobs',jobsCltr.listJobs)
app.put('/api/jobs/:id',authenticateUser,authorizeUser(['recruiter']),checkSchema(jobValidationSchema),jobsCltr.updateJobs)
app.delete('/api/jobs/:id',authenticateUser,authorizeUser(['recruiter']),checkSchema(jobValidationSchema),jobsCltr.deleteJob)


app.get('/api/jobs/search',jobsCltr.listJobs)


app.listen(port, () => {
    console.log('server running on port', port)
})