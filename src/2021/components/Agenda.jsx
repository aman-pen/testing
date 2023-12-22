import React, { useState } from "react";
import { Typography, Box, Paper, Avatar } from "@mui/material";
import "../style/global.scss";
import "../style/speaker.scss";
import "../style/agenda.scss";
import AboutSpeaker from "./subComponents/AboutSpeaker";
import AboutSession from "./subComponents/AboutSession";
import AgendaSessions from "../store/aug2021/sessions.json";
import trackdetails from "../store/aug2021/TrackDetails.json";
import speakersdata from "../store/aug2021/speakers.json";

const Agenda = ({ theme }) => {
  const trackfunc = (trackValue) => {
    setTrack(trackValue);
    var temptrack = trackDetailsState;
    var tempselectedRoomId;
    let i = 0;
    for (i = 0; i < temptrack.length; i++) {
      if (temptrack[i].trackId == trackValue) {
        temptrack[i].isActive = true;
        tempselectedRoomId = temptrack[i].trackId;
      } else {
        temptrack[i].isActive = false;
      }
    }
    setTrackDetails(temptrack);
    setselecteditem(tempselectedRoomId);
    console.log("selectedprevioustrack", track);
  };

  const [track, setTrack] = useState("1");

  const [trackDetailsState, setTrackDetails] = useState(trackdetails);

  const [selectedRoomId, setselecteditem] = useState("1");

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
                    background: theme.colors.bg.button,
                  }}
                  className="agenda-track t1 d-flex flex-column"
                >
                  <Typography
                    sx={{
                      color: theme.colors.text.agendaSelected,
                    }}
                    className="agenda-track-text text-uppercase"
                  >
                    Sessions
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.colors.text.agendaSelected,
                    }}
                    className="agenda-track-subtext"
                  >
                    28th August 2021
                  </Typography>
                </Box>
              </Box>
              <div className="container-fluid dec2022-track-list">
                <div className="row dec2022-track-row">
                  {trackDetailsState.map((data) => {
                    console.log(data);
                    return (
                      <div
                        className="dec2022-tracks col-4"
                        key={data.trackId}s
                        onClick={() => trackfunc(data.trackId)}
                      >
                        {data.isActive === true ? (
                          <div
                            className="dec2022-track-data"
                            style={{
                              background:
                                "linear-gradient(319.35deg, #217DDE 15.11%, #24A1E8 97.82%), #10302E",
                              color: "#fff",
                            }}
                          >
                            <div className="dec2022-track-head">
                              {data.trackTitle}
                            </div>
                            <span className="dec2022-track-span">
                              {data.trackSubTitle}
                            </span>
                            <span className="dec2022-track-date">
                              {data.trackDate}
                            </span>
                          </div>
                        ) : (
                          <div className="dec2022-track-data">
                            <div className="dec2022-track-head">
                              {data.trackTitle}
                            </div>
                            <span className="dec2022-track-span">
                              {data.trackSubTitle}
                            </span>
                            <span className="dec2022-track-date">
                              {data.trackDate}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <Box className="agenda-sessions-container">
                {AgendaSessions?.filter((data) => data.trackId === track).map(
                  (trackData, idx) => {
                    return (
                      <Paper key={idx} elevation={3} className="session-tile">
                        <Box className="session-data-container">
                          <Box
                            onClick={() => {
                              setSessionModal(true);
                              setSessionModalData(trackData);
                              setModalSessionSpeaker(trackData.speakers);
                              // console.log("TrackData", trackData);
                              // console.log("speakerright now", trackData.speakers)
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
                            {/* speakers images code from here */}
                            {trackData.speaker1Id != null ? (
                              <Box key={idx} className="session-speakers">
                                <a
                                  onClick={() => {
                                    setSpeakerModal(true);
                                    setSpeakerModalData(
                                      speakersdata.filter(
                                        (s) =>
                                          s.speakerId === trackData.speaker1Id
                                      )[0]
                                    );
                                  }}
                                >
                                  <Avatar
                                    className="pointer"
                                    src={
                                      speakersdata.filter(
                                        (s) =>
                                          s.speakerId === trackData.speaker1Id
                                      )[0].speakerImage
                                    }
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
                                  {
                                    speakersdata.filter(
                                      (s) =>
                                        s.speakerId === trackData.speaker1Id
                                    )[0].speakerName
                                  }
                                </Typography>
                              </Box>
                            ) : null}
                            {trackData.speaker2Id != null ? (
                              <Box className="session-speakers">
                                <a
                                  onClick={() => {
                                    setSpeakerModal(true);
                                    setSpeakerModalData(
                                      speakersdata.filter(
                                        (s) =>
                                          s.speakerId === trackData.speaker2Id
                                      )[0]
                                    );
                                  }}
                                >
                                  <Avatar
                                    className="pointer"
                                    src={
                                      speakersdata.filter(
                                        (s) =>
                                          s.speakerId === trackData.speaker2Id
                                      )[0].speakerImage
                                    }
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
                                  {
                                    speakersdata.filter(
                                      (s) =>
                                        s.speakerId === trackData.speaker2Id
                                    )[0].speakerName
                                  }
                                </Typography>
                              </Box>
                            ) : null}
                            {trackData.speaker3Id != null ? (
                              <Box key={idx} className="session-speakers">
                                <a
                                  onClick={() => {
                                    setSpeakerModal(true);
                                    setSpeakerModalData(
                                      speakersdata.filter(
                                        (s) =>
                                          s.speakerId === trackData.speaker3Id
                                      )[0]
                                    );
                                  }}
                                >
                                  <Avatar
                                    className="pointer"
                                    src={
                                      speakersdata.filter(
                                        (s) =>
                                          s.speakerId === trackData.speaker3Id
                                      )[0].speakerImage
                                    }
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
                                  {
                                    speakersdata.filter(
                                      (s) =>
                                        s.speakerId === trackData.speaker3Id
                                    )[0].speakerName
                                  }
                                </Typography>
                              </Box>
                            ) : null}

                            {/* {speakersdata?.map((spkr, idx) => {
                            let spkrimg = speakersdata.find(
                              (s) => s.speakerId == spkr.speakerId
                            ).speakerImage;

                            let speakerData = speakersdata.find(
                              (s) => s.speakerId == spkr.speakerId
                            );

                            return (
                              <>
                                <Box key={idx} 
                                className="session-speakers">
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
                                    {spkr.speakerName}
                                  </Typography>
                                </Box>
                              </>
                            );
                          })} */}

                            {/* till here */}
                          </Box>
                        </Box>
                      </Paper>
                    );
                  }
                )}
              </Box>
            </Paper>
          </Box>
          <AboutSpeaker
            theme={theme}
            open={speakerModal}
            sessionOpen={sessionModal}
            close={setSpeakerModal}
            speakerdata={speakerModalData}
          />
          <AboutSession
            theme={theme}
            open={sessionModal}
            close={setSessionModal}
            sessiondata={sessionModalData}
            sessionSpeaker={modalSessionSpeaker}
          />
        </Box>
      </div>
    </>
  );
};
export default Agenda;
