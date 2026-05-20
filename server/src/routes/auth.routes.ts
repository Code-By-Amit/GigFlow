import express from "express";

import {
  register,
  login,
  getCurrentUser
} from "../controllers/auth.controller.js";

import { validate } from "../middlewares/validate.middleware.js";

import {
  registerSchema,
  loginSchema
} from "../validations/auth.validation.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/register",
  validate(registerSchema),
  register
);
router.get(
  "/me",
  protect,
  getCurrentUser
);

router.post(
  "/login",
  validate(loginSchema),
  login
);

export default router;