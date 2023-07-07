import React from "react";
import TimerOut2 from "./TimerOut2";
import DownloadButton2 from "./DownloadButton2";

const DownloadPage = () => {
  return (
    <>
      <p>To download the movie click below</p>
      <p>Generating the Fast-Download movie link </p>
      <TimerOut2 />
      <p>Generated the movie link </p>
      <DownloadButton2 />
    </>
  );
};

export default DownloadPage;
