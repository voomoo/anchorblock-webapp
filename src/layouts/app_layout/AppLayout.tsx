import { Outlet, useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";
import Topbar from "./Topbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeUser } from "@/features/auth/authSlice";

const AppLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = import.meta.env.VITE_USER_TOKEN_NAME;

  if (localStorage.getItem(token)) {
    dispatch(
      storeUser(JSON.parse(localStorage.getItem(token as string) as string))
    );
    return (
      <div className="h-screen overflow-hidden grid grid-cols-6">
        <SideMenu />
        <div className="col-span-6 md:col-span-5">
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
