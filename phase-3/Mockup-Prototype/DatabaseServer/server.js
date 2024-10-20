const express = require('express');
const app = express();
const dotenv = require('dotenv');

/* Config dotenv and router */
const router = express.Router();
app.use(router);
dotenv.config();

// This is needed for POST method
router.use(express.json());
router.use(express.urlencoded({extended: true}));

/* Connection to MySQL */
const mysql = require('mysql2');
var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected DB: " + process.env.MYSQL_DATABASE);
}); 

router.get('/', (req, res) => {
    res.send("Hello world");
})

router.get('/selectjob/:id', (req, res) => {
    let jID = req.params.id;

    if(!jID) {
        return res.status(400).send({error: true, message: 'Please provide job information'})
    }
    connection.query("SELECT * FROM jobAnnouncement WHERE JobID = ?", [jID], (error, results) => {
        if(error) throw error;
        res.json(results[0]);
        console.log(`Sending result of jID = ${jID}`);
    })
})

router.get('/selectalljob', (req, res) => {

    connection.query("SELECT * FROM jobAnnouncement", (error, results) => {
        if(error) throw error;
        return res.json(results);
    })
})

router.post('/insertjob', (req, res) => {
    let data = req.body;

    if(!data) {
        return res.status(400).send({error: true, message: 'Please provide job information'})
    }

    connection.query(`INSERT INTO jobannouncement SET ? `, data, (error, results) => {
        if(error) throw error;
        console.log("Inserting a job announcement");
        return res.send({error: false, data: results.affectedRows, message: 'New job has been added successfully'})
    })

})

router.delete('/deletejob/:id', (req, res) => {
    let jID = req.params.id;
    if(!jID) {
        return res.status(400).send({error: true, message: 'Please provide job information'})
    }
    connection.query("DELETE FROM jobannouncement WHERE JobID = ?", [jID], (error, results) => {
        if(error) throw error;
        console.log(`Deleting product pID = ${jID}`);
        if(results.affectedRows === 0) {
            return res.send({error: false, deleted: results.affectedRows, message: 'Job to be deleted does not exist'})
        }
        return res.send({error: false, deleted: results.affectedRows, message: 'Job has been deleted successfully'})
    })
})

router.post('/authenticate', (req, res) => {
    const emailPhone = req.body.emailPhone;
    const password = req.body.password;

    if (!emailPhone || !password) {
        return res.status(400).send({ error: true, message: 'Please provide login information' });
    }

    try {
        // Check in the Applicant table
        connection.query("SELECT ApplicantID, Email, PhoneNo, Password FROM Applicant", (applicantError, applicantResults) => {
            if (applicantError) {
                console.error(applicantError);
                return res.status(500).json({ error: true, message: 'Internal server error' });
            }

            for (var i = 0; i < applicantResults.length; i++) {
                if ((applicantResults[i].Email === emailPhone || applicantResults[i].PhoneNo === emailPhone) && applicantResults[i].Password === password) {
                    console.log("Authentication: match (Applicant)");
                    return res.json({ "status": "match", "code": 1, "userType": "applicant", "userID": applicantResults[i].ApplicantID });
                }
            }

            // Check in the RecruitmentUnit table
            connection.query("SELECT UnitID, Email, PhoneNo, Password FROM RecruitmentUnit", (recruitmentError, recruitmentResults) => {
                if (recruitmentError) {
                    console.error(recruitmentError);
                    return res.status(500).json({ error: true, message: 'Internal server error' });
                }

                for (var j = 0; j < recruitmentResults.length; j++) {
                    if ((recruitmentResults[j].Email === emailPhone || recruitmentResults[j].PhoneNo === emailPhone) && recruitmentResults[j].Password === password) {
                        console.log("Authentication: match (RecruitmentUnit)");
                        return res.json({ "status": "match", "code": 1, "userType": "recruitment", "userID": recruitmentResults[j].UnitID });
                    }
                }

                console.log("Authentication: no match");
                return res.json({ "status": "no match", "code": 0 });
            });
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: true, message: 'Internal server error' });
    }
});


// This will be used for register
router.post('/insertapplicant', (req, res) => {
    let data = req.body;

    if(!data) {
        return res.status(400).send({error: true, message: 'Please provide applicant information'})
    }

    connection.query(`INSERT INTO applicant SET ? `, data, (error, results) => {
        if(error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'New applicant has been added successfully'})
    })
})

router.post('/insertrecruitment', (req, res) => {
    let data = req.body;

    if(!data) {
        return res.status(400).send({error: true, message: 'Please provide recruitment unit information'})
    }

    connection.query(`INSERT INTO recruitmentunit SET ? `, data, (error, results) => {
        if(error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'New recruitment unit has been added successfully'})
    })
})

// router.delete('/deleteadmin/:id', (req, res) => {
//     let aID = req.params.id;
//     if(!aID) {
//         return res.status(400).send({error: true, message: 'Please provide product information'})
//     }
//     connection.query("DELETE FROM administrator WHERE aID = ?", [aID], (error, results) => {
//         if(error) throw error;
//         console.log(`Deleting admin aID = ${aID}`);
//         if(results.affectedRows === 0) {
//             return res.send({error: false, deleted: results.affectedRows, message: 'Admin to be deleted does not exist'})
//         }
//         return res.send({error: false, deleted: results.affectedRows, message: 'Admin has been deleted successfully'})
//     })
// })

app.listen(process.env.PORT, function() {
    console.log("Server listening on port: " + process.env.PORT);
});