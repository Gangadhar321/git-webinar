const Job = require('../models/job-model');

const jobValidationSchema = {
    title: {
        notEmpty: {
            errorMessage: "Title is required",
        },
    },
    description: {
        notEmpty: {
            errorMessage: "Description is required",
        },
    },
    // recruiterId: {
    //     custom: {
    //         options: async function (value, { req }) {
    //             const job = await Job.findOne({ recruiterId: req.user.id });
    //             if (job) {
    //                 throw new Error('Job already created');
    //             } else {
    //                 return true;
    //             }
    //         }
    //     }
    // },
    skills: {
        isArray: {
            errorMessage: 'Skills are required',
        }
    },
    deadLine: {
        // custom: {
        //     options: async function (value) {
        //         const currentDate = new Date();
        //         const selectedDate = new Date(value);

        //         if (selectedDate <= currentDate) {
        //             throw new Error('Deadline must be in the future');
        //         } else {
        //             return true;
        //         }
        //     }
        // }
        isDate:{
            errorMessage:"date is required"
        }
    },
    location: {
        notEmpty: {
            errorMessage: 'location is required'
        }
    },

    "salary.min" : {
        notEmpty: {
            errorMessage: 'salary should be provided'
        },
        isNumeric: {
            errorMessage:'salary should be a number'
        }
    },
    "salary.max": {
        notEmpty: {
            errorMessage: 'salary is required'
        },
        isNumeric: {
            errorMessage: "salary should be a number"
        }
    },
    "experience.min": {
        notEmpty: {
            errorMessage: 'experience is required'
        },
        isNumeric: {
            errorMessage: 'experience should be a number'
        }
    },
    "experience.max": {
        notEmpty: {
            errorMessage: 'expirence is required'
        },
        isNumeric: {
            errorMessage: 'experience must be a number '
        }
    },

    openings: {
        notEmpty: {
            errorMessage: 'openings are required'
        },
        isNumeric: {
            errorMessage: 'openings must be a number'
        }
    },
    qualification: {
        notEmpty: {
            errorMessage: 'qualification is required'
        }
    }
};

module.exports = jobValidationSchema;


// title 
// description
// recruiterId 
// skills - [String] 
// deadLine - Date 
// experience - { min, max } 
// openings -  
// location - 
// salary - { min, max }
// qualification - 
// ok