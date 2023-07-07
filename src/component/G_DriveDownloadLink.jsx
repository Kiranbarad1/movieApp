import React from "react";
import TimerOut2 from "./TimerOut2";
import DownloadButton from'./DownloadButton2'
import styled from "styled-components";


const G_DriveDownloadLink = () => {
  return (
    <>
      <First>To download the movie click below</First>
      <Second>Generating the G-Drive movie link </Second>
      <TimerOut2 />
      <Third>Generated the movie link :</Third>
      <DownloadButton />
    </>
  );
};

export default G_DriveDownloadLink;

const First=styled.p`
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
`
const Second=styled.p`
display: flex;
justify-content: center;
align-items: center;
`
const Third=styled.p`
display: flex;
justify-content: center;
align-items: center;
`

