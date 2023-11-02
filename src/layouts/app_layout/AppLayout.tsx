import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <h1>App Layout Start</h1>
      <Outlet />
      <h1>App Layout End</h1>
    </div>
  );
};

export default AppLayout;
