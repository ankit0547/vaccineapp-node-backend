import StudentData from "../models/student.js";
import response from "../services/response/response.js";

export const getStudents = async (req, res) => {
  try {
    const allStudents = await StudentData.find();
    response.succesResponse(res, 200, allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  const student = req.body;
  const newStudent = new StudentData(student);
  try {
    await newStudent.save();
    response.succesResponse(res, 201, newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
