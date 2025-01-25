import express from "express";
import {
  getEmergency,
  createEmergency,
  updateEmergency,
  deleteEmergency,
} from "../Controllers/EmergencyC.js";
const EmergencyRouter = express.Router();

EmergencyRouter.get("/", getEmergency);
EmergencyRouter.post("/", createEmergency);
EmergencyRouter.delete("/:id", deleteEmergency);
EmergencyRouter.patch("/:id", updateEmergency);

export default EmergencyRouter;
