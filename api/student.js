const StudentController = (app, db) => {
  app.get("/students", (req, res) => {
    const students = [];
    db.collection("Students")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((student) => {
          students.push({ ...student.data(), id: student.id });
        });
      })
      .then(() => res.json(students));
  });

  app.post("/students", (req, res) => {
    const student = {
      name: req.body.name,
      DOB: req.body.DOB,
      class: req.body.class,
      class_grade: req.body.class_grade,
      grade_level: req.body.grade_level,
    };

    db.collection("Students")
      .add(student)
      .then((docRef) => res.json({ ...student, id: docRef.id }));
  });

  app.delete("/students/:id", (req, res) => {
    db.collection("Students")
      .doc(req.params.id)
      .delete()
      .then(() => {
        res.json({ msg: `Student with ID ${req.params.id} deleted` });
      })
      .catch(() => {
        res.status(400).json({ msg: `Error deleting student` });
      });
  });
};

module.exports = StudentController;
