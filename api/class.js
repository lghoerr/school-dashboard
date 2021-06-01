const ClassController = (app, db) => {
  app.get("/classes", (req, res) => {
    const classes = [];
    db.collection("Classes")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((cls) => {
          classes.push({ ...cls.data(), id: cls.id });
        });
      })
      .then(() => res.json(classes));
  });

  app.post("/classes", (req, res) => {
    const cls = {
      teacher: req.body.teacher,
      student: req.body.address,
      DOB: req.body.DOB,
      email: `${req.body.name.replace(/\s/g, "").toLowerCase()}@lcps.k12.va.us`,
      class: req.body.class,
    };

    db.collection("Classes")
      .add(teacher)
      .then((docRef) => res.json({ ...teacher, id: docRef.id }));
  });
};

module.exports = ClassController;
