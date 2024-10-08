import React, { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { Dots } from "react-activity";

function AboutHAT() {
  const { AboutUSSect } = useContext(HomePageContext);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div></div>
      {AboutUSSect?.length === 0 ? (
        <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center ">
          <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AboutHAT;
