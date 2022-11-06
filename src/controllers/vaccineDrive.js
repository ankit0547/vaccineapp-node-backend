import VaccineDriveData from "../models/vaccineDrive.js";
import response from "../services/response/response.js";

export const getDrives = async (req, res) => {
  try {
    const allDrives = await VaccineDriveData.find();
    response.succesResponse(res, 200, allDrives);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createDrive = async (req, res) => {
  const drive = req.body;
  const newDrive = new VaccineDriveData(drive);
  try {
    await newDrive.save();
    response.succesResponse(res, 201, newDrive);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const editDrive = async (req, res) => {
  const drive = req.body;
  try {
    const myquery = { _id: drive.id };
    const newvalues = {
      $set: {
        numberOfVaccines: drive.numberOfVaccines,
        driveDate: drive.driveDate,
      },
    };
    const updatedDrive = await VaccineDriveData.updateOne(myquery, newvalues);
    response.succesResponse(res, 201, updatedDrive.ok);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteDrive = async (req, res) => {
  // res.send('Router is working');
  try {
    console.log(req.query.id);
    const deleteStudentResp = await VaccineDriveData.findByIdAndDelete(
      req.query.id
    );
    response.succesResponse(res, 200, deleteStudentResp);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
