import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import "../style/global.scss";
import "../style/speaker.scss";
import Card from "./subComponents/Card";
import AboutSpeaker from "./subComponents/AboutSpeaker";

const KeynoteSpeaker = ({ theme, keyNote, sessionData }) => {
  const [speakerModal, setSpeakerModal] = React.useState(false);
  const [speakerModalData, setSpeakerModalData] = useState({});
  console.log("KeyNoteData",keyNote)
  return (
    <>
      <div className="speakers">
        <Box className="sectionMaxWidth">
          <Box className="speakersHeadingBox">
            <Typography
              className="text-uppercase text-center speakersHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
              }}
            >
              Keynote Speakers
            </Typography>
          </Box>
          <Box className="d-flex justify-content-center keynote-box">
            <Box
              onClick={() => {
                setSpeakerModal(true);
                setSpeakerModalData(keyNote);
              }}
            >
              <Card
                theme={theme}
                image={keyNote?.profilePicture}
                name={keyNote?.fullName}
                designation={keyNote?.questionAnswers[5].answer}
                company={keyNote?.questionAnswers[4].answer}
                linkedIn={keyNote?.questionAnswers[3].answer}
                twitter={keyNote?.questionAnswers[2].answer}
                microsoft={true}
                mvp={false}
              />
            </Box>
          </Box>
        </Box>
      </div>
      <AboutSpeaker
        theme={theme}
        open={speakerModal}
        sessionOpen={null}
        close={setSpeakerModal}
        data={speakerModalData}
        sessions={null}
        // add Prope session data when the schedule is live
        isKeynote={true}
      />
    </>
  );
};
export default KeynoteSpeaker;