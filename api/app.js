const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();

const db = require("./db.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const TeacherController = require('./teacher.js')
const ClassController = require('./class.js')
const StudentController = require('./student.js')

TeacherController(app, db)
ClassController(app, db)
StudentController(app, db)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
