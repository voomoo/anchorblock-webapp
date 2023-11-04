import { Outlet, useNavigate } from "react-router-dom";

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

  if (!localStorage.getItem("token")) {
    return (
      <div className="container h-screen overflow-hidden">
        <nav className="flex items-center justify-between py-8 px-1">
          <img src="/photos/logo.png" alt="" />
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
        <main className="mt-10">
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
