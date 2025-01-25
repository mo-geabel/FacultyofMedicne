import express from "express";
import {
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  getAchievment,
  createAchievement,
  updateAchievement,
  deleteAchievement,
} from "../Controllers/AnnouncementC.js";

const router = express.Router();

// Announcement routes
router.get("/announcement", getAnnouncement);
router.post("/announcement", createAnnouncement);
router.patch("/announcement/:id", updateAnnouncement);
router.delete("/announcement/:id", deleteAnnouncement);

// Achievement routes
router.get("/achievement", getAchievment);
router.post("/achievement", createAchievement);
router.patch("/achievement/:id", updateAchievement);
router.delete("/achievement/:id", deleteAchievement);

export default router;
