import express from "express";
import {
  getDrives,
  createDrive,
  editDrive,
} from "../controllers/vaccineDrive.js";

const router = express.Router();

router.get("/", getDrives);

router.post("/", createDrive);

router.post("/update", editDrive);

export default router;
