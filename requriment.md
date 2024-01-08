*Online Job Portal (MERN Stack)*

*Objective*: Develop a basic version of an online job portal with functionalities for candidates and recruiters, including the tracking of applicant status.

*Technologies*: MongoDB, Express.js, React, Node.js

### Assignment Overview

Your task is to build a basic online job portal where candidates can view, apply for jobs, and track their application status, while recruiters can post job openings and manage applications.

### 1. Initial Setup

- Initialize a Node.js project with an Express.js server.
- Set up a MongoDB database for storing user and job data.
- Create a React application for the front-end.

### 2. User Authentication

- Implement user registration and login functionalities for both candidates and recruiters.
- Use authentication (JWT or similar) to secure routes.
- Implement basic authorization to ensure candidates and recruiters access only relevant functionalities.

### 3. User Profiles

*Candidates*:
- Allow candidates to create and edit their profiles with personal information.

*Recruiters*:
- Enable recruiters to create and manage profiles, including company details.

### 4. Job Management

*Recruiters*:
- Create a form for posting job openings with necessary details.
- Develop a dashboard to view and manage job postings.

*Candidates*:
- Implement a job search feature.
- Allow candidates to view job details, apply for jobs, and track the status of their applications.

### 5. Application Status Tracking

- Enable candidates to view the status of their applications (e.g., submitted, under review, rejected, or accepted).
- Allow recruiters to update the status of each application received.

### 6. Frontend Development

- Design a basic, user-friendly interface for both user types.
- Implement efficient navigation and routing.

### 7. Testing

- Conduct basic tests to ensure functionality, particularly the application status feature.

### 8. Documentation

- Document your code thoroughly.
- Create a README file with setup and run instructions.


## API Documentation

Adhering to RESTful standards and using nested routes where appropriate, the APIs for the online job portal can be redesigned as follows:

| No. | API Name | Endpoint | Method | Authentication Required | Description |
| --- | -------- | -------- | ------ | ----------------------- | ----------- |
| 1. | Register User | /api/users/register | POST | No | Registers a new user (candidate or recruiter). |
| 2. | Login User | /api/users/login | POST | No | Authenticates a user and returns a token. |
| 3. | Get User Profile | /api/users/account | GET | Yes | Retrieves the profile of a logged-in user. |
| 4. | Update User Profile | /api/users/account | PUT | Yes | Updates the profile of a logged-in user. |
| 5. | Upload Resume | /api/candidates/resume | POST | Yes | Uploads a resume for the candidate. |
| 6. | Create Job Posting | /api/jobs | POST | Yes (Recruiters) | Allows a recruiter to post a new job. |
| 7. | Get Job Listings | /api/jobs | GET | No | Retrieves a list of jobs. |
| 8. | Get Job Details | /api/jobs/{jobId} | GET | No | Retrieves details of a specific job. |
| 9. | Update Job Post | /api/jobs/{jobId} | PUT | Yes (Recruiters) | Allows a recruiter to update a job post. |
| 10. | Delete Job Post | /api/jobs/{jobId} | DELETE | Yes (Recruiters) | Allows a recruiter to delete a job post. |
| 11. | Submit Job Application | /api/jobs/{jobId}/applications | POST | Yes (Candidates) | Allows a candidate to apply for a job. |
| 12. | Get Applications for a Job | /api/jobs/{jobId}/applications | GET | Yes (Recruiters) | Allows a recruiter to view applications for a specific job. |
| 13. | Get Candidate's Applications | /api/users/{userId}/applications | GET | Yes (Candidates) | Allows a candidate to view their job applications. |
| 14. | Update Application Status | /api/applications/{applicationId} | PUT | Yes (Recruiters) | Allows a recruiter to update the status of a job application. |
| 15. | Search Jobs | /api/jobs/search | GET | No | Allows searching for jobs based on different criteria. |
| 16. | Candidate Profile | /api/candidates/:id | GET | No | Retrieves candiate details |
| 17. | Recruiter Profile | /api/recruiters/:id | GET | No | Retrieves recruiter details |

## Models

For the online job portal described in the take-home assignment, several key data models are essential to effectively manage the functionalities of the portal. Here’s a breakdown of the required data models:

### 1. User Model

This model will have two variants - one for candidates and one for recruiters, as their required data attributes may differ.

*Common Attributes for Both*:
- User ID (unique identifier)
- Name
- Email
- Password (hashed for security)
- Account Type (Candidate/Recruiter)

*Additional Attributes for Candidates*:
- Resume/CV (could be a file path or URL)
- Professional Summary
- Skills - []
- Education -  institution, degree, fieldOfStudy, startDate,endDate
- Work Experience -  company, role, startDate, endDate, description
- Portfolio - title, description, link

*Additional Attributes for Recruiters*:
- Company Name
- Company Details (like industry type, size)
- Contact Information
- Company Logo (file path or URL)

### 2. Job Model

This model contains information about the job postings.

*Attributes*:
- Job ID (unique identifier)
- Title
- Description
- Required Skills
- Location
- Salary Range
- Recruiter ID (linked to the User Model)
- Post Date
- Application Deadline

### 3. Application Model

This model manages the job applications submitted by candidates.

*Attributes*:
- Application ID (unique identifier)
- Job ID (linked to Job Model)
- Candidate ID (linked to User Model)
- Cover Letter
- Application Date
- Status (e.g., submitted, under review, rejected, accepted)
- Additional Information (if any)

### General Considerations:

- *Relationships*: Establish clear relationships between models. For example, the Application Model should reference both the Job and User models.
- *Schema Design*: Design schemas in MongoDB keeping in mind the nature of data and the queries that will be run against them.
- *Data Integrity*: Ensure data integrity, especially in user authentication and job application processes.
- *Security*: Pay special attention to securing sensitive data, particularly in the User Model.