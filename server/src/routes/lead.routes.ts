import express from "express";

import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";

import {
  createLead,
  getLeads,
  getLead,
  updateLead,
  deleteLead,
  getLeadStats
} from "../controllers/lead.controller.js";

import { createLeadSchema, updateLeadSchema } from "../validations/lead.validation.js";

const router = express.Router();

router.use(protect);

router.post( "/", validate(createLeadSchema), createLead );

router.get("/", getLeads);

router.get("/stats",getLeadStats);

router.get("/:id", getLead);

router.put( "/:id", validate(updateLeadSchema), updateLead);

router.delete( "/:id", authorizeRoles("admin"), deleteLead);

export default router;