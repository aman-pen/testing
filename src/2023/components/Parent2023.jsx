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
import KeynoteSpeaker from "./KeynoteSpeaker";
import Speakers from "./Speakers";
import Agenda from "./Agenda";
import Prizes from "./Prizes";
import Donate from "./Donate";
import ErrorBoundary from "./ErrorBoundary";
import PreviousEvents from "./PreviousEvents";
import { Box } from "@mui/material";
import "../style/global.scss";
import { SpeakersAndSessionsCompleteData } from "../services/EventData";

const Parent2023 = ({ theme }) => {
  const [speakerData, setSpeakerData] = useState([]);
  const [sessionData, setSessionData] = useState([]);
  const [KeynoteSpeakerData, setKeyNoteSpeakerData] = useState();

  useEffect(() => {
    document.title = "ICSS 2023";
  }, []);

  useEffect(() => {
    SpeakersAndSessionsCompleteData().then((data) => {
      setSpeakerData(data[0]);
      console.log("Speaker Data", data[0]);
      console.log("Session Data", data[1]);
      setSessionData(data[1]);
      let keyNote = data[0].filter((speaker) => speaker.isTopSpeaker == true);
      console.log("keyNote", keyNote);
      setKeyNoteSpeakerData(keyNote[0]);
    });
  }, []);

  return (
    <Box className="dec-2023">
      <Navbar theme={theme} />
      <Home theme={theme} />
      <Social theme={theme} />
      <CountdownTimer />
      <Box id="about" />
      <About theme={theme} />
      <Eventinfostripe theme={theme} />
      <ErrorBoundary>
        <Box id="speakers" />
        {(KeynoteSpeakerData != null && KeynoteSpeakerData != undefined) ? (
          <KeynoteSpeaker sessionData={sessionData} keyNote={KeynoteSpeakerData} theme={theme} />
        ):""}
        {/* <Speakers
          theme={theme}
          speakerData={speakerData}
          sessionData={sessionData}
        /> */}
      </ErrorBoundary>
      <Box id="agenda" />
      {/* <ErrorBoundary> */}
      {/* {speakerData.length > 0 &&
          sessionData.length > 0 && (
            <Agenda
              theme={theme}
              speaker={speakerData}
              session={sessionData[0].sessions}
            />
          )} */}
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
export default Parent2023;
