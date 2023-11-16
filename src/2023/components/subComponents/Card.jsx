import React from "react";
import { Typography, Box, Paper, IconButton } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../../style/global.scss";
import "../../style/speaker.scss";

import mslogo from "../../assets/logoIcons/ms.png";
import mvpLogo from "../../assets/logoIcons/mvp.jpg";

const Card = ({
  theme,
  image,
  name,
  designation,
  company,
  linkedIn,
  twitter,
  mvp,
  isMicroSoftEmployee
}) => {

  return (
    <>
      <Box className="card pointer">
        <Paper elevation={3} className="card-paper">
          <Box className="img-wrapper">
            <img src={image} alt={name} loading="lazy" width="100%" />
          </Box>
          <Box className="card-content">
            <Box className="card-title-container d-flex justify-content-center align-items-center text-center">
              <Typography className="card-title text-uppercase">
                {name}
              </Typography>
            </Box>
            <Box className="card-container">
              <Typography className="card-subtitle text-left">
                {designation}
              </Typography>
              <Typography
                className="card-subtitle text-left"
                sx={{
                  fontWeight: "600",
                }}
              >
                {company}
              </Typography>
            </Box>
            <Box className="card-social text-left">
              {mvp && (
                <IconButton href={""} target="_blank" aria-label="MVP" disabled>
                  <img
                    src={mvpLogo}
                    className="card-social-img"
                    alt="microsoft-mvp"
                  />
                </IconButton>
              )}
              {isMicroSoftEmployee && (
                <IconButton href={""} target="_blank" aria-label="MVP" disabled>
                  <img
                    src={mslogo}
                    className="card-social-img"
                    alt="microsoft"
                  />
                </IconButton>
              )}

              {linkedIn && (
                <IconButton
                  href={linkedIn}
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <LinkedInIcon color="primary" className="card-social-icon" />
                </IconButton>
              )}
              {twitter && (
                <IconButton href={twitter} aria-label="twitter" target="_blank">
                  <TwitterIcon
                    sx={{
                      color: theme.icon.twitter,
                    }}
                    className="card-social-icon"
                  />
                </IconButton>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
export default Card;
