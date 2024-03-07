import React from "react";
import toast from "../assets/toast.png";
import "./backgroundimg.css";

const BackgroundImg = () => {
  return (
    <>
      <div className="background-img">
        <img src={toast} alt="img" />
      </div>
    </>
  );
};

export default BackgroundImg;
