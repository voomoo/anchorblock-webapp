import { Outlet } from "react-router-dom";

// shadcn
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AuthLayout = () => {
  return (
    <div className="container">
      <nav className="flex items-center justify-between py-7">
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
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
