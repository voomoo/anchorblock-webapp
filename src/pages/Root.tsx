import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RootPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/app/dashboard");
  });
  return <h1>Loading ...</h1>;
};

export default RootPage;
