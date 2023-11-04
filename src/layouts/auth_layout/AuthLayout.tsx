import { Link, Outlet, useNavigate } from "react-router-dom";

// shadcn
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";

const AuthLayout = () => {
  const navigate = useNavigate();
  const token = import.meta.env.VITE_USER_TOKEN_NAME;

  if (!localStorage.getItem(token)) {
    return (
      <div className="container h-screen overflow-hidden">
        <nav className="flex items-center justify-between py-8 px-4 md:px-1">
          <Link to={"/"}>
            <img src="/photos/logo.png" alt="" />
          </Link>
          <Select defaultValue="en">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English (UK)</SelectItem>
              <SelectItem value="bn">Bengali (BD)</SelectItem>
            </SelectContent>
          </Select>
        </nav>
        <main className="mt-6">
          <Outlet />
        </main>
      </div>
    );
  } else {
    useEffect(() => {
      navigate("/app/dashboard");
    });
    return;
  }
};

export default AuthLayout;
