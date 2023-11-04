import { RootState } from "@/store";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.auth);
  return (
    <h1 className="text-2xl">
      Welcome <span className="text-blue-500">{user.email}</span>
    </h1>
  );
};

export default Dashboard;
