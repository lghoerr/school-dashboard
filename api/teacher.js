const TeacherController = (app, db) => {
  app.get("/teachers", (req, res) => {
    const teachers = [];
    db.collection("Teachers")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((teacher) => {
          teachers.push({ ...teacher.data(), id: teacher.id });
        });
      })
      .then(() => res.json(teachers));
  });

  app.post("/teachers", (req, res) => {
    const teacher = {
      name: req.body.name,
      address: req.body.address,
      DOB: req.body.DOB,
      email: `${req.body.name.replace(/\s/g, "").toLowerCase()}@lcps.k12.va.us`,
      class: req.body.class,
    };

    db.collection("Teachers")
      .add(teacher)
      .then((docRef) => res.json({ ...teacher, id: docRef.id }));
  });

  app.delete("/teachers/:id", (req, res) => {
    db.collection("Teachers")
      .doc(req.params.id)
      .delete()
      .then(() => {
        res.json({ msg: `Teacher with ID ${req.params.id} deleted` });
      })
      .catch(() => {
        res.status(400).json({ msg: `Error deleting teacher` });
      });
  });
};

module.exports = TeacherController
