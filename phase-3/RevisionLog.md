# Revision of Datastore
In this part, we mainly focus on adding attributes of **D1 Applicant datastore**, **D2 Recruitment unit datastore**, and **D3 Job posts datastore**.
The remaining datastore ( **D4 Interview Schedule**, **D5 Payment Log**, **D6 Chat History**, **D7 Admin datastore** ) will be the same.

**Note**: The border text is the one that is added to the datastore.
## Table of Contents

1. [D1 Applicant Datastore](#d1-applicant-datastore)
2. [D2 Recruitment Unit Datastore](#d2-recruitment-unit-datastore)
3. [D3 Job Posts Datastore](#d3-job-posts-datastore)
---
## D1 Applicant Datastore

### Attributes
- Applicant Information
  - **ApplicantID** (Add)
  - **ProfilePicture** (Add)
  - CitizenID (13-digit Thai national ID)
  - Email 
  - PhoneNo
  - Password
  - Picture (.png, .jpg)
  - Fname
  - Lname
  - DOB (YYYY-MM-DD)
  - Address
    - **HouseNumber** (Add)
    - **Street** (Add)
    - **Subdistrict** (Add)
    - **District** (Add)
    - **Province** (Add)
    - **PostalCode** (Add)
  - Education
  - Experience
  - CV_resume (pdf file)

---

## D2 Recruitment Unit Datastore

### Attributes 
- Recruitment Information
  - **RecruitmentUnitID** (Add)
  - CitizenID
  - Fname
  - Lname
  - Email 
  - Password 
  - **Picture** (Add)
- Company Detail
  - CompanyName
  - CompanyAddress
    - **HouseNumber** (Add)
    - **Street** (Add)
    - **Subdistrict** (Add)
    - **District** (Add)
    - **Province** (Add)
    - **PostalCode** (Add)
  - CompanyRegistrationNumber
  - Industry (e.g. IT, Finance)
  - Description 
  - PhoneNo
  - Website

---

## D3 Job Posts Datastore

### Attributes
- Job Information
  - **JobID** (Add)
  - CompanyName
  - JobTitle
  - TypeOfWork (e.g. Part time, Full time)
  - WorkFunction (e.g. Video Editing, Design, Coding)
  - Position (e.g. Admin, Frontend Developer)
  - Location
  - AgeRange (e.g. 20-35)
  - NumberOfAcceptances
  - StartingSalary (e.g. 15,000 THB)
  - WorkExperience (e.g. 3 years)
  - DegreeRequirements (e.g. Bachelor of Economics)
  - AdditionalDescription (i.e. Short text description)
  - PostStatus (Open, Closed)