import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../style/footer.scss";
import "../style/global.scss";
import icssLogo from "../assets/icssLogo.png";
import footerData from "../store/oct2022/footer.json";

const Footer = ({ theme }) => {
  return (
    <Box
      className="footer"
      sx={{
        background: "linear-gradient(180deg, #35B2B2 0%, #117878 72.58%, #005151 100%)",
        // marginTop: "5rem",
      }}
    >
      <Box className="footerWrapper sectionMaxWidth d-flex flex-column justify-content-center">
        <Box
          className="d-flex justify-content-around align-items-center"
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box
            className="eventLogoBox"
            sx={{
              paddingBlock: {
                xs: "7rem",
                md: "0",
              },
            }}
          >
            <Box
              component="img"
              src={icssLogo}
              sx={{
                width: {
                  xs: "20rem",
                  mmb: "30rem",
                },
              }}
              alt="Purview Days"
            />
          </Box>
          <Box className="contactUsBox">
            <Typography
              className="text-capitalize text-center"
              sx={{
                paddingBlock: {
                  xs: "1rem",
                  md: "0",
                },

                fontSize: {
                  xs: "3rem",
                  mmb: theme.fontSize.eventButton,
                },
                color: theme.colors.text.primary,
              }}
            >
              Contact Us
            </Typography>
            <Typography
              className="text-center"
              sx={{
                paddingBlock: {
                  xs: "1rem",
                  md: "1.5rem",
                },
                fontSize: {
                  xs: "1.6rem",
                  mmb: theme.fontSize.footerSubTxt,
                },
                color: theme.colors.text.primary,
              }}
            >
              {footerData.footerMail}
            </Typography>
            <Typography
              className="text-center"
              sx={{
                paddingBlock: {
                  xs: "1rem",
                  md: "0",
                },
                fontSize: {
                  xs: "1.6rem",

                  mmb: theme.fontSize.footerSubTxt,
                },
                color: theme.colors.text.primary,
              }}
            >
              {footerData.footerMobile}
            </Typography>
          </Box>
          <Box className="socialMediaBox">
            <Typography
              className="text-capitalize text-center"
              sx={{
                paddingTop: {
                  xs: "7rem",
                  md: "0",
                },
                fontSize: {
                  xs: "3rem",
                  mmb: theme.fontSize.eventButton,
                },
                color: theme.colors.text.primary,
              }}
            >
              Social Media
            </Typography>
            <Box
              sx={{
                paddingTop: "2rem",
              }}
              className="d-flex justify-content-around"
            >
              <Box>
                <a
                  href={footerData.footerLinkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton alt="LinkedIn" aria-label="LinkedIn">
                    <LinkedInIcon
                      sx={{
                        fontSize: "4rem",
                        color: theme.colors.text.primary,
                      }}
                    />
                  </IconButton>
                </a>
              </Box>
              <Box>
                <a
                  href={footerData.footerTwitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton alt="Twitter" aria-label="Twitter">
                    <TwitterIcon
                      sx={{
                        fontSize: "4rem",
                        color: theme.colors.text.primary,
                      }}
                    />
                  </IconButton>
                </a>
              </Box>
              <Box>
                <a
                  href={footerData.footerFacebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton alt="Facebook" aria-label="Facebook">
                    <FacebookIcon
                      sx={{
                        fontSize: "4rem",
                        color: theme.colors.text.primary,
                      }}
                    />
                  </IconButton>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="d-flex justify-content-center align-items-center text-center">
        <Typography
          sx={{
            width: {
              xs: "95%",
              mmb: "85%",
              md: "80%",
            },
            paddingTop: {
              xs: "5rem",
              md: "0",
            },
            paddingBottom: "1.2rem",
            fontSize: { xs: "1.5rem", mmb: theme.fontSize.footerTxt },
            color: theme.colors.text.primary,
          }}
          className="text-center"
        >
          {footerData.footerText}
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
