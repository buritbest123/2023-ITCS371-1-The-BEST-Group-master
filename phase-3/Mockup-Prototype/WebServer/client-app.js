const express = require("express");
const session = require("express-session");
const path = require("path");
const port = 3030;
const app = express();
const axios = require("axios").default;
const {JSDOM} = require("jsdom");
const fs = require("fs");

const router = express.Router();

app.use(router);

// set the static file directory (for CSS/Images)
app.use("/", express.static(path.join(__dirname, "/static")));
app.use("/detail", express.static(path.join(__dirname, "/static")));

// This is needed for POST method
router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.get("/", (req, res) => {
  res.redirect("/home");
});

router.get("/login", (req, res) => {
  console.log("Request at /login");
  res.status(200).sendFile(path.join(__dirname, "/html/login.html"));
});

router.post("/login-submit", (req, res) => {
  console.log("Request at /login-submit");
  console.log(
    `Log in with username: ${req.body.emailPhone} password: ${req.body.password}`
  );

  axios
    .post(`http://localhost:3000/authenticate`, req.body)
    .then((response) => {
      const code = response.data.code;
      if (code === 1) {
        console.log("Login successful!");
        res.redirect("/home");
      } else {
        console.log("Wrong username or password.");
        fs.readFile(
          path.join(__dirname, "/html/login.html"),
          "utf8",
          (err, html) => {
            if (err) {
              throw err;
            }
            const dom = new JSDOM(html);
            const warning =
              dom.window.document.getElementById("incorrect-warning");

            warning.innerHTML = "Incorrect email/phone number or password";
            res.send(dom.serialize()); // sending the modified html file
          }
        );
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Internal Server Error");
    });
});

router.get("/home", (req, res) => {
  console.log("Request at /home");
  axios
    .get(`http://localhost:3000/selectalljob`, {responseType: "json"})
    .then((response) => {
      const data = response.data;
      console.log(data);
      // load the html file then add 5 recommended products from the database
      fs.readFile(
        path.join(__dirname, "/html/home.html"),
        "utf8",
        (err, html) => {
          if (err) {
            throw err;
          }
          const dom = new JSDOM(html);
          const output = dom.window.document.getElementById("recommend");

          output.innerHTML = ``;

          var child = ``;

          for (var i = 0; i < data.length; i++) {
            child += `
            <div class="card" style="margin-bottom:30px;">  
              <div class="card-body">
                <h5 class="card-title">${data[i].JobTitle} at ${data[i].CompanyName}</h5>
                <p class="card-text">${data[i].TypeOfWork}</p>
                <p class="card-text">Function: ${data[i].JobFunction}</p>
                <p class="card-text">Position: ${data[i].Position}</p>
                <p class="card-text">Sarting salary: ${data[i].StartingSalary} THB</p>
                <p class="card-text">
                  Our original classic ${data[i].AdditionalInfo}
                </p>
                <a href="/detail/${data[i].JobID}" class="btn btn-secondary">More Detail</a>
                <a href="#" class="btn btn-outline-danger"> Add to bookmark </a>
                <!-- .btn adds button style to the <a> tag -->
                <!-- .btn-secondary is the secondary color from Bootstrap making our button grey -->
              </div>
            </div>`;
          }

          // add page content with the retrieved data
          output.innerHTML += child + "</div>";
          res.send(dom.serialize()); // sending the modified html file
        }
      );
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Internal Server Error");
    });
});

// get detail page for each job
router.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  axios
    .get(`http://localhost:3000/selectjob/${id}`, {responseType: "json"})
    .then((response) => {
      console.log(response.data);
      const data = response.data;
      fs.readFile(
        path.join(__dirname, "/html/detail.html"),
        "utf8",
        (err, html) => {
          if (err) {
            throw err;
          }
          const dom = new JSDOM(html);
          const output = dom.window.document.getElementById("output");

          output.innerHTML = "";
          // add page content with the retrieved data
          output.innerHTML += `
                <div class="row">
                  <div class="col" style="padding-left: 30px;">
                    <h1 style="font-size: 30px;">${data.JobTitle} at ${data.CompanyName}</h1>
                    <p style="font-size: 18px;">${data.TypeOfWork}</p>
                    <p style="font-size: 18px;">Function: ${data.JobFunction}</p>
                    <p style="font-size: 18px;">Position: ${data.Position}</p>
                    <p style="font-size: 18px;">Number of acceptance: ${data.NumberOfAcceptance}</p>
                    <p style="font-size: 18px;"> Min Experience: ${data.MinWorkExperience} years</p>
                    <p style="font-size: 18px;"> Education: ${data.DegreeRequirements}</p>
                    <p style="font-size: 18x;">Age range: ${data.MinAge} - ${data.MaxAge}</p>
                    <p style="font-size: 18px;">Starting Salary: ${data.StartingSalary} THB</p>
                    <p style="font-size: 18px; text-align: justify;">"${data.AdditionalInfo}"
                    </p>
                    <a href="#" class="btn btn-outline-dark">Apply now</a>
                    <a href="#" class="btn btn-outline-danger"> Add to bookmark </a>
                  </div>
                `;
          res.send(dom.serialize()); // sending the modified html file
        }
      );
    });
});

// job announcement page
router.get("/job-announce", (req, res) => {
  console.log("Request at /job-announce");
  res.sendFile(path.join(__dirname, "/html/jobAnnounce.html"));
});

// Create a job announcement
router.post("/create-post", (req, res) => {
  var data = req.body;
  console.log(data);

  axios.post("http://localhost:3000/insertjob", data).then((response) => {
    res.redirect("/home");
  });

});

// Register
router.get("/register", (req, res) => {
  console.log("Request at /register");
  res.sendFile(path.join(__dirname, "/html/register.html"));
});

// Recruitment Unit Register
router.get("/applicantregister", (req, res) => {
  console.log("Request at /register");
  res.sendFile(path.join(__dirname, "/html/applicantRegister.html"));
});

// Applicant Register
router.get("/recruitmentregister", (req, res) => {
  console.log("Request at /register");
  res.sendFile(path.join(__dirname, "/html/recruitmentRegister.html"));
});

// Create a applicant account
router.post("/create-applicantaccount", (req, res) => {
  var data = req.body;
  console.log(data);

  axios.post("http://localhost:3000/insertapplicant", data).then((response) => {
    res.redirect("/login");
  });
});

// Create a recruitment unit account
router.post("/create-recruitmentaccount", (req, res) => {
  var data = req.body;
  console.log(data);

  axios.post("http://localhost:3000/insertrecruitment", data).then((response) => {
    res.redirect("/login");
  });
});

// unspecified path
app.get("*", function (req, res) {
  console.log("404");
  res.status(404).sendFile(path.join(__dirname, "/html/error.html"));
});

app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
