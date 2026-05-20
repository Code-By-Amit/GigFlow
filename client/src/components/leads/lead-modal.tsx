import { X } from "lucide-react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    leadSchema,
    type LeadFormData,
} from "../../validations/lead.validation";

import { type Lead } from "../../types/lead.types";

import Input from "../ui/Input";
import { useEffect } from "react";

interface LeadModalProps {
    open: boolean;

    onClose: () => void;

    onSubmit: (
        data: LeadFormData
    ) => void;

    isPending: boolean;

    initialData?: Lead;
}

const LeadModal = ({
    open,
    onClose,
    onSubmit,
    isPending,
    initialData,
}: LeadModalProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LeadFormData>({
        resolver: zodResolver(leadSchema),

        defaultValues: {
            name: "",
            email: "",
            status: "New",
            source: "Website",
        },
    });

    useEffect(() => {
  if (initialData) {
    reset({
      name: initialData.name,
      email: initialData.email,
      status: initialData.status,
      source: initialData.source,
    });
  } else {
    reset({
      name: "",
      email: "",
      status: "New",
      source: "Website",
    });
  }
}, [initialData, reset]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-5 ">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl p-6 border">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">
                        {initialData
                            ? "Edit Lead"
                            : "Create Lead"}
                    </h2>

                    <button onClick={onClose}>
                        <X />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" >

                    <Input label="Name" placeholder="Enter name" error={errors.name?.message}
                        {...register("name")}
                    />

                    <Input label="Email" placeholder="Enter email" error={errors.email?.message}
                        {...register("email")}
                    />

                    <div className="space-y-2">
                        <label>Status</label>

                        <select
                            {...register("status")}
                            className="w-full px-4 py-3 rounded-xl border border-gray-400 outline-none  bg-white dark:bg-zinc-900"
                        >
                            <option value="New">
                                New
                            </option>

                            <option value="Contacted">
                                Contacted
                            </option>

                            <option value="Qualified">
                                Qualified
                            </option>

                            <option value="Lost">
                                Lost
                            </option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label>Source</label>

                        <select
                            {...register("source")}
                            className="w-full px-4 py-3 rounded-xl border border-gray-400 outline-none bg-white dark:bg-zinc-900"
                        >
                            <option value="Website">
                                Website
                            </option>

                            <option value="Instagram">
                                Instagram
                            </option>

                            <option value="Referral">
                                Referral
                            </option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-black dark:bg-white dark:text-black text-white py-3 rounded-xl"
                    >
                        {isPending
                            ? "Saving..."
                            : initialData
                                ? "Update Lead"
                                : "Create Lead"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LeadModal;