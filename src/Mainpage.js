import React, { useEffect } from "react";
import Lottie from "lottie-web";
import duck from "./LoadingDucks.json";
const MainPage = () => {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector("#lottie"), // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: duck, // the path to the animation json
    });
  }, []);

  return (
    <div>
      <h1>PATOS</h1>
      <div id="lottie"></div>
    </div>
  );
};

export default MainPage;
