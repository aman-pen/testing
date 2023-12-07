import React, { useEffect, useState } from "react";
import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Button,
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
import AboutSpeaker from "./AboutSpeaker";

const AboutSession = ({
  theme,
  open,
  close,
  data,
  sessionSpeaker,
  speaker,
  sessions,
}) => {
  const handleSessionModalClose = () => {
    close(false);
  };

  const [speakerModal, setSpeakerModal] = React.useState(false);
  const [speakerModalData, setSpeakerModalData] = useState({});
  // const [sessionModal, setSessionModal] = React.useState(false);
  // const [sessionModalData, setSessionModalData] = useState({});

  // const [modalSessionSpeaker, setModalSessionSpeaker] = useState();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleSessionModalClose}
        scroll="paper"
        fullWidth
        maxWidth="mmb"
        className="dec2023-scroll-dialog speaker-modal dec-2023"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box className="d-flex scroll-dialog-head align-items-center">
          <DialogTitle className="scroll-dialog-title text-uppercase text-start">
            {data.startsAt != undefined &&
              moment(data.startsAt.split("T")[1].split(":")[0], "hh")
                .format("LT")
                .split(":")[0] +
                ":" +
                data.startsAt.split("T")[1].split(":")[1] +
                " " +
                moment(data.startsAt.split("T")[1].split(":")[0], "hh")
                  .format("LT")
                  .split(" ")[1] +
                " - " +
                moment(data.endsAt.split("T")[1].split(":")[0], "hh")
                  .format("LT")
                  .split(":")[0] +
                ":" +
                data.endsAt.split("T")[1].split(":")[1] +
                " " +
                moment(data.endsAt.split("T")[1].split(":")[0], "hh")
                  .format("LT")
                  .split(" ")[1] +
                " " +
                " IST"}
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
              {data.title}
            </Typography>

            <Typography className="scroll-dialog-content-box-text text-justify">
              {data.description}
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
              {console.log("ttttt", data)}
              {data != undefined &&
                sessionSpeaker?.map((spkr, idx) => {
                  let spkrimg = speaker.find(
                    (s) => s.id == spkr.id
                  ).profilePicture;

                  let speakerData = speaker.find((s) => s.id == spkr.id);

                  return data.id != "520924" ? (
                    <Box key={idx} className="session-speakers">
                      <Avatar
                        src={spkrimg}
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
                        {spkr.name}
                      </Typography>
                    </Box>
                  ) : (
                    <Button
                      onClick={() => {
                        setSpeakerModal(true);
                        setSpeakerModalData(speakerData);
                      }}
                      key={idx}
                      className="session-speakers"
                    >
                      <Avatar
                        src={spkrimg}
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
                        {spkr.name}
                      </Typography>
                    </Button>
                  );
                })}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
      <AboutSpeaker
        theme={theme}
        open={speakerModal}
        sessionOpen={open}
        close={setSpeakerModal}
        data={speakerModalData}
        sessions={sessions}
      />
    </div>
  );
};
export default AboutSession;
