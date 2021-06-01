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
      students: req.body.students,
      room: req.body.room,
    };

    db.collection("Classes")
      .add(cls)
      .then((docRef) => res.json({ ...cls, id: docRef.id }));
  });

  app.delete("/classes/:id", (req, res) => {
    db.collection("Classes")
      .doc(req.params.id)
      .delete()
      .then(() => {
        res.json({ msg: `Class with ID ${req.params.id} deleted` });
      })
      .catch(() => {
        res.status(400).json({ msg: `Error deleting class` });
      });
  });
};

module.exports = ClassController;
