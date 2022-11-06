import express from "express";
import {
  getStudents,
  createStudent,
  uploadStudents,
  deleteStudent,
  editStudent,
  studentStatusUpdate,
} from "../controllers/student.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);
router.put("/", editStudent);

router.delete("/delete", deleteStudent);
router.put("/statusUpdate", studentStatusUpdate);
router.post("/upload", uploadStudents);

export default router;
