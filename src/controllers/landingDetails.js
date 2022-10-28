import VaccineDriveData from "../models/vaccineDrive.js";
import StudentData from "../models/student.js";
import date from "date-and-time";
import response from "../services/response/response.js";

export const getLandingDetails = async (req, res) => {
  try {
    const from = new Date();
    const to = date.addDays(from, 7);
    const allDrives = await VaccineDriveData.find({
      driveDate: { $gt: from, $lt: to },
    });
    const allStudents = await StudentData.find();
    const vaccinatedStudents = allStudents.filter(
      (student) => student.vaccineStatus === true
    );
    const returnData = {
      drivesCount: allDrives.length,
      studentsCount: allStudents.length,
      vaccinatedStudents: vaccinatedStudents.length,
    };

    response.succesResponse(res, 200, returnData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
