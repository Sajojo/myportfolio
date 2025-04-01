import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });

  return (
    <div className="bg-[#1E1E24] h-screen flex justify-center items-center flex-col gap-10">
      <h1 className="text-[20pt] sm:text-[40pt] font-black text-[#FFCF99]">
        Naughty Naughty You &nbsp; 🫵
      </h1>
      <img
        className="w-[80%] sm:w-[65%] md:w-[50%]"
        src="https://media.giphy.com/media/olAik8MhYOB9K/giphy.gif?cid=ecf05e47y66w8a4phb0qzf79tbjv0mprn78e9ne2ovofbsyf&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="LMAO"
      />
    </div>
  );
};
export default NotFoundPage;
