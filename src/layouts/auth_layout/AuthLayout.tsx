import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h1>Auth Layout Start</h1>
      <Outlet />
      <h1>Auth Layout End</h1>
    </div>
  );
};

export default AuthLayout;
