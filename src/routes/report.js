import express from "express";
import { getFilteredData } from "../controllers/reportDetails.js";

const router = express.Router();

router.get("/generate-report", getFilteredData);

export default router;
