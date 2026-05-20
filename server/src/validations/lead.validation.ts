import { z } from "zod";

export const createLeadSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(2, "Name is required"),

    email: z
      .string()
      .email("Invalid email"),

    status: z.enum([
      "New",
      "Contacted",
      "Qualified",
      "Lost"
    ]),

    source: z.enum([
      "Website",
      "Instagram",
      "Referral"
    ])
  })
});

export const updateLeadSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),

    status: z.enum([
      "New",
      "Contacted",
      "Qualified",
      "Lost"
    ]).optional(),

    source: z.enum([
      "Website",
      "Instagram",
      "Referral"
    ]).optional()
  })
});