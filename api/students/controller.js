const Student = require("./dal");

exports.getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.getAllStudents();

    res.status(200).json({
      status: "SUCCESS",
      results: students.length,
      data: {
        students,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

exports.getStudent = async (req, res, next) => {
  try {
    const student = await Student.getStudent(req.params.id);
    if (!student) {
      return res.status(404).json({
        status: "FAIL",
        message: "There is no data with the specified id",
      });
    }

    res.status(200).json({
      status: "SUCCESS",
      data: {
        student,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

exports.createStudent = async (req, res, next) => {
  try {
    const { first_name, last_name, phone_number } = req.body;

    if (!first_name || !last_name || !phone_number) {
      return res.status(400).json({
        status: "ERROR",
        message: "Please provide the necessary fields",
      });
    }

    const newStudent = await Student.createStudent({
      first_name,
      last_name,
      phone_number,
    });

    res.status(200).json({
      status: "SUCCESS",
      message: "New student is successfully registered",
      data: {
        student: newStudent,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

exports.updateStudent = async (req, res, next) => {
  try {
    const { first_name, last_name, phone_number, student_status } = req.body;

    const student = await Student.updateStudent({
      data: { first_name, last_name, phone_number, student_status },
      id: req.params.id,
    });

    res.status(200).json({
      status: "SUCCESS",
      message: "Student info is successfully updated",
      data: {
        student,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

// Delete a student
exports.deleteStudent = async (req, res, next) => {
  try {
    await Student.deleteStudent(req.params.id);

    res.status(200).json({
      status: "SUCCESS",
      message: "A student is successfully deleted from the system",
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};
