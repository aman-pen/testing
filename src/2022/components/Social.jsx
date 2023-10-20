import React from "react";
import { Box, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../style/global.scss";
import "../style/social.scss";
import footer from "../store/oct2022/footer.json";
const Social = ({ theme }) => {
  const socialPadding = {
    paddingBlock: {
      xs: "1rem",
      md: "0rem",
    },
  };
  return (
    <Box className="social" id="social">
      <Box
        className="social-container sectionMaxWidth d-flex justify-content-evenly align-items-center"
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          paddingBlock: {
            xs: "4rem",
            md: "7rem",
          },
        }}
      >
        <Box sx={socialPadding}>
          {/* Change to Anchor */}
          <a
            target="_blank"
            rel="noreferrer"
            href={footer.footerTwitter}
            className="d-flex flex-row justify-content-center align-items-center social-wrapper"
          >
            <TwitterIcon className="socialText" />
            <Typography className="socialText">#ICSS2022</Typography>
          </a>
        </Box>
        <Box sx={socialPadding}>
          {/* Change to Anchor */}
          <a
            target="_blank"
            rel="noreferrer"
            href={footer.footerTwitter}
            className="d-flex flex-row justify-content-center align-items-center social-wrapper"
          >
            <TwitterIcon className="socialText" />
            <Typography className="socialText">#indiacloudsec</Typography>
          </a>
        </Box>
      </Box>
    </Box>
  );
};
export default Social;
