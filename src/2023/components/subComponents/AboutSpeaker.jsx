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

const AboutSpeaker = ({ theme, open, close, data, sessions, isKeynote }) => {
  // console.info("SpeakerModalData from Card", data);
  // console.info("isEmpty", sessions);
  // const [additionalSpeakerFields, setAdditionalSpeakerFieldsData] = useState(
  //   []
  // );
  // const [additionalSpeakerSessionDetails, setAdditionalSpeakerSessionDetails] =
  //   useState([]);
  // const [sessionDetails, setSessionDetails] = useState([]);
  const handleSpeakerModalClose = () => {
    close(false);
  };
  // console.log("kysO",Object.keys(data.sessions).length);
  // useEffect(() => {
  //   // let currentUserDetails = {};
  //   // if (JSON.stringify(data) != "{}") {
  //   //   Object.assign(currentUserDetails, {
  //   //     Bio: data.questionAnswers[1].answer,
  //   //     Twitter: data.questionAnswers[2].answer,
  //   //     LinkedIn: data.questionAnswers[3].answer,
  //   //     isMVP: data.categories
  //   //     [0].answer,
  //   //     isMsEmployee: data.categories
  //   //     [1].answer,
  //   //   });
  //   // }
  //   // let currentSpeakerSessionDetails = [];
  //   // if (JSON.stringify(data) != "{}") {
  //   //   for (let i = 0; i < Object.keys(data.sessions).length; i++) {
  //   //     let dummyObject = {};
  //   //     Object.assign(dummyObject, {
  //   //       name: data.sessions[i].name,
  //   //       id: data.sessions[i].id,
  //   //     });
  //   //     currentSpeakerSessionDetails.push(dummyObject);
  //   //   }
  //   // }
  //   // let allSessionDetails = [];
  //   // if (JSON.stringify(sessions) != "{}" && sessions!=null) {
  //   //   for (let i = 0; i < Object.keys(sessions).length; i++) {
  //   //     let dummyObject = {};
  //   //     Object.assign(dummyObject, {
  //   //       name: sessions[i].title,
  //   //       id: sessions[i].id,
  //   //       startsAt: sessions[i].startsAt,
  //   //       endsAt: sessions[i].endsAt,
  //   //     });
  //   //     allSessionDetails.push(dummyObject);
  //   //   }
  //   // }
  //   setAdditionalSpeakerFieldsData(currentUserDetails);
  //   setAdditionalSpeakerSessionDetails(currentSpeakerSessionDetails);
  //   setSessionDetails(allSessionDetails);
  // }, [data, sessions]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleSpeakerModalClose}
        scroll="paper"
        fullWidth
        maxWidth="mmb"
        className="dec2023-scroll-dialog speaker-modal"
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
              {data?.bio}
              {/* {console.log("currentSpeakerData", additionalSpeakerFields)} */}
              {/* {console.log(
                "currentSpeakerSessionData",
                additionalSpeakerSessionDetails
              )} */}
            </Typography>
            <Divider
              variant="middle"
              sx={{
                borderBottomWidth: 4,
                borderRadius: "50rem",
                marginBlock: "2rem",
              }}
            />
            {data.sessions?.length > 0 &&
              data.sessions.map((data, idx) => {
                console.log("dts", data);
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
                          backgroundColor: theme.colors.text.sessionTime,
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
                      {data.startsAt != null && (
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
                                : moment(data.startsAt).format("LT")}{" "}
                              -{" "}
                              {isKeynote
                                ? "10:00 AM"
                                : moment(data.endsAt).format("LT")}
                            </Typography>
                          </Box>
                        </Box>
                      )}
                    </Box>
                    <Box>
                      <Typography
                        className="session-name"
                        sx={{
                          color: theme.colors.text.sessionTime,
                        }}
                      >
                        {isKeynote ? "Keynote" : data.name}
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
                {data.isMVP && (
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
                {data.isMicrosoftEmployee && (
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
                {data.linkedIn != null && (
                  <IconButton
                    href={data.linkedIn}
                    aria-label="LinkedIn"
                    target="_blank"
                  >
                    <LinkedInIcon
                      color="primary"
                      className="card-social-icon"
                    />
                  </IconButton>
                )}
                {data.twitter != null && (
                  <IconButton
                    href={data.twitter}
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
