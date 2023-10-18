import { Typography, Box, Button } from "@mui/material";
import "../style/about.scss";
import "../style/global.scss";
import aboutData from "../store/oct2022/about.json";

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
              ABOUT
            </Typography>
          </Box>
          <Box
            sx={{
              paddingBlock: "3rem",
              margin: "auto",
            }}
          >
            <Typography
              className="text-capitalize text-center aboutHeadingText"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  mmb: theme.fontSize.aboutHeadingText,
                },
              }}
            >
              A One Day Event Focusing On The{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: {
                    xs: "2.5rem",
                    mmb: theme.fontSize.aboutHeadingText,
                  },
                  display: "inline",
                  color: theme.colors.text.purple,
                }}
              >
                Microsoft{" "}
              </Typography>
              Cloud Security Services
            </Typography>
          </Box>
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
              India Cloud Security Summit , 2022 is a one day virtual event organized
        by the{" "}
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
                    color: theme.colors.text.purple,
                    textDecoration: "underline",
                  }}
                >
                  Microsoft 365, Power Platform & Cloud Security India User
                  group{" "}
                </Typography>
              </a>
              . This year&#39;s event will focus on the Cloud Security topics related
        to Microsoft 365, Microsoft Azure, Microsoft Power Platform, Dynamics
        365, and Endpoint security. This is the second Cloud Security event from
        the Microsoft Community in India followed by the first one we had on
        2021. You can find all the details about the previous event in this{" "}
              <a
                href="https://www.indiacloudsecuritysummit.com/aug2021"
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
                    color: theme.colors.text.purple,
                    textDecoration: "underline",
                  }}
                >
                  2022
                </Typography>
              </a>
              . The ultimate goal of this one-day virtual event is to cover all the
        aspects of the Microsoft Cloud Security services. In this one-day
        virtual event we will deep-dive into Microsoft&#39;s Cloud Security
        stack with hands-on sessions and labs, delivered to you by industry
        experts, Microsoft MVP&#39;s and RD&#39;s, Microsoft employees and
        community leaders from different parts of the world.
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
          href={aboutData.eventRegLink}
          target="_blank"
          sx={{
            color: "#fff",
            fontSize: theme.fontSize.eventButton,
            backgroundColor: theme.colors.text.purple,
            scale: {
              xs: "0.7",
              mmb: "1.2",
            },
          }}
          alt="Register Now"
          aria-label="Register Now"
          variant="contained"
        >
          Register Now
        </Button>
      </Box>
    </>
  );
};
export default About;
