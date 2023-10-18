import { Typography, Box, Button } from "@mui/material";
import "../style/donate.scss";
import "../style/global.scss";
import donateData from "../store/dec2023/donate.json";
import donateImage from "../assets/DonateImage.png";

import openQuotes from "../assets/open-quotes.png";
import closedQuotes from "../assets/closed-quotes.png";

const Donate = ({ theme }) => {
  return (
    <>
      <div className="donate">
        <Box
          className="sectionMaxWidth"
          sx={{
            width: {
              xs: "95%",
              mmb: "90%",
            },
          }}
        >
          <Box
            sx={{
              paddingBlock: "3rem",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "22.5rem",
            }}
          >
            <img
              style={{ width: "30px", height: "30px", alignSelf: "flex-start" }}
              src={openQuotes}
            />
            <Typography
              className="text-capitalize text-center donateHeadingText"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.aboutHeadingText },
              }}
            >
              Empower Girls with Education: Donate Today
            </Typography>
            <img
              style={{ width: "30px", height: "30px", alignSelf: "flex-end" }}
              src={closedQuotes}
            />
          </Box>
          <div className="donateImage">
            <img src={donateImage} alt="Donate Image" />
          </div>
          <Box
            sx={{
              width: {
                md: "80%",
              },
              margin: "auto",
              paddingBottom: "2.5rem",
              paddingTop: "2.5rem",
            }}
          >
            <Typography
              className="text-center donateSubheadingText"
              sx={{
                fontSize: {
                  xs: "2rem",
                  mmb: theme.fontSize.aboutSubheadingText,
                },
                paddingBlock: "2.5rem",
              }}
            >
              Education is a powerful tool that can transform lives and
              communities. However, not all children have access to quality
              education, particularly girls, who often face significant barriers
              due to poverty, discrimination, and gender-based violence.{" "}
              <a href={donateData.donateLink} target="_blank" rel="noreferrer">
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      mmb: theme.fontSize.aboutSubheadingText,
                    },
                    display: "inline",
                    color: "#fff",
                    textDecoration: "underline",
                  }}
                >
                  Don Bosco Navjeevan{" "}
                </Typography>
              </a>
              , an NGO, is on a mission to make a brighter future for girls.
              Help them by donating to support girls' education and achieve
              their mission to break down these barriers and give girls a chance
              to learn, grow, and succeed.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            paddingBlock: "2rem",
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <Button
            className="donateButton"
            target="_blank"
            href={donateData.donateLink}
            sx={{
              color: "#1A66B9",
              fontSize: theme.fontSize.eventButton,
              scale: {
                xs: "1",
                mmb: "1.2",
              },
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
            alt="Donate"
            aria-label=" Donate"
            variant="contained"
          >
            Donate
          </Button>
        </Box>
      </div>
    </>
  );
};
export default Donate;
