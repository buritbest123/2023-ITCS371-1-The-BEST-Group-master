DROP DATABASE IF EXISTS JobCenter;
CREATE DATABASE IF NOT EXISTS JobCenter;
USE JobCenter;

-- Create the JobAnnouncement table with Location, JobFunction, and CompanyName columns
CREATE TABLE IF NOT EXISTS JobAnnouncement (
    JobID INT PRIMARY KEY AUTO_INCREMENT,
    JobTitle VARCHAR(255) NOT NULL,
    TypeOfWork VARCHAR(20) NOT NULL,
    Position VARCHAR(50) NOT NULL,
    MinAge INT,
    MaxAge INT,
    NumberOfAcceptance INT,
    StartingSalary DECIMAL(10, 2),
    MinWorkExperience INT,
    DegreeRequirements VARCHAR(100),
    Location VARCHAR(255),
    JobFunction VARCHAR(50),
    CompanyName VARCHAR(255),
    AdditionalInfo TEXT
);

CREATE TABLE IF NOT EXISTS Applicant (
    ApplicantID INT PRIMARY KEY AUTO_INCREMENT,
    CitizenID CHAR(13) UNIQUE NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    PhoneNo VARCHAR(15) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Picture BLOB,
    Fname VARCHAR(50) NOT NULL,
    Lname VARCHAR(50) NOT NULL,
    DOB DATE NOT NULL,
    HouseNumber VARCHAR(10),
    Street VARCHAR(255),
    Subdistrict VARCHAR(50),
    District VARCHAR(50),
    Province VARCHAR(50),
    PostalCode VARCHAR(10),
    Education VARCHAR(255),
    Experience VARCHAR(255)
);

-- Create the RecruitmentUnit table
CREATE TABLE IF NOT EXISTS RecruitmentUnit (
    UnitID INT PRIMARY KEY AUTO_INCREMENT,
    CitizenID CHAR(13) UNIQUE NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Fname VARCHAR(50) NOT NULL,
    Lname VARCHAR(50) NOT NULL,
    CompanyName VARCHAR(255) NOT NULL,
    HouseNumber VARCHAR(10),
    Street VARCHAR(255),
    Subdistrict VARCHAR(50),
    District VARCHAR(50),
    Province VARCHAR(50),
    PostalCode VARCHAR(10),
    Picture BLOB, 
    RegistrationNumber VARCHAR(50) UNIQUE NOT NULL,
    Industry VARCHAR(50) NOT NULL,
    Description TEXT,
    PhoneNo VARCHAR(15) NOT NULL,
    Website VARCHAR(255)
);

-- Insert sample data into tables
INSERT INTO JobAnnouncement (JobTitle, TypeOfWork, Position, MinAge, MaxAge, NumberOfAcceptance, StartingSalary, MinWorkExperience, DegreeRequirements, Location, JobFunction, CompanyName, AdditionalInfo)
VALUES
    ('Software Engineer', 'Full-Time', 'Developer', 25, 35, 3, 80000.00, 3, 'Bachelor''s Degree in Computer Science', '123 Main St, Cityville', 'Software Development', 'Tech Solutions Inc.', 'Exciting opportunity to join a dynamic team. As a Software Engineer, you will be responsible for designing and developing cutting-edge software solutions, collaborating with cross-functional teams to deliver high-quality products.'),
    ('Marketing Specialist', 'Part-Time', 'Marketing Coordinator', 22, 30, 2, 50000.00, 2, 'Bachelor''s Degree in Marketing or related field', '456 Oak St, Townsville', 'Marketing', 'Marketing Innovations Ltd.', 'Explore your creativity as a Marketing Specialist. This part-time role involves developing and executing marketing strategies, managing social media channels, and contributing to the overall brand presence. Experience in social media marketing is preferred.'),
    ('Customer Support Representative', 'Full-Time', 'Support Specialist', 20, 40, 5, 45000.00, 1, 'High School Diploma or equivalent', '789 Pine St, Villagetown', 'Customer Support', 'CustomerCare Solutions LLC', 'Join our customer support team and make a difference! As a Support Specialist, you will assist customers with inquiries, provide product information, and ensure a positive customer experience. Excellent communication skills and a customer-centric approach are required.'),
    ('Financial Analyst', 'Full-Time', 'Financial Analyst', 28, 45, 2, 70000.00, 5, 'Bachelor''s Degree in Finance or related field', '101 Cedar St, Metropolis', 'Finance', 'Financial Insights Corp.', 'Unlock your potential as a Financial Analyst. This full-time position involves financial modeling, data analysis, and preparing reports to support strategic decision-making. A Bachelor''s Degree in Finance or a related field is required, and a CPA certification is a plus.'),
    ('Graphic Designer', 'Part-Time', 'Graphic Designer', 24, 35, 1, 60000.00, 3, 'Bachelor''s Degree in Graphic Design or equivalent', '202 Elm St, Design City', 'Graphic Design', 'Creative Designs Co.', 'Express your creativity as a Graphic Designer! This part-time role offers the opportunity to work on diverse design projects, from branding to digital graphics. A Bachelor''s Degree in Graphic Design or equivalent is required, and proficiency in Adobe Creative Suite is essential.');

INSERT INTO Applicant (CitizenID, Email, PhoneNo, Password, Picture, Fname, Lname, DOB, HouseNumber, Street, Subdistrict, District, Province, PostalCode, Education, Experience)
VALUES
    ('1234567890123', 'applicant1@example.com', '0812345678', 'test123', NULL, 'John', 'Doe', '1990-05-15', '456', 'Oak St', 'Townsville', 'Cityville', 'Provinceville', '12345', 'Bachelor''s in Computer Science', '2 years as Software Developer'),
    ('9876543210987', 'applicant2@example.com', '0898765431', 'hashed_password2', NULL, 'Jane', 'Smith', '1988-08-22', '789', 'Pine St', 'Villagetown', 'Townsville', 'Villagetown', '54321', 'Master''s in Marketing', '3 years in Marketing Coordinator role'),
    ('4567890123456', 'applicant3@example.com', '0855566677', 'hashed_password3', NULL, 'Robert', 'Johnson', '1995-02-10', '101', 'Cedar St', 'Metropolis', 'Bigcity', 'Megatown', '67890', 'Bachelor''s in Finance', '1 year as Financial Analyst');

INSERT INTO RecruitmentUnit (CitizenID, Email, Password, Fname, Lname, CompanyName, HouseNumber, Street, Subdistrict, District, Province, PostalCode, Picture, RegistrationNumber, Industry, Description, PhoneNo, Website)
VALUES
    ('1234567890124', 'recruitment1@example.com', 'test123', 'Michael', 'Anderson', 'Tech Solutions Inc.', '456', 'Main St', 'Cityville', 'Townsville', 'Provinceville', '12345', NULL, 'ABC123457', 'IT', 'Leading IT solutions provider', '0823456789', 'http://techsolutions.com'),
    ('9876543210988', 'recruitment2@example.com', 'hashed_password2', 'Emma', 'Williams', 'Marketing Innovations Ltd.', '789', 'Oak St', 'Villagetown', 'Townsville', 'Villagetown', '54321', NULL, 'DEF789013', 'Marketing', 'Innovative marketing agency', '0812345688', 'http://marketinginnovations.com'),
    ('4567890123457', 'recruitment3@example.com', 'hashed_password3', 'David', 'Taylor', 'Financial Insights Corp.', '101', 'Cedar St', 'Bigcity', 'Metropolis', 'Megatown', '67890', NULL, 'GHI345679', 'Finance', 'Financial consulting firm', '0855663778', 'http://financialinsightscorp.com');

