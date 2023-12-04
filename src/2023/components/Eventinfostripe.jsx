import React from "react";
import "../style/global.scss";
import "../style/eventInfo.scss";
import { Box, Typography, Icon } from "@mui/material";
import apiData from "../store/dec2023/apiVal.json";

import sessionsIcon from "../assets/logoIcons/sessionsIcon.svg";
import trackIcon from "../assets/logoIcons/trackIcon.svg";
import speakerIcon from "../assets/logoIcons/speakerIcon.svg";
import sponsorIcon from "../assets/logoIcons/sponsorIcon.svg";

const Eventinfostripe = ({ theme }) => {
  return (
    <Box className="eventInfo" id="eventInfo">
      <Box
        className="eventInfo-container g-5 sectionMaxWidth d-flex flex-wrap justify-content-between align-items-center"
        sx={{
          paddingBlock: {
            xs: "4rem",
            md: "7rem",
          },
          paddingInline: {
            xs: "7rem",
          },
          minHeight: {
            xs: "30rem",
            md: "25rem",
          },
        }}
      >
        <Box
          className="d-flex justify-content-around g-5"
          sx={{
            minWidth: {
              sm: "42.5rem",
            },
            flexDirection: {
              xs: "column",
              mmb: "row",
            },
            flexGrow: 1,
          }}
        >
          <Box className="d-flex flex-column justify-content-between align-items-center">
            <Box>
              <Icon
                component="img"
                sx={{
                  fontSize: {
                    xs: "7rem",
                  },
                  paddingBlock: "1rem",
                }}
                src={sessionsIcon}
                alt="Session icon"
              />
            </Box>
            <Box>
              <Typography
                className="eventInfoSubtext text-uppercase text-center"
                sx={{
                  color: theme.colors.text.primary,
                  paddingBlock: "0.5rem",
                  fontSize: {
                    xs: "3.5rem",
                  },
                }}
              >
                {apiData.sessions}
              </Typography>
            </Box>
            <Box>
              <Typography
                className="eventInfoSubtext text-uppercase text-center"
                sx={{
                  color: theme.colors.text.primary,
                  fontSize: {
                    xs: "2rem",
                  },
                }}
              >
                sessions
              </Typography>
            </Box>
          </Box>
          <Box className="d-flex flex-column justify-content-center align-items-center">
            <Box>
              <Icon
                component="img"
                sx={{
                  fontSize: {
                    xs: "7rem",
                  },
                  paddingBlock: "1rem",

                }}
                src={trackIcon}
                alt="Track icon"
              />
            </Box>
            <Box>
              <Typography
                className="eventInfoSubtext text-uppercase text-center"
                sx={{
                  color: theme.colors.text.primary,
                  fontSize: {
                    xs: "3.5rem",
                  },
                  paddingBlock: "1rem",
                }}
              >
                {apiData.track}
              </Typography>
            </Box>
            <Box>
              <Typography
                className="eventInfoSubtext text-uppercase text-center"
                sx={{
                  color: theme.colors.text.primary,
                  fontSize: {
                    xs: "2rem",
                  },
                }}
              >
                tracks
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          className="d-flex justify-content-around  g-5"
          sx={{
            minWidth: {
              sm: "42.5rem",
            },
            flexDirection: {
              xs: "column",
              mmb: "row",
            },
            flexGrow: 1,
          }}
        >
          <Box className="d-flex flex-column justify-content-center align-items-center">
            <Box>
              <Icon
                component="img"
                sx={{
                  fontSize: {
                    xs: "7rem",
                  },
                  paddingBlock: "1rem",

                }}
                src={speakerIcon}
                alt="Speaker icon"
              />
            </Box>
            <Box>
              <Typography
                className="eventInfoSubtext text-uppercase text-center"
                sx={{
                  color: theme.colors.text.primary,
                  fontSize: {
                    xs: "3.5rem",
                  },
                  paddingBlock: "1rem",
                }}
              >
                {apiData.speaker}
              </Typography>
            </Box>
            <Box>
              <Typography
                className="eventInfoSubtext text-uppercase text-center"
                sx={{
                  color: theme.colors.text.primary,
                  fontSize: {
                    xs: "2rem",
                  },
                }}
              >
                speakers
              </Typography>
            </Box>
          </Box>
          <Box className="d-flex flex-column justify-content-center align-items-center">
            <Box>
              <Icon
                component="img"
                sx={{
                  fontSize: {
                    xs: "7rem",
                  },
                  paddingBlock: "1rem",

                }}
                src={sponsorIcon}
                alt="Sponsor icon"
              />
            </Box>
            <Box>
              <Typography
                className="eventInfoSubtext text-uppercase text-center"
                sx={{
                  color: theme.colors.text.primary,
                  fontSize: {
                    xs: "3.5rem",
                  },
                  paddingBlock: "1rem",
                }}
              >
                {apiData.sponsor}
              </Typography>
            </Box>
            <Box>
              <Typography
                className="eventInfoSubtext text-uppercase text-center"
                sx={{
                  color: theme.colors.text.primary,
                  fontSize: {
                    xs: "2rem",
                  },
                }}
              >
                sponsors
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Eventinfostripe;
