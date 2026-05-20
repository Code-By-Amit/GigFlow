import { Request, Response } from "express";
import { SortOrder } from "mongoose";
import Lead, { LeadSource, LeadStatus } from "../models/lead.model.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { AuthRequest } from "../middlewares/auth.middleware.js";

export const createLead = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { name, email, status, source } = req.body;
    const lead = await Lead.create({ name, email, status, source,createdBy:req?.user?.userId });
    return res.status(201).json(new ApiResponse(201, lead, "Lead created successfully")
    );
}
);

export const getLeads = asyncHandler(
    async (req: Request, res: Response) => {
        const { status, source, search, sort = "latest", page = "1" } = req.query;

        const limit = 10;
        const currentPage = Number(page);

        const query: any = {};

        if (status) {
            query.status = status;
        }

        if (source) {
            query.source = source;
        }

        if (search) {
            query.$or = [
                {
                    name: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    email: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ];
        }

        const sortOption : Record<string , SortOrder>= sort === "oldest" ? { createdAt: 1 } : { createdAt: -1 };

        const total = await Lead.countDocuments(query);

        const leads = await Lead.find(query)
            .sort(sortOption)
            .skip((currentPage - 1) * limit)
            .limit(limit);

        return res.status(200).json(
            new ApiResponse(200,
                {
                    leads,
                    pagination: {
                        total,
                        currentPage,
                        totalPages: Math.ceil(
                            total / limit
                        ),
                        limit
                    }
                },
                "Leads fetched successfully"
            )
        );
    }
);

export const getLead = asyncHandler(
    async (req: Request, res: Response) => {

        const lead = await Lead.findById(req.params.id);

        if (!lead) {
            throw new ApiError(404, "Lead not found");
        }

        return res.status(200).json(
            new ApiResponse(200, lead, "Lead fetched successfully")
        );
    }
);

export const updateLead = asyncHandler(
    async (req: Request, res: Response) => {
        const { name, email, status, source } = req.body;
        const lead = await Lead.findByIdAndUpdate(req.params.id, { name, email, status, source }, { new: true, runValidators: true });

        if (!lead) {
            throw new ApiError(404, "Lead not found");
        }

        return res.status(200).json(
            new ApiResponse(200, lead, "Lead updated successfully")
        );
    }
);

export const deleteLead = asyncHandler(
    async (req: Request, res: Response) => {
        const lead = await Lead.findByIdAndDelete(req.params.id);

        if (!lead) {
            throw new ApiError(404, "Lead not found");
        }

        return res.status(200).json(
            new ApiResponse(200, null, "Lead deleted successfully")
        );
    }
);

export const getLeadStats =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const total = await Lead.countDocuments();
      const newLeads = await Lead.countDocuments({ status: LeadStatus.NEW });
      const contacted = await Lead.countDocuments({ status: LeadStatus.CONTACTED });
      const qualified = await Lead.countDocuments({ status: LeadStatus.QUALIFIED });
      const lost = await Lead.countDocuments({ status: LeadStatus.LOST});
      const website =await Lead.countDocuments({source: LeadSource.WEBSITE});
      const instagram =await Lead.countDocuments({ source: LeadSource.INSTAGRAM });
      const referral = await Lead.countDocuments({ source: LeadSource.REFERRAL});

      return res.status(200).json(
        new ApiResponse(
          200,
          {
            total,
            newLeads,
            contacted,
            qualified,
            lost,

            sources: [
              {
                name: "Website",
                value: website,
              },

              {
                name: "Instagram",
                value: instagram,
              },

              {
                name: "Referral",
                value: referral,
              },
            ],
          },
          "Lead stats fetched"
        )
      );
    }
  );