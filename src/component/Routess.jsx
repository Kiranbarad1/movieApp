import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import G_DriveDownloadLink from "./G_DriveDownloadLink";
import DownloadPage from "./DownloadPage";
import FinalDownloadPage480p from "./FinalDownloadPage480p";
import FinalDownloadPage720p from "./FinalDownloadPage720p";
import FinalDownloadPage1080p from "./FinalDownloadPage1080p";
import FinalDownloadPage2k from "./FinalDownloadPage2k";
import FinalGDownloadPage480p from "./FinalGDownloadPage480p";
import FinalGDownloadPage720p from "./FinalGDownloadPage720p";
import FinalGDownloadPage1080p from "./FinalGDownloadPage1080p";
import FinalGDownloadPage2k from "./FinalGDownloadPage2k";
import { v4 as uuid } from 'uuid';
import FinalDownloadPage from "./FinalDownloadPage";

const Routess = ({ newsItem }) => {
const unique_id = uuid();
  // const small_id = unique_id.slice(0,8)
  return (
    <>
      <Routes>
        <Route
          exact
          path="/downloadglink"
          element={
            <G_DriveDownloadLink />
          }
        />
      
        <Route
          exact
          path="/download/starts"
          element={
            <FinalDownloadPage/>
          }
        />
      
        <Route
          exact
          path="/downloadDlink"
          element={
            <DownloadPage />
          }
        />
        <Route
          exact
          path="/download480p"
          element={
           <FinalDownloadPage480p  />
          }
        />
        <Route
          exact
          path="/download720p"
          element={
            <FinalDownloadPage720p />
          }
        />
        <Route
          exact
          path="/download1080p"
          element={
            <FinalDownloadPage1080p  />
          }
        />
        <Route
          exact
          path="/download2k"
          element={
            <FinalDownloadPage2k />
          }
        />
        <Route
          exact
          path="/downloadgdriv2k"
          element={
            <FinalGDownloadPage2k />
          }
        />
        <Route
          exact
          path="/downloadgdrive1080p"
          element={
            <FinalGDownloadPage1080p />
          }
        />
        <Route
          exact
          path="/downloadgdrive720p"
          element={
            <FinalGDownloadPage720p />
          }
        />
        <Route
          exact
          path="/downloadgdrive480p"
          element={
            <FinalGDownloadPage480p />
          }
        />
      </Routes>
    </>
  );
};

export default Routess;
