import React from "react";
import "../style/home.scss";
import "../style/global.scss";
import ScrollTop from "./subComponents/ScrollToTop";
import homeData from "../store/aug2021/home.json";
import { Box, Button, Typography, Icon } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../style/social.scss";
import footer from "../store/aug2021/footer.json";

import { useMediaQuery } from "react-responsive";

const Home = ({ theme }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // console.log("isTabletOrMobile", isTabletOrMobile);
  const socialPadding = {
    paddingBlock: {
      xs: "1rem",
      md: "0rem",
    },
  };
  return (
    <Box
      className="homeLayout"
      id="home"
      sx={{
        height: {
          xs: "max(100vh, 145rem)",
          mmb: "max(100vh, 125rem)",
          lg: "max(100vh, 92rem)",
          xxl: "fit-content",
        },
        maxHeight: {
          lg: "100rem",
        },
      }}
    >
      <ScrollTop theme={theme} />
      <Box
        className="d-flex justify-content-between align-items-center sectionMaxWidth"
        sx={{
          height: {
            md: "80%",
          },
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          paddingInline: {
            xs: "2rem",
            lg: "5rem",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            alignItems: {
              xs: "center",
              lg: "flex-start",
            },
          }}
          className="d-flex flex-column justify-content-end"
        >
          <Typography
            className="eventName text-uppercase"
            sx={{
              textAlign: {
                xs: "center",
                lg: "left",
              },
              paddingTop: "5rem",
              color: theme.colors.text.primary,
              marginTop: {
                xs: "0rem",
                mmb: "5rem",
              },
              fontSize: {
                xs: "3.2rem",
                mmb: "clamp(4rem, calc(4rem + ((1vw - 0.52rem) * 3.4091)), 7rem)",
              },
            }}
          >
            {/* {homeData.eventName} */}
            INDIA CLOUD
            <br />
            SECURITY SUMMIT
          </Typography>
          {isTabletOrMobile ? (
            <>
              <Typography
                className="eventOrg letterSpacing-4 lineHeight-2"
                sx={{
                  paddingTop: "4.5rem",
                  color: theme.colors.text.primary,
                  maxWidth: {
                    xs: "100%",
                  },
                  fontSize: {
                    xs: "2.5rem",
                    // mmb: "clamp(2.3rem, calc(2.3rem + ((1vw - 0.52rem) * 0.7955)), 3rem)",
                  },
                  marginTop: {
                    xs: "1rem",
                    mmb: "1rem",
                  },
                  textAlign: {
                    xs: "center",
                    lg: "left",
                  },
                }}
              >
                {homeData.orgGroup}
              </Typography>
            </>
          ) : (
            <>
              <Typography
                className="eventOrg text-left letterSpacing-4 lineHeight-2"
                sx={{
                  paddingTop: "4.5rem",
                  color: theme.colors.text.primary,
                  maxWidth: {
                    xs: "100%",
                  },
                  fontSize: {
                    xs: "2.5rem",
                    // mmb: "clamp(2.3rem, calc(2.3rem + ((1vw - 0.52rem) * 0.7955)), 3rem)",
                  },
                  marginTop: {
                    xs: "1rem",
                    mmb: "1rem",
                  },
                }}
              >
                {homeData.orgGroup1}
              </Typography>
              <Typography
                className="eventOrg text-left letterSpacing-4 lineHeight-2"
                sx={{
                  color: theme.colors.text.primary,
                  maxWidth: {
                    xs: "100%",
                  },
                  fontSize: {
                    xs: "2.5rem",
                    // mmb: "clamp(2.3rem, calc(2.3rem + ((1vw - 0.52rem) * 0.7955)), 3rem)",
                  },
                  marginTop: {
                    xs: "1rem",
                    mmb: "1rem",
                  },
                }}
              >
                {homeData.orgGroup2}
              </Typography>
            </>
          )}
          <Box className="d-flex  justify-content-center">
            <Box
              sx={{
                paddingTop: "4.5rem",
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
                href="#Playlist"
                // target="_blank"
                sx={{
                  // color: "#431282",
                  color: "#479cda!important",
                  fontWeight: "800",
                  fontSize: theme.fontSize.eventButton,
                  backgroundColor: "#fff"
                }}
                variant="contained"
                alt="Coming Soon"
                aria-label="Coming Soon"
              >
                {/* {homeData.eventButton} */}Watch Now
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          className="d-flex flex-column justify-content-end"
          sx={{
            width: "100%",
          }}
        >
          <Box className="d-flex justify-content-around" sx={{
            flexDirection: {
              xs: "column",
              lg: "row",
            }
          }}>
            <Box sx={socialPadding}>
              {/* Change to Anchor */}
              <a
                target="_blank"
                rel="noreferrer"
                href={footer.footerTwitterOne}
                className="d-flex flex-row justify-content-center align-items-center social-wrapper"
              >
                <TwitterIcon className="socialText" />
                <Typography className="socialText">#ICSS2021</Typography>
              </a>
            </Box>
            <Box sx={socialPadding}>
              {/* Change to Anchor */}
              <a
                target="_blank"
                rel="noreferrer"
                href={footer.footerTwitterTwo}
                className="d-flex flex-row justify-content-center align-items-center social-wrapper"
              >
                <TwitterIcon className="socialText" />
                <Typography className="socialText">#indiacloudsec</Typography>
              </a>
            </Box>
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
              width: {
                xs: "100%",
                lg:"35rem"
              },
              maxWidth: {
                xs: "35rem",
              },
              aspectRatio: "2/0.6",
              border: "solid 0.7rem #fff",
            }}
          >
            <Box>
              <Typography
                className="eventDate text-uppercase text-center"
                sx={{
                  color: "#fff",
                  fontSize: {
                    xs: "3rem",
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
            <Box sx={{
              flexDirection: {
                xs: "column",
                mmb: "row",
              },
              alignItems: "center"
            }} className="fields">
              <div className="field-container">
                <div className="sessionNumber">
                  <span>47</span>
                </div>
                <p>SPEAKERS</p>
              </div>
              <div className="field-container">
                <div className="trackNumber">
                  <span>42</span>
                </div>
                <p>SESSIONS</p>
              </div>
              <div className="field-container">
                <div className="sponserNumber">
                  <span>6</span>
                </div>
                <p>SPONSORS</p>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
