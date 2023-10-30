import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../../style/sponsorModal.scss";
import "../../style/modalSpeaker.scss";
import mslogo from "../../assets/logoIcons/ms.png";
import mvpLogo from "../../assets/logoIcons/mvp.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import moment from "moment-timezone";
import { DatasetSharp } from "@mui/icons-material";

const AboutSpeaker = ({ theme, open, close, data, sessions, isKeynote }) => {
  console.log("SpeakerModalData from Card", data);
  console.log("isEmpty", sessions);
  const [additionalSpeakerFields, setAdditionalSpeakerFieldsData] = useState(
    []
  );
  const [additionalSpeakerSessionDetails, setAdditionalSpeakerSessionDetails] =
    useState([]);
  const [sessionDetails, setSessionDetails] = useState([]);
  const handleSpeakerModalClose = () => {
    close(false);
  };
  // console.log("kysO",Object.keys(data.sessions).length);
  useEffect(() => {
    let currentUserDetails = {};
    if (JSON.stringify(data) != "{}") {
      for(let a = 0; a < Object.keys(data.links).length; a++)
      {
        if (data.links[a].title == "LinkedIn") {
          Object.assign(currentUserDetails, {
            Bio: data.bio,
            LinkedIn: data.links[a]?.url,
            isMVP: data.categories[1]?.answer,
            isMsEmployee: data.categories[0]?.answer,
          });
        } else if (data.links[a].title == "Twitter"){
          Object.assign(currentUserDetails, {
            Bio: data.bio,
            Twitter: data.links[0]?.url,
            isMVP: data.categories[1]?.answer,
            isMsEmployee: data.categories[0]?.answer,
          });
        }
      }
      // Object.assign(currentUserDetails, {
      //   Bio: data.bio,
      //   Twitter: data.links[0]?.url,
      //   LinkedIn: data.links[0]?.url,
      //   isMVP: data.categories[1]?.answer,
      //   isMsEmployee: data.categories[0]?.answer,
      // });
    }
    let currentSpeakerSessionDetails = [];
    if (JSON.stringify(data) != "{}") {
      for (let i = 0; i < Object.keys(data.sessions).length; i++) {
        let dummyObject = {};
        Object.assign(dummyObject, {
          name: data.sessions[i].name,
          id: data.sessions[i].id,
        });
        currentSpeakerSessionDetails.push(dummyObject);
      }
    }
    let allSessionDetails = [];
    if (JSON.stringify(sessions) != "{}") {
      for (let i = 0; i < Object.keys(sessions).length; i++) {
        let dummyObject = {};
        Object.assign(dummyObject, {
          name: sessions[i].title,
          id: sessions[i].id,
          startsAt: sessions[i].startsAt,
          endsAt: sessions[i].endsAt,
          title: sessions[i].title
        });
        allSessionDetails.push(dummyObject);
      }
    }
    setAdditionalSpeakerFieldsData(currentUserDetails);
    setAdditionalSpeakerSessionDetails(currentSpeakerSessionDetails);
    setSessionDetails(allSessionDetails);
  }, [data, sessions]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleSpeakerModalClose}
        scroll="paper"
        fullWidth
        maxWidth="mmb"
        className="oct2022-scroll-dialog speaker-modal"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box className="d-flex scroll-dialog-head align-items-center">
          <DialogTitle className="scroll-dialog-title text-uppercase text-start">
            {data.fullName}
          </DialogTitle>
          <IconButton
            sx={{
              marginRight: "2.4rem",
            }}
            onClick={() => handleSpeakerModalClose()}
            aria-label="close"
          >
            <CloseIcon className="scroll-dialog-close" />
          </IconButton>
        </Box>
        <DialogContent dividers={false} className="scroll-dialog-content">
          <Box className="speaker-modal-img-container">
            <img src={data.profilePicture} alt={data.fullName} loading="lazy" />
          </Box>
          <Box className="speaker-modal-content">
            <Typography
              sx={{
                color: "#606060 !important",
              }}
              className="scroll-dialog-content-box-title text-uppercase"
            >
              Biography
            </Typography>

            <Typography className="scroll-dialog-content-box-text text-justify">
              {additionalSpeakerFields?.Bio}
              {console.log("currentSpeakerData", additionalSpeakerFields)}
              {console.log(
                "currentSpeakerSessionData",
                additionalSpeakerSessionDetails
              )}
            </Typography>
            <Divider
              variant="middle"
              sx={{
                borderBottomWidth: 4,
                borderRadius: "50rem",
                marginBlock: "2rem",
              }}
            />
            {sessionDetails.length > 0 &&
              additionalSpeakerSessionDetails.length > 0 &&
              additionalSpeakerSessionDetails.map((data, idx) => {
                console.log("dts", data);
                console.log("sessionDetails", sessionDetails);
                let session = sessionDetails.find((ses) => ses.id == data.id);
                console.log("session", session);

                return (
                  <Box
                    key={idx}
                    sx={{
                      paddingInline: "2rem",
                    }}
                  >
                    <Box className="d-flex">
                      <Box
                        className="session-list d-flex justify-content-center align-items-center"
                        sx={{
                          backgroundColor: "#4faaaa",
                          marginRight: "1rem",
                        }}
                      >
                        <Box>
                          <Typography
                            className="text-center"
                            sx={{
                              color: "#fff",
                              fontSize: "1.6rem",
                            }}
                          >
                            Topic
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        className="session-list session-list-time d-flex justify-content-center align-items-center"
                        sx={{
                          backgroundColor: "#e1e9e9",
                        }}
                      >
                        <Box>
                          <Typography
                            className="text-center"
                            sx={{
                              color: "#000000",
                              fontSize: "1.6rem",
                            }}
                          >
                            {isKeynote
                              ? "9:40 AM"
                              : moment(session.startsAt).format("LT")}{" "}
                            -{" "}
                            {isKeynote
                              ? "10:00 AM"
                              : moment(session.endsAt).format("LT")}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        className="session-name"
                        sx={{
                          color: "#4faaaa",
                          fontSize: "1.6rem"
                        }}
                      >
                        {isKeynote ? "Keynote" : session.title}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            <Divider
              variant="middle"
              sx={{
                borderBottomWidth: 4,
                borderRadius: "50rem",
                marginBlock: "2rem",
              }}
            />
            {!isKeynote ? (
              <Box className="card-social session-modal-speaker">
                {additionalSpeakerFields.isMVP == "Yes" && (
                  <IconButton
                    href={""}
                    target="_blank"
                    aria-label="MVP"
                    disabled
                  >
                    <img
                      src={mvpLogo}
                      className="card-social-img"
                      alt="microsoft-mvp"
                    />
                  </IconButton>
                )}
                {additionalSpeakerFields.isMsEmployee == "Yes" && (
                  <IconButton
                    href={""}
                    target="_blank"
                    aria-label="MicroSoft"
                    disabled
                  >
                    <img
                      src={mslogo}
                      className="card-social-img"
                      alt="microsoft-company"
                    />
                  </IconButton>
                )}
                {additionalSpeakerFields.LinkedIn != null && (
                  <IconButton
                    href={additionalSpeakerFields.LinkedIn}
                    aria-label="LinkedIn"
                    target="_blank"
                  >
                    <LinkedInIcon
                      color="primary"
                      className="card-social-icon"
                    />
                  </IconButton>
                )}
                {additionalSpeakerFields.Twitter != null && (
                  <IconButton
                    href={additionalSpeakerFields.Twitter}
                    aria-label="twitter"
                    target="_blank"
                  >
                    <TwitterIcon
                      sx={{
                        color: theme.icon.twitter,
                      }}
                      className="card-social-icon"
                    />
                  </IconButton>
                )}
              </Box>
            ) : (
              <Box className="card-social session-modal-speaker">
                <IconButton
                  href={""}
                  target="_blank"
                  aria-label="MicroSoft"
                  disabled
                >
                  <img
                    src={mslogo}
                    className="card-social-img"
                    alt="microsoft-company"
                  />
                </IconButton>

                <IconButton
                  href="https://www.linkedin.com/in/hammadrajjoub/"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <LinkedInIcon color="primary" className="card-social-icon" />
                </IconButton>

                <IconButton
                  href="https://twitter.com/iRajjoub"
                  aria-label="twitter"
                  target="_blank"
                >
                  <TwitterIcon
                    sx={{
                      color: theme.icon.twitter,
                    }}
                    className="card-social-icon"
                  />
                </IconButton>
              </Box>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AboutSpeaker;
