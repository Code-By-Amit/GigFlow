import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Input from "../components/ui/Input";

import {
  registerSchema,
  type RegisterFormData,
} from "../validations/auth.validation";

import { registerUser } from "../services/auth.service";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending } =
    useMutation({
      mutationFn: registerUser,

      onSuccess: () => {
        toast.success("Account created successfully");
        navigate("/login");
      },

      onError: (error: any) => {
        toast.error(
          error.response?.data?.message ||
          "Something went wrong"
        );
      },
    });

  const onSubmit = (
    data: RegisterFormData
  ) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-950 px-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-zinc-800">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Register to continue
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your name"
            error={errors.name?.message}
            {...register("name")}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create password"
            error={errors.password?.message}
            {...register("password")}
          />

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-black cursor-pointer dark:bg-white dark:text-black text-white py-3 rounded-xl font-medium hover:opacity-90 transition-all"
          >
            {isPending
              ? "Creating account..."
              : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-black dark:text-white font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;