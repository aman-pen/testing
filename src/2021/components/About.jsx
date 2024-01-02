import { Typography, Box, Button } from "@mui/material";
import "../style/about.scss";
import "../style/global.scss";
import aboutData from "../store/aug2021/about.json";

const About = ({ theme }) => {
  return (
    <>
      <div className="about">
        <Box
          className="sectionMaxWidth"
          sx={{
            width: {
              xs: "95%",
              mmb: "90%",
            },
          }}
        >
          <Box className="aboutHeadingBox">
            <Typography
              className="text-uppercase text-center aboutHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
              }}
            >
              About
            </Typography>
            <div className="one-day-event">
              A One Day Event Focusing On The <span> Microsoft </span> Cloud
              Security Services
            </div>
          </Box>
          <Box
            sx={{
              paddingBlock: "3rem",
              margin: "auto",
            }}
          ></Box>
          <Box
            sx={{
              width: {
                md: "80%",
              },
              margin: "auto",
              paddingBottom: "2.5rem",
            }}
          >
            <Typography
              className="text-center aboutSubheadingText"
              sx={{
                fontSize: {
                  xs: "2rem",
                  mmb: theme.fontSize.aboutSubheadingText,
                },
              }}
            >
              India Cloud Security Summit , 2021 is a one day virtual event
              organized by the{" "}
              <a
                href={aboutData.communityLink}
                target="_blank"
                rel="noreferrer"
              >
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      mmb: theme.fontSize.aboutSubheadingText,
                    },
                    display: "inline",
                    color: "#421282",
                    textDecoration: "underline",
                  }}
                >
                  Microsoft 365 , Power Platform & Cloud Security India User
                  group{" "}
                </Typography>
              </a>
              . This event will completely focus on the Cloud Security services
              related to Microsoft 365 , Microsoft Azure, Microsoft Power
              Platform security and Dynamics 365 . This is the first of its kind
              from the Microsoft Community at India and we're planning to cover
              all the aspects of Microsoft Cloud Security services in this event
              . In this one day virtual event we will deep-dive into Microsoft's
              Cloud Security stack with hands-on sessions and labs, delivered to
              you by the experts and community leaders.
            </Typography>
          </Box>
        </Box>
      </div>
      <Box
        sx={{
          paddingBlock: "2rem",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <Button
          className="aboutButton"
          // href={aboutData.eventRegLink}
          href="#Playlist"
          // target="_blank"
          sx={{
            color: theme.colors.text.primary,
            fontSize: theme.fontSize.eventButton,
            scale: {
              xs: "1",
              mmb: "1.2",
            },
            backgroundColor: "#00a1f1",
          }}
          alt="Watch Now"
          aria-label="Watch Now"
          variant="contained"
        >
          Watch Now
        </Button>
      </Box>
    </>
  );
};
export default About;
