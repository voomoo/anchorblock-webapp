import { Outlet, useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";
import Topbar from "./Topbar";
import { useEffect } from "react";

const AppLayout = () => {
  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    return (
      <div className="h-screen overflow-hidden grid grid-cols-6">
        <SideMenu />
        <div className="col-span-5">
          <Topbar />
          <main className="p-10 mt-4">
            <Outlet />
          </main>
        </div>
      </div>
    );
  } else {
    useEffect(() => {
      navigate("/auth/sign-in");
    });
    return;
  }
};

export default AppLayout;
