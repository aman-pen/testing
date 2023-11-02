import React from "react";
import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import moment from "moment-timezone";
import CloseIcon from "@mui/icons-material/Close";
import "../../style/sponsorModal.scss";
import "../../style/modalSpeaker.scss";
import "../../style/agenda.scss";
import "../../style/sessionModal.scss";
import speakersdata from "../../store/aug2021/speakers.json";

const AboutSession = ({ theme, open, close, sessiondata, sessionSpeaker }) => {
  console.log("sessiondata", sessiondata);
  console.log("sessionspeaker", speakersdata);
  const handleSessionModalClose = () => {
    close(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleSessionModalClose}
        scroll="paper"
        fullWidth
        maxWidth="mmb"
        className="aug2021-scroll-dialog speaker-modal aug-2021"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box className="d-flex scroll-dialog-head align-items-center">
          <DialogTitle className="scroll-dialog-title text-uppercase text-start">
            {sessiondata.sessionTime}
          </DialogTitle>
          <IconButton
            sx={{
              marginRight: "2.4rem",
            }}
            onClick={() => handleSessionModalClose()}
            aria-label="close"
          >
            <CloseIcon className="scroll-dialog-close" />
          </IconButton>
        </Box>
        <DialogContent dividers={false} className="scroll-dialog-content">
          <Box className="speaker-modal-content">
            <Typography
              sx={{
                color: "#606060 !important",
              }}
              className="scroll-dialog-content-box-title"
            >
              {sessiondata.sessionTitle}
            </Typography>

            <Typography className="scroll-dialog-content-box-text text-justify">
              {sessiondata.sessionDescription}
            </Typography>
            <Divider
              variant="middle"
              sx={{
                borderBottomWidth: 4,
                borderRadius: "50rem",
                marginBlock: "2rem",
              }}
            />
            <Box className="speaker-container aboutSpeaker-container">
              {/* {sessionSpeaker?.map((spkr, idx) => { */}
                {/* return ( */}
                  <Box  className="session-speakers-parent">
                    {/* <Avatar
                      // src={sessionSpeaker.speakerImage}
                      src={speakersdata?.filter((s) => s.speakerTitle == sessiondata.sessionTitle)}
                      sx={{
                        width: 80,
                        height: 80,
                        marginBottom: "1rem",
                      }}
                    />
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
                      {sessionSpeaker.speakerName}
                    </Typography> */}

                    {sessiondata.speaker1Id != null ? (
                      <Box  className="session-speakers">
                        {/* <a
                          onClick={() => {
                            setSpeakerModal(true);
                            setSpeakerModalData(
                              speakersdata.filter(
                                (s) => s.speakerId == trackData.speaker1Id
                              )[0]
                            );
                          }}
                        > */}
                          <Avatar
                            className="pointer"
                            src={
                              speakersdata.filter(
                                (s) => s.speakerId == sessiondata.speaker1Id
                              )[0].speakerImage
                            }
                            sx={{
                              width: 80,
                              height: 80,
                              marginBottom: "1rem",
                            }}
                          />
                        {/* </a> */}
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
                              (s) => s.speakerId == sessiondata.speaker1Id
                            )[0].speakerName
                          }
                        </Typography>
                      </Box>
                    ) : null}
                    {sessiondata.speaker2Id != null ? (
                      <Box  className="session-speakers">
                        {/* <a
                          onClick={() => {
                            setSpeakerModal(true);
                            setSpeakerModalData(
                              speakersdata.filter(
                                (s) => s.speakerId == trackData.speaker1Id
                              )[0]
                            );
                          }}
                        > */}
                          <Avatar
                            className="pointer"
                            src={
                              speakersdata.filter(
                                (s) => s.speakerId == sessiondata.speaker2Id
                              )[0].speakerImage
                            }
                            sx={{
                              width: 80,
                              height: 80,
                              marginBottom: "1rem",
                            }}
                          />
                        {/* </a> */}
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
                              (s) => s.speakerId == sessiondata.speaker2Id
                            )[0].speakerName
                          }
                        </Typography>
                      </Box>
                    ) : null}
                    {sessiondata.speaker3Id != null ? (
                      <Box  className="session-speakers">
                        {/* <a
                          onClick={() => {
                            setSpeakerModal(true);
                            setSpeakerModalData(
                              speakersdata.filter(
                                (s) => s.speakerId == trackData.speaker1Id
                              )[0]
                            );
                          }}
                        > */}
                          <Avatar
                            className="pointer"
                            src={
                              speakersdata.filter(
                                (s) => s.speakerId == sessiondata.speaker3Id
                              )[0].speakerImage
                            }
                            sx={{
                              width: 80,
                              height: 80,
                              marginBottom: "1rem",
                            }}
                          />
                        {/* </a> */}
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
                              (s) => s.speakerId == sessiondata.speaker3Id
                            )[0].speakerName
                          }
                        </Typography>
                      </Box>
                    ) : null}
                  </Box>
                {/* ); */}
              {/* })} */}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AboutSession;
