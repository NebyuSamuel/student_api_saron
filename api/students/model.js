const { Schema, model } = require("mongoose");

const studentSchema = new Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required"],
      maxlength: [100, "First name can not exceed 100 characters"],
      minlength: [1, "First name can not be less than 1 character"],
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
      maxlength: [100, "Last name can not exceed 100 characters"],
      minlength: [1, "Last name can not be less than 1 character"],
    },
    phone_number: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
    },
    registration_date: {
      type: Date,
      default: Date.now(),
    },
    student_status: {
      type: String,
      default: "Active",
      enum: {
        values: ["Active", "Inactive"],
        message: "Unknown student status",
      },
    },
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
    },
    timestamps: true,
  }
);

const Student = model("Student", studentSchema);

module.exports = Student;
