import express from "express";
import {
  getStudents,
  createStudent,
  uploadStudents,
} from "../controllers/student.js";

const router = express.Router();

router.get("/", getStudents);

router.post("/", createStudent);
router.post("/upload", uploadStudents);

export default router;
