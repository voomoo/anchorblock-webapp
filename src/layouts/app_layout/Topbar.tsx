import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// shadcn
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/auth/sign-in");
  };
  return (
    <nav className="flex items-center justify-between pb-8 pt-4 px-10">
      <Input
        placeholder="Search"
        icon={<Icon icon="iconamoon:search" />}
        className="bg-slate-100 border-0 w-96"
      />
      <div className="flex items-center gap-5">
        <Button variant={"ghost"}>
          <Icon
            icon="streamline:interface-alert-alarm-bell-2-alert-bell-ring-notification-alarm"
            className="w-5 h-5 text-gray-400"
          />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel
              onClick={logout}
              className="cursor-pointer text-center"
            >
              Logout
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Topbar;
