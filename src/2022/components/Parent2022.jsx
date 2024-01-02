import React, { useState, useEffect } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Sponsors from "./Sponsors";
import Organizers from "./Organizers";
import Footer from "./Footer";
import CountdownTimer from "./subComponents/CountDownTimer";
import Social from "./Social";
import Eventinfostripe from "./Eventinfostripe";
// import KeynoteSpeaker from "./KeynoteSpeaker";
import Speakers from "./Speakers";
import Agenda from "./Agenda";
// import Prizes from "./Prizes";
// import Donate from "./Donate";
import ErrorBoundary from "./ErrorBoundary";
import PreviousEvents from "./PreviousEvents";
import { Box } from "@mui/material";
import "../style/global.scss";
import { speakerApi, sessionApi } from "../services/EventData";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

const Parent2022 = ({ theme }) => {
  const [speakerData, setSpeakerData] = useState([]);
  const [sessionData, setSessionData] = useState([]);

  useEffect(() => {
    document.title = "ICSS 2022";
  }, []);

  useEffect(() => {
    speakerApi().then((data) => {
      setSpeakerData(data);
      console.log("Speaker Data", data);
    });
    sessionApi().then((data) => {
      setSessionData(data);
      console.log("Session Data", data);
    });
    // scheduleGridApi().then((data) => {
    //   setScheduleGridData(data);
    // });
  }, []);

  return (
    <Box className="oct-2022">
      <Navbar theme={theme} />
      <Home theme={theme} />
      <Social theme={theme} />
      <CountdownTimer />
      <Box id="about" />
      <About theme={theme} />
      <Eventinfostripe theme={theme} />
      <Box id="Playlist" />
      <VideoPlayer theme={theme} />
      <ErrorBoundary>
        <Box id="speakers" />
        {/* <KeynoteSpeaker theme={theme} /> */}
        <Speakers
          theme={theme}
          speakerData={speakerData}
          sessionData={sessionData}
        />
      </ErrorBoundary>
      <Box id="agenda" />
      {/* <ErrorBoundary> */}
      {speakerData.length > 0 && sessionData.length > 0 && (
        <Agenda
          theme={theme}
          speaker={speakerData}
          session={sessionData[0].sessions}
        />
      )}
      {/* </ErrorBoundary> */}
      <Box id="prizes" />
      {/* <Prizes theme={theme} /> */}
      {/* <Box id="donate" />
      <Donate theme={theme} /> */}
      <Box id="sponsors" />
      <Sponsors theme={theme} />
      <Box id="eventTeam" />
      <Organizers theme={theme} />
      <PreviousEvents theme={theme} />
      <Box id="contactUS" />
      <Footer theme={theme} />
    </Box>
  );
};
export default Parent2022;
