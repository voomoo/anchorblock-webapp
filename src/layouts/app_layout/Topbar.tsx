import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// shadcn
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@radix-ui/react-select";

const Topbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/auth/sign-in");
  };
  return (
    <nav className="flex items-center justify-between pb-8 pt-4 px-10">
      <div className="hidden md:block">
        <Input
          placeholder="Search"
          icon={<Icon icon="iconamoon:search" />}
          className="bg-slate-100 border-0 w-96 hidden md:block"
        />
      </div>
      <div className="block md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2">
            <Icon
              icon="ep:menu"
              className="h-6 w-6 text-gray-600 border-2 border-gray-600 rounded-sm"
            />
            <span>Menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Navigation Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <NavLink
                to={"/app/dashboard"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 text-gray-400 p-4 bg-slate-100 rounded-xl mt-4"
                    : "flex items-center gap-3 text-gray-400 p-4 hover:bg-slate-100 rounded-xl mt-4"
                }
              >
                <Icon icon="radix-icons:dashboard" className="w-4 h-4" />
                <span>Dashboard</span>
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink
                to={"/app/users"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 text-gray-400 p-4 bg-slate-100 rounded-xl mt-4"
                    : "flex items-center gap-3 text-gray-400 p-4 hover:bg-slate-100 rounded-xl mt-4"
                }
              >
                <Icon icon="mingcute:user-3-line" className="w-5 h-5" />
                <span>Users</span>
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink
                to={"/app/sales"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 text-gray-400 p-4 bg-slate-100 rounded-xl mt-4"
                    : "flex items-center gap-3 text-gray-400 p-4 hover:bg-slate-100 rounded-xl mt-4"
                }
              >
                <Icon icon="uil:invoice" className="w-5 h-5" />
                <span>Sales</span>
              </NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-5">
        <Popover>
          <PopoverTrigger>
            <Icon
              icon="streamline:interface-alert-alarm-bell-2-alert-bell-ring-notification-alarm"
              className="w-5 h-5 text-gray-400"
            />
          </PopoverTrigger>
          <PopoverContent>
            <span>Alerts & Notifications</span>
            <Separator className="my-4" />
            <p>All the notifications, messages and alerts will show here.</p>
          </PopoverContent>
        </Popover>

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
