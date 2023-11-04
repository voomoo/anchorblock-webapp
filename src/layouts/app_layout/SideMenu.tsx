import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="p-8 border border-r-1 hidden md:block">
      <Link to="/">
        <img src="/photos/logo.png" alt="" />
      </Link>
      <div className="mt-10">
        <span className="text-sm text-gray-400 uppercase ml-4">Pages</span>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
