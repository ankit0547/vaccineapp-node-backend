import express from "express";
import {
  getDrives,
  createDrive,
  editDrive,
  deleteDrive,
} from "../controllers/vaccineDrive.js";

const router = express.Router();

router.get("/", getDrives);

router.post("/", createDrive);
router.delete("/", deleteDrive);

router.post("/update", editDrive);

export default router;
