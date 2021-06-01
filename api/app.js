const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();

const db = require("./db.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/teachers", (req, res) => {
  const teachers = [];
  db.collection("Teachers")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((teacher) => {
        teachers.push({...teacher.data(), id: teacher.id});
      });
    })
    .then(() => res.json(teachers));
});

app.get("/students", (req, res) => {
  const students = [];
  db.collection("Students")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((student) => {
        students.push(student.data());
      });
    })
    .then(() => res.json(students));
});

app.get("/classes", (req, res) => {
  const classes = [];
  db.collection("Classes")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((cls) => {
        classes.push(cls.data());
      });
    })
    .then(() => res.json(classes));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
