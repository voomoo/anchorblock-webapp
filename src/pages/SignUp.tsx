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
import { Link } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar";
import { Icon } from "@iconify/react";

const formSchema = z.object({
  email: z
    .string({ required_error: "Please enter a valid email address" })
    .email("Please enter a valid email address."),
  name: z
    .string({ required_error: "Please enter a valid name" })
    .min(3, "Name cannot be less than 3 chars")
    .max(50, "Name cannot be more that 50 chars"),
  password: z
    .string({ required_error: "Please enter a valid password" })
    .min(6, "Password cannot be less than 6 chars"),
  term: z
    .boolean({ required_error: "Must agree to our terms and conditions" })
    .refine((val) => val, {
      message: "Must agree to our terms and conditions",
    }),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <h3 className="text-xl font-medium text-center">Getting Started</h3>
      <span className="text-center block text-gray-500 my-6">
        Create an account to continue!
      </span>
      <div className="flex items-center justify-center gap-7 mt-5">
        <Button variant={"secondary"} size={"lg"}>
          <Icon icon="flat-color-icons:google" className="h-6 w-6 mr-3" />
          Sign Up with Google
        </Button>
        <Button variant={"secondary"} size={"lg"}>
          <Icon icon="ic:baseline-apple" className="h-6 w-6 mr-3" />
          Sign Up with Apple ID
        </Button>
      </div>
      <div className="w-48 flex items-center justify-center mx-auto my-4">
        <Separator />
        <span className="mx-5 text-gray-400 text-lg uppercase">or</span>
        <Separator />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-1/3 mx-auto"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={
                      form.formState.errors.email &&
                      "ring-1 ring-red-500 focus:ring-1 focus:ring-red-500"
                    }
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={
                      form.formState.errors.name &&
                      "ring-1 ring-red-500 focus:ring-1 focus:ring-red-500"
                    }
                    icon={
                      <Icon
                        icon="solar:smile-circle-bold-duotone"
                        className="h-4 w-4 text-gray-400"
                      />
                    }
                    placeholder="Your Name"
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
                      className={
                        form.formState.errors.password &&
                        "ring-1 ring-red-500 focus:ring-1 focus:ring-red-500"
                      }
                      icon={
                        <Icon
                          icon="uis:lock-alt"
                          className="h-4 w-4 text-gray-400"
                        />
                      }
                      placeholder="Create Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                {field.value && <PasswordStrengthBar password={field.value} />}
              </>
            )}
          />
          <FormField
            control={form.control}
            name="term"
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
                      form.formState.errors.term
                        ? "text-red-500"
                        : "text-gray-400"
                    }
                  >
                    I agree to the Terms & Conditions
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Button className="w-full h-14" type="submit">
            Submit
          </Button>
          <p className="text-gray-500 text-center">
            Already have an account?{" "}
            <Link className="text-primary" to="/auth/sign-in">
              Sign In
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
