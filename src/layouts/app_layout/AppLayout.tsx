import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import Topbar from "./Topbar";

const AppLayout = () => {
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
};

export default AppLayout;
