import React from "react";
import "../style/home.scss";
import "../style/global.scss";
import calendarIcon from "../assets/logoIcons/calendarIcon.svg";
import ScrollTop from "../../2023/components/subComponents/ScrollToTop";
import homeData from "../store/oct2022/home.json";
import { Box, Button, Typography, Icon } from "@mui/material";
import aboutData from "../store/oct2022/about.json";

// import { useMediaQuery } from "react-responsive";

const Home = ({ theme }) => {
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 515px)" });

  return (
    <Box
      className="homeLayout"
      id="home"
      sx={{
        height: {
          md: "max(100vh, 92rem)",
          xxl: "fit-content",
        },
        maxHeight: {
          md: "100rem",
        },
      }}
    >
      <ScrollTop theme={theme} />
      <Box className="d-flex flex-column justify-content-center sectionMaxWidth">
        <Box className="d-flex justify-content-center">
          <Typography
            className="eventName text-capitalize text-center"
            sx={{
              color: theme.colors.text.primary,
              marginTop: {
                xs: "2rem",
                mmb: "5rem",
              },
              fontSize: {
                xs: "4.5rem",
                md: "8rem",
                lg: "clamp(10rem, calc(4rem + ((1vw - 0.52rem) * 3.4091)), 7rem)",
              },
            }}
          >
            {/* {homeData.eventName} */}
            INDIA CLOUD
            <br />
            SECURITY SUMMIT
          </Typography>
        </Box>

        <Box
          className="d-flex justify-content-center align-items-center"
          sx={{
            background: theme.colors.bg.eventDate,
            marginTop: {
              xs: "2.5rem",
              mmb: "6.5rem",
            },
            marginInline: "auto",
            paddingInline: "3rem",
            minWidth: "20rem",
            aspectRatio: "2/0.6",
            // borderRadius: "2.5rem",
          }}
        >
          <Box
            sx={{
              paddingRight: "2rem",
            }}
          >
            <Icon
              component="img"
              sx={{
                fontSize: {
                  xs: "2rem",
                  mmb: "3.5rem",
                },
              }}
              src={calendarIcon}
              alt="calendar icon"
            />
          </Box>
          <Box>
            <Typography
              className="eventDate text-uppercase text-center"
              sx={{
                color: theme.colors.text.primary,
                fontWeight: "600",
                fontSize: {
                  xs: "2rem",
                  mmb: "3.5rem",
                },
              }}
            >
              {homeData.eventDate}
            </Typography>
          </Box>
        </Box>
        <Box
          className="d-flex flex-column justify-content-center align-items-center"
          sx={{
            marginTop: {
              xs: "2rem",
              mmb: "4rem",
            },
          }}
        >
          <Typography
            className="eventType text-capitalize text-center letterSpacing-4"
            sx={{
              color: theme.colors.text.primary,
              fontSize: {
                xs: "2.5rem",
              },
            }}
          >
            {homeData.eventType}
          </Typography>
          <Typography
            className="text-center letterSpacing-4"
            sx={{
              color: theme.colors.text.primary,
              fontWeight: "500",
              fontSize: {
                xs: "1.8rem",
              },
              marginTop: {
                xs: "3rem",
              },
            }}
          >
            Presented by
          </Typography>
          <a href={aboutData.communityLink} target="_blank" rel="noreferrer">
            <Typography
              className="eventOrg text-capitalize text-center text-underline letterSpacing-4"
              sx={{
                color: theme.colors.text.primary,
                maxWidth: {
                  xs: "30rem",
                  md: "100%",
                },
                lineHeight: "2rem !important",
                fontSize: {
                  xs: "1.8rem",
                  // mmb: "clamp(2.3rem, calc(2.3rem + ((1vw - 0.52rem) * 0.7955)), 3rem)",
                },
                marginTop: {
                  xs: "1rem",
                  mmb: "1rem",
                },
              }}
            >
              {homeData.orgGroup}
            </Typography>
          </a>
        </Box>
        <Box className="d-flex justify-content-center">
          <Box
            sx={{
              paddingBottom: {
                xs: "5rem",
              },
              marginTop: {
                xs: "3.5rem",
                mmb: "5rem",
              },
            }}
          >
            <Button
              className="eventButton"
              href={
                "#Playlist"
              }
              // target="_blank"
              sx={{
                color: theme.colors.text.primary,
                fontSize: theme.fontSize.eventButton,
                background: theme.colors.bg.button,
                scale: {
                  xl: "1.5",
                  xs: "0.7",
                  cd: "1",
                  sm: "1",
                  mmb: "1",
                },
                ":hover": {
                  color: theme.colors.text.primary,
                },
              }}
              variant="contained"
              alt="Register Now"
              aria-label="Register Now"
            >
              {/* {homeData.eventButton} */}
              Watch Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
