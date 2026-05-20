import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { AuthRequest } from "../middlewares/auth.middleware.js";

const generateToken = (userId: string, role: string) => {
  return jwt.sign(
    { userId, role },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );
};

export const register = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new ApiError(400, "User already exists");
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || "sales"
    });

    const token = generateToken(
      user._id.toString(),
      user.role
    );

    return res.status(201).json(new ApiResponse(201, { token, user }, "User registered successfully"));
  }
);

export const login = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("email password");

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid credentials");
    }

    const token = generateToken(
      user._id.toString(),
      user.role
    );

    res.cookie("token", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
    })

    return res.status(200).json(
      new ApiResponse(200, { token, user }, "Login successful")
    );
  }
);

export const getCurrentUser = asyncHandler(
    async (req: AuthRequest, res: Response) => {
      const user = await User.findById(req.user?.userId).select("-password");

      if (!user) {
        throw new ApiError(404, "User not found");
      }

      return res.status(200).json(
        new ApiResponse(200, user, "Current user fetched")
      );
    }
  );