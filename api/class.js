const ClassController = (app, db) => {
  app.get("/classes", async (req, res) => {
    const classes = [];
    const querySnapshot = await db.collection("Classes").get();

    for (let cls of querySnapshot.docs) {
      const students = [];
      await db
        .collection("Students")
        .where("__name__", "in", Object.keys(cls.data().students))
        .get()
        .then((studentQuery) => {
          studentQuery.forEach((student) => {
            fields = student.data();
            students.push({
              id: student.id,
              name: fields.name,
              class_grade: fields.class_grade,
            });
          });
        });
      classes.push({ ...cls.data(), students, id: cls.id });
    }
    res.json(classes);
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
