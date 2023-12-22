import React, { useState } from "react";
import { Typography, Box, Skeleton, Stack } from "@mui/material";
import "../style/global.scss";
import "../style/speaker.scss";
import Card from "./subComponents/Card";
import AboutSpeaker from "./subComponents/AboutSpeaker";
import speakerData from "../store/aug2021/speakers.json";

const Speakers = ({ theme }) => {
  // console.log("speakerData in Speakers.jsx", speakerData);
  const [showData, setShowData] = useState(false);
  const [speakerModal, setSpeakerModal] = useState(false);
  const [speakerModalData, setSpeakerModalData] = useState({});
  // console.log("spkrdt",speakerData);
  return (
    <>
      <div>
        <Box className="sectionMaxWidth">
          <Box className="speakersHeadingBox">
            <Typography
              className="text-uppercase text-center speakersHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
              }}
            >
              Speakers
            </Typography>
          </Box>

          <Box className="d-flex justify-content-center flex-wrap keynote-box speaker-grid">
            {speakerData.length > 0 &&
              speakerData.filter(dt=>dt.keynoteSpeaker=="false").map((speakerData, idx) => {
                setTimeout(() => {
                  setShowData(true);
                }, 3000);
                return !showData ? (
                  <Stack key={idx} spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="rectangular" width={300} height={300} />
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton
                      variant="text"
                      width={300}
                      sx={{ fontSize: "2rem" }}
                    />
                    <Skeleton
                      variant="text"
                      width="60%"
                      sx={{ fontSize: "2rem" }}
                    />
                  </Stack>
                ) : (
                  <a
                    key={idx}
                    onClick={() => {
                      setSpeakerModal(true);
                      setSpeakerModalData(speakerData);
                    }}
                  >
                    <Card
                      theme={theme}
                      image={speakerData.speakerImage}
                      name={speakerData.speakerName}
                      designation={speakerData.speakerTitle}
                      company={
                        speakerData.speakerSubTitle
                      }
                      linkedIn={speakerData.speakerLinkedIn}
                      twitter={speakerData.speakerTwitter}
                      microsoft={
                        speakerData.MicrosoftEmployee ==
                          "true" 
                      }
                      mvp={
                        speakerData.MVPstatus == "true"
                      }
                    />
                  </a>
                );
              })}
          </Box>
        </Box>
        <AboutSpeaker
          theme={theme}
          open={speakerModal}
          close={setSpeakerModal}
          speakerdata={speakerModalData}
        />
      </div>
    </>
  );
};
export default Speakers;
