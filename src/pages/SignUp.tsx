import { Button } from "@/components/ui/button";

const SignUp = () => {
  return (
    <div>
      <h3 className="text-xl font-medium text-center">Getting Started</h3>
      <span className="text-center block text-gray-500 my-3">
        Create an account to continue!
      </span>
      <div className="flex items-center justify-center gap-7 mt-5">
        <Button variant={"secondary"} size={"lg"}>
          Sign Up with Google
        </Button>
        <Button variant={"secondary"} size={"lg"}>
          Sign Up with Apple ID
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
