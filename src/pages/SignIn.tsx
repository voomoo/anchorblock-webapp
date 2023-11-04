import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useMutation } from "@tanstack/react-query";
import Axios from "@/api/axiosInstance";
import { useDispatch } from "react-redux";
import { storeUser } from "../features/auth/authSlice";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z
    .string({ required_error: "Please enter a valid email address" })
    .email("Please enter a valid email address."),
  password: z
    .string({ required_error: "Please enter a valid password" })
    .min(6, "Password cannot be less than 6 chars"),
  remember: z
    .boolean({ required_error: "Must agree to our terms and conditions" })
    .default(false),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    loginMutation.mutate({
      email: values.email,
      password: values.password,
    });
  }

  const login = async (data: any) => {
    try {
      const response = await Axios.post("/login", data);
      dispatch(
        storeUser({
          email: data.email,
          isAuthenticated: true,
          token: response.data.token,
        })
      );
      return response.data;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Problem Signing In!",
        description: error?.response?.data?.error,
      });
      throw new Error(error);
    }
  };

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/app/dashboard");
    },
  });

  return (
    <div className=" px-4 md:px-0">
      <h3 className="text-xl font-medium text-center">Sign In</h3>
      <span className="text-center block text-gray-500 my-6">
        Welcome back, you've been missed!
      </span>
      <div className="flex items-center flex-col md:flex-row justify-center gap-5 mt-5">
        <Button variant={"secondary"} size={"lg"} className="w-full md:w-auto">
          <Icon icon="flat-color-icons:google" className="h-6 w-6 mr-2" />
          Sign Up with Google
        </Button>
        <Button variant={"secondary"} size={"lg"} className="w-full md:w-auto">
          <Icon icon="ic:baseline-apple" className="h-6 w-6 mr-2" />
          Sign Up with Apple ID
        </Button>
      </div>
      <div className="w-52 flex items-center justify-center mx-auto my-2">
        <Separator />
        <span className="mx-5 text-gray-400 text-lg uppercase">or</span>
        <Separator />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full md:w-1/3 mx-auto"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={`
                      ${
                        form.formState.errors.email &&
                        "ring-1 ring-red-500 focus:ring-1 focus:ring-red-500"
                      } text-gray-500 font-semibold
                    `}
                    icon={
                      <Icon
                        icon="entypo:email"
                        className="h-4 w-4 text-gray-400"
                      />
                    }
                    placeholder="Your Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormControl>
                    <Input
                      className={`
                      ${
                        form.formState.errors.email &&
                        "ring-1 ring-red-500 focus:ring-1 focus:ring-red-500"
                      } text-gray-500 font-semibold
                    `}
                      icon={
                        <Icon
                          icon="uis:lock-alt"
                          className="h-4 w-4 text-gray-400"
                        />
                      }
                      placeholder="Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel
                    className={
                      form.formState.errors.remember
                        ? "text-red-500"
                        : "text-gray-400"
                    }
                  >
                    Remember Me
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Button
            disabled={loginMutation.isPending}
            className="w-full h-14"
            type="submit"
          >
            {loginMutation.isPending ? (
              <span className="flex items-center gap-3">
                <Icon className="w-8 h-8" icon="line-md:loading-twotone-loop" />{" "}
                Signing In
              </span>
            ) : (
              "Login"
            )}
          </Button>
          <p className="text-gray-500 text-center">
            Don't have and account yet?{" "}
            <Link className="text-primary" to="/auth/sign-up">
              Sign Up
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
