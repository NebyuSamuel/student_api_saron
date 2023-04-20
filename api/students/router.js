const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("./controller");

// router.get("/", getAllStudents);
// router.post("/", createStudent);
// router.get("/:id", getStudent);
// router.patch("/:id", updateStudent);

router.route("/").get(getAllStudents).post(createStudent);
router.route("/:id").get(getStudent).patch(updateStudent).delete(deleteStudent);

module.exports = router;
