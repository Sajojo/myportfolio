import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <h1>Naughty Naughty You</h1>
    </div>
  );
};
export default NotFoundPage;
