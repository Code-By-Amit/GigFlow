import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Input from "../components/ui/Input";

import { loginSchema, type LoginFormData, } from "../validations/auth.validation";
import { loginUser } from "../services/auth.service";
import { useAppDispatch } from "../hooks/redux";
import { setCredentials } from "../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } =
    useMutation({
      mutationFn: loginUser,

      onSuccess: (data) => {
        dispatch(
        setCredentials(data.data.user));
        toast.success("Login successful");
        navigate("/dashboard");
      },

      onError: (error: any) => {
        toast.error(
          error.response?.data?.message ||
          "Something went wrong"
        );
      },
    });

  const onSubmit = (data: LoginFormData) => { mutate(data) };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-950 px-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-zinc-800">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
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
            placeholder="Enter your password"
            error={errors.password?.message}
            {...register("password")}
          />

          <button
            type="submit"
            disabled={isPending}
            className="w-full cursor-pointer bg-black dark:bg-white dark:text-black text-white py-3 rounded-xl font-medium hover:opacity-90 transition-all"
          >
            {isPending
              ? "Logging in..."
              : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-black dark:text-white font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;