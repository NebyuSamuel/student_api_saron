const StudentModel = require("./model");

class Student {
  // Create a student
  static async createStudent(data) {
    try {
      const newStudent = StudentModel.create({
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: data.phone_number,
      });
      return newStudent;
    } catch (error) {
      throw error;
    }
  }

  // Get all students
  static async getAllStudents() {
    try {
      const students = await StudentModel.find();
      return students;
    } catch (error) {
      throw error;
    }
  }

  // Get a student
  static async getStudent(id) {
    try {
      const student = await StudentModel.findById(id);
      return student;
    } catch (error) {
      throw error;
    }
  }

  // Update a student
  static async updateStudent({ data, id }) {
    try {
      const student = await StudentModel.findByIdAndUpdate(
        id,
        {
          first_name: data.first_name,
          last_name: data.last_name,
          phone_number: data.phone_number,
          student_status: data.student_status,
        },
        { runValidators: true, new: true }
      );
      return student;
    } catch (error) {
      throw error;
    }
  }

  // Delete a student
  static async deleteStudent(id) {
    try {
      await StudentModel.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Student;
