import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
  Avatar,
  SvgIcon,
  IconButton,
} from "@mui/material";
import moment from "moment-timezone";
import "../style/global.scss";
import "../style/speaker.scss";
import "../style/agenda.scss";
import AboutSpeaker from "./subComponents/AboutSpeaker";
import AboutSession from "./subComponents/AboutSession";
import about from "../store/dec2023/about.json";

const Agenda = ({ theme, speaker, session, defaultTrackData }) => {
  const trackOne = session != undefined && session.filter((s) => s.room == "1");
  const trackTwo =
    session != undefined &&
    session.filter((s) => s.room == "2" || s.isPlenumSession == true);
  const trackThree =
    session != undefined &&
    session.filter((s) => s.room == "3" || s.isPlenumSession == true);

  const [currentTrack, setCurrentTrack] = React.useState(defaultTrackData);
  const [alignment, setAlignment] = React.useState("1");
  const [speakerModal, setSpeakerModal] = React.useState(false);
  const [speakerModalData, setSpeakerModalData] = useState({});

  const [sessionModal, setSessionModal] = React.useState(false);
  const [sessionModalData, setSessionModalData] = useState({});

  const [modalSessionSpeaker, setModalSessionSpeaker] = useState();

  const handleChange = (_, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      if (newAlignment == "1") {
        setCurrentTrack(trackOne);
      } else if (newAlignment == "2") {
        setCurrentTrack(trackTwo);
      } else {
        setCurrentTrack(trackThree);
      }
    }
  };

  return (
    <>
      <div className="agenda">
        {console.log("trackOne1", session)}
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
              <ToggleButtonGroup
                className="agenda-head"
                variant="contained"
                exclusive
                value={alignment}
                onChange={handleChange}
                aria-label="outlined primary button group"
              >
                <ToggleButton
                  value="1"
                  sx={{
                    background:
                      alignment == "1"
                        ? theme.colors.bg.agendaSelected
                        : theme.colors.bg.agendaUnSelected,
                  }}
                  className="agenda-track t1 d-flex flex-column"
                >
                  <Typography
                    sx={{
                      color:
                        alignment == "1"
                          ? theme.colors.text.agendaSelected
                          : theme.colors.text.agendaUnSelected,
                    }}
                    className="agenda-track-text text-uppercase"
                  >
                    Track I
                  </Typography>
                  <Typography
                    sx={{
                      color:
                        alignment == "1"
                          ? theme.colors.text.agendaSelected
                          : theme.colors.text.agendaUnSelected,
                      fontSize: theme.fontSize.agendaSubTxt,
                      display: {
                        xs: "none",
                        cd: "block",
                      },
                    }}
                    className="text-capitalize"
                  >
                    ( Azure Security & Compliance )
                  </Typography>
                </ToggleButton>
                <ToggleButton
                  value="2"
                  sx={{
                    background:
                      alignment == "2"
                        ? theme.colors.bg.agendaSelected
                        : theme.colors.bg.agendaUnSelected,
                  }}
                  className="agenda-track t2 d-flex flex-column"
                >
                  <Typography
                    sx={{
                      color:
                        alignment == "2"
                          ? theme.colors.text.agendaSelected
                          : theme.colors.text.agendaUnSelected,
                    }}
                    className="agenda-track-text text-uppercase"
                  >
                    Track II
                  </Typography>
                  <Typography
                    sx={{
                      color:
                        alignment == "2"
                          ? theme.colors.text.agendaSelected
                          : theme.colors.text.agendaUnSelected,
                      fontSize: theme.fontSize.agendaSubTxt,
                      display: {
                        xs: "none",
                        cd: "block",
                      },
                    }}
                    className="text-capitalize"
                  >
                    ( M365 Security & Compliance )
                  </Typography>
                </ToggleButton>
                <ToggleButton
                  value="3"
                  sx={{
                    background:
                      alignment == "3"
                        ? theme.colors.bg.agendaSelected
                        : theme.colors.bg.agendaUnSelected,
                  }}
                  className="agenda-track t3 d-flex flex-column"
                >
                  <Typography
                    sx={{
                      color:
                        alignment == "3"
                          ? theme.colors.text.agendaSelected
                          : theme.colors.text.agendaUnSelected,
                    }}
                    className="agenda-track-text text-uppercase"
                  >
                    Track III
                  </Typography>
                  <Typography
                    sx={{
                      color:
                        alignment == "3"
                          ? theme.colors.text.agendaSelected
                          : theme.colors.text.agendaUnSelected,
                      fontSize: theme.fontSize.agendaSubTxt,
                      display: {
                        xs: "none",
                        cd: "block",
                      },
                    }}
                    className="text-capitalize"
                  >
                    ( Power Platform, Endpoint security and others )
                  </Typography>
                </ToggleButton>
              </ToggleButtonGroup>
              <Box className="agenda-sessions-container">
                {currentTrack?.map((trackData, idx) => {
                  let timezone = moment(
                    trackData.startsAt.split("T")[1].split(":")[0],
                    "hh"
                  )
                    .format("LT")
                    .split(" ")[1];
                  let timezone2 = moment(
                    trackData.endsAt.split("T")[1].split(":")[0],
                    "hh"
                  )
                    .format("LT")
                    .split(" ")[1];

                  // let starttime = trackData.startsAt.split("T")[1].split(":")[0]+":"+trackData.startsAt.split("T")[1].split(":")[1];
                  let starttime =
                    moment(trackData.startsAt.split("T")[1].split(":")[0], "hh")
                      .format("LT")
                      .split(":")[0] +
                    ":" +
                    trackData.startsAt.split("T")[1].split(":")[1];
                  let endtime =
                    moment(trackData.endsAt.split("T")[1].split(":")[0], "hh")
                      .format("LT")
                      .split(":")[0] +
                    ":" +
                    trackData.endsAt.split("T")[1].split(":")[1];

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
                                color: theme.colors.text.sessionTime,
                                fontSize: { xs: "1.8rem", mmb: "2.2rem" },
                                marginLeft: "1rem",
                              }}
                            >
                              {/* {moment
                                .utc(trackData.startsAt, null)
                                .tz("Asia/Kolkata")
                                .format("hh:mm A")}{" "}
                              -{" "}
                              {moment
                                .utc(trackData.endsAt, null)
                                .tz("Asia/Kolkata")
                                .format("hh:mm A")}{" "}
                              {"IST"} */}
                              {starttime + " " + timezone + " "}-
                              {" " + endtime + " " + timezone2 + " "}
                              {" IST"}
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
                              className="session-title d-flex align-items-center"
                            >
                              {Date.now() > new Date("2023-12-6") && (
                                <Box
                                  className="session-speakers"
                                  sx={{
                                    minWidth: "7rem !important",
                                  }}
                                >
                                  <IconButton
                                    href={
                                      alignment == "1" ||
                                      trackData.title == "Welcome Note" ||
                                      trackData.title == "Keynote" ||
                                      trackData.title == "Quiz & Closing Notes"
                                        ? about.trackOne
                                        : alignment == "2"
                                        ? about.trackTwo
                                        : about.trackThree
                                    }
                                    target="_blank"
                                  >
                                    <SvgIcon
                                      sx={{
                                        fontSize: "3.2rem",
                                      }}
                                    >
                                      <svg
                                        viewBox="0 0 24 24"
                                        role="presentation"
                                        class="app-svg icons-teams"
                                      >
                                        <path
                                          d="M8 10.12v7.38a5.47 5.47 0 0 0 .605 2.5h5A1.5 1.5 0 0 0 15 18.646V9.02L14.72 9h-5.6A1.12 1.12 0 0 0 8 10.12zM13.833 6h-2.976A3.24 3.24 0 0 0 15 8.143v-.976A1.17 1.17 0 0 0 13.833 6z"
                                          opacity=".1"
                                        ></path>
                                        <path
                                          fill="none"
                                          d="M0 0h24v24H0z"
                                        ></path>
                                        <path
                                          d="M22.873 9H17.88l-1.394 1.127v5.589a3.757 3.757 0 1 0 7.514 0v-5.589A1.127 1.127 0 0 0 22.873 9z"
                                          fill="#5059c9"
                                        ></path>
                                        <circle
                                          cx="20.5"
                                          cy="5.5"
                                          r="2.5"
                                          fill="#5059c9"
                                        ></circle>
                                        <path
                                          d="M9.12 9h8.76A1.12 1.12 0 0 1 19 10.12v7.38a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 8 17.5v-7.38A1.12 1.12 0 0 1 9.12 9z"
                                          fill="#7b83eb"
                                        ></path>
                                        <circle
                                          cx="14"
                                          cy="5"
                                          r="3.313"
                                          fill="#7b83eb"
                                        ></circle>
                                        <path
                                          d="M8 10.12v7.38a5.47 5.47 0 0 0 .605 2.5h5A1.5 1.5 0 0 0 15 18.646V9.02L14.72 9h-5.6A1.12 1.12 0 0 0 8 10.12zM13.833 6h-2.976A3.24 3.24 0 0 0 15 8.143v-.976A1.17 1.17 0 0 0 13.833 6z"
                                          opacity=".5"
                                        ></path>
                                        <rect
                                          y="5"
                                          width="14"
                                          height="14"
                                          rx="1.167"
                                          ry="1.167"
                                          fill="#4b53bc"
                                        ></rect>
                                        <path
                                          d="M10.18 9.578H7.793V16h-1.57V9.578H3.819V8h6.362z"
                                          fill="#fff"
                                        ></path>
                                      </svg>
                                    </SvgIcon>
                                  </IconButton>
                                </Box>
                              )}
                              {trackData.title}
                            </Typography>
                          </Box>
                        </Box>

                        <Box className="speaker-container">
                          {trackData?.speakers?.map((spkr, idx) => {
                            let spkrimg = speaker.find(
                              (s) => s.id == spkr.id
                            ).profilePicture;

                            let speakerData = speaker.find(
                              (s) => s.id == spkr.id
                            );
                            return (
                              <>
                                <Box key={idx} className="session-speakers">
                                  <a
                                    onClick={() => {
                                      setSpeakerModal(true);
                                      setSpeakerModalData(speakerData);
                                    }}
                                  >
                                    <Avatar
                                      className="pointer"
                                      src={spkrimg}
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
                                    {spkr.name}
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
            sessions={session}
          />
          <AboutSession
            theme={theme}
            open={sessionModal}
            close={setSessionModal}
            data={sessionModalData}
            sessionSpeaker={modalSessionSpeaker}
            speaker={speaker}
          />
        </Box>
      </div>
    </>
  );
};
export default Agenda;
