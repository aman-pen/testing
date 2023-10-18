import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  Avatar,
} from "@mui/material";
import "../style/global.scss";
import "../style/speaker.scss";
import "../style/agenda.scss";
import AboutSpeaker from "./subComponents/AboutSpeaker";
import AboutSession from "./subComponents/AboutSession";
import AgendaSessions from "../store/aug2021/sessions.json";

const Agenda = ({ theme }) => {
  const [speakerModal, setSpeakerModal] = React.useState(false);
  const [speakerModalData, setSpeakerModalData] = useState({});

  const [sessionModal, setSessionModal] = React.useState(false);
  const [sessionModalData, setSessionModalData] = useState({});

  const [modalSessionSpeaker, setModalSessionSpeaker] = useState();

  return (
    <>
      <div className="agenda">
        {/* {console.log("trackOne1", AgendaSessions)} */}
        <Box className="sectionMaxWidth">
          <Box className="speakersHeadingBox">
            <Typography
              className="text-uppercase text-center speakersHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
              }}
            >
              Agenda
            </Typography>
          </Box>

          <Box className="d-flex justify-content-center keynote-box agenda-box">
            <Paper className="agenda-paper" elevation={0}>
              <Box
                className="agenda-head"
                aria-label="outlined primary button group"
              >
                <Box
                  sx={{
                    background: theme.colors.bg.agendaSelected,
                  }}
                  className="agenda-track t1 d-flex flex-column"
                >
                  <Typography
                    sx={{
                      color: theme.colors.text.agendaSelected,
                    }}
                    className="agenda-track-text text-uppercase"
                  >
                    Track I
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.colors.text.agendaSelected,
                    }}
                    className="agenda-track-subtext"
                  >
                    14th May 2022
                  </Typography>
                </Box>
              </Box>
              <Box className="agenda-sessions-container">
                {AgendaSessions?.map((trackData, idx) => {
                  return (
                    <Paper key={idx} elevation={3} className="session-tile">
                      <Box className="session-data-container">
                        <Box
                          onClick={() => {
                            setSessionModal(true);
                            setSessionModalData(trackData);
                            setModalSessionSpeaker(trackData.speakers);
                          }}
                          className="responsive-wrapper pointer"
                        >
                          <Box className="d-flex session-time">
                            <Typography
                              className="session-time-text"
                              sx={{
                                color: "#606060",
                                fontSize: { xs: "1.8rem", mmb: "2.2rem" },
                                marginLeft: "1rem",
                              }}
                            >
                              {trackData.sessionTime} {"IST"}
                            </Typography>
                          </Box>
                          <Box className="session-title-container">
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: "2rem",
                                  mmb: theme.fontSize.aboutSubheadingText,
                                },
                              }}
                              className="session-title text-left"
                            >
                              {trackData.sessionTitle}
                            </Typography>
                          </Box>
                        </Box>

                        <Box className="speaker-container">
                          {trackData?.speakers?.map((spkr, idx) => {
                            return (
                              <>
                                <Box key={idx} className="session-speakers">
                                  <a
                                    onClick={() => {
                                      setSpeakerModal(true);
                                      setSpeakerModalData(spkr);
                                    }}
                                  >
                                    <Avatar
                                      className="pointer"
                                      src={spkr.speakerImage}
                                      sx={{
                                        width: 80,
                                        height: 80,
                                        marginBottom: "1rem",
                                      }}
                                    />
                                  </a>
                                  <Typography
                                    className="text-center speaker-name"
                                    sx={{
                                      color: theme.colors.text.bodyGrey,
                                      fontSize: {
                                        xs: "1.5rem",
                                        mmb: theme.fontSize.footerSubTxt,
                                      },
                                    }}
                                  >
                                    {spkr.speakerName}
                                  </Typography>
                                </Box>
                              </>
                            );
                          })}
                        </Box>
                      </Box>
                    </Paper>
                  );
                })}
              </Box>
            </Paper>
          </Box>
          <AboutSpeaker
            theme={theme}
            open={speakerModal}
            sessionOpen={sessionModal}
            close={setSpeakerModal}
            data={speakerModalData}
          />
          <AboutSession
            theme={theme}
            open={sessionModal}
            close={setSessionModal}
            data={sessionModalData}
            sessionSpeaker={modalSessionSpeaker}
          />
        </Box>
      </div>
    </>
  );
};
export default Agenda;
