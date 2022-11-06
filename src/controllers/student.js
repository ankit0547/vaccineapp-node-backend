import StudentData from "../models/student.js";
import response from "../services/response/response.js";

export const getStudents = async (req, res) => {
  try {
    const allStudents = await StudentData.find();
    console.log(allStudents);
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

export const deleteStudent = async (req, res) => {
  // res.send('Router is working');
  try {
    console.log(req.query.id);
    const deleteStudentResp = await StudentData.findByIdAndDelete(req.query.id);
    response.succesResponse(res, 200, deleteStudentResp);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editStudent = async (req, res) => {
  const student = req.body;
  console.log(req.body);

  try {
    const foundStudent = await StudentData.findOne({ _id: student.id });

    console.log(foundStudent);
    if (foundStudent) {
      let myquery = { _id: student.id };
      let newvalues = {
        $set: {
          date: student.date,
          studentName: student.studentName,
          vaccineStatus: student.vaccineStatus,
          vaccineName: student.vaccineName,
        },
      };
      const updatedDrive = await StudentData.updateOne(myquery, newvalues);
      res.status(201).json(updatedDrive);
    } else {
      response.errorResponse(res, 400, "User Not Found");
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const studentStatusUpdate = async (req, res) => {
  const student = req.body;

  try {
    const foundStudent = await StudentData.findOne({ _id: student.id });

    console.log(foundStudent);
    let myquery = { _id: student.id };
    let newvalues = {
      $set: {
        date: Date.now(),
        studentName: foundStudent.studentName,
        vaccineStatus: true,
        vaccineName: foundStudent.vaccineName,
      },
    };
    const updatedStudent = await StudentData.updateOne(myquery, newvalues);
    res.status(201).json(updatedStudent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const uploadStudents = async (req, res) => {
  const file = req.file;
  console.log("#FILE", file);
  // const newStudent = new StudentData(student);
  try {
    // await newStudent.save();
    // response.succesResponse(res, 201, newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const downloadReport = async (req, res) => {
  const file = req.file;
  console.log("#FILE", file);
  // const newStudent = new StudentData(student);
  try {
    // await newStudent.save();
    // response.succesResponse(res, 201, newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
