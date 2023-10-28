import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../../style/sponsorModal.scss";
import "../../style/global.scss";
import homeData from "../../store/dec2023/home.json";
import sponsorPDF from "../../assets/ICSS2023.pdf";
const BeAsponsor = ({ theme, open, handleModalClose }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleModalClose}
        scroll="paper"
        fullWidth
        maxWidth="xl"
        className="dec2023-scroll-dialog"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box className="d-flex scroll-dialog-head align-items-center">
          <DialogTitle className="scroll-dialog-title text-uppercase text-start">
            SPONSORSHIP OPPORTUNITY FOR INDIA CLOUD SECURITY SUMMIT 2023
          </DialogTitle>
          <IconButton
            sx={{
              marginRight: "2.4rem",
            }}
            onClick={() => handleModalClose()}
            aria-label="close"
          >
            <CloseIcon className="scroll-dialog-close" />
          </IconButton>
        </Box>
        <DialogContent dividers={false} className="scroll-dialog-content">
          <Box className="scroll-dialog-home-bg d-flex flex-column justify-content-center align-items-center">
            <Typography
              sx={{
                width: {
                  xs: "80%",
                  sm: "100%",
                },
              }}
              className="scroll-dialog-home-title text-uppercase text-center"
            >
              BECOME OUR SPONSOR
            </Typography>
            <Typography className="scroll-dialog-home-text">
              The perfect event to be in touch with Cloud Security professionals
              and to take the pulse of the latest innovations and trends in the
              world of Cloud Security.
            </Typography>
          </Box>
          <Box className="d-flex flex-column align-items-center">
            <Typography className="scroll-dialog-content-title text-center text-uppercase">
              WHY SPONSOR US
            </Typography>
          </Box>
          <Grid
            container
            className="scroll-dialog-content-grid"
            columnSpacing={6}
          >
            <Grid item cd={6}>
              <Box className="scroll-dialog-content-box d-flex flex-column justify-content-center">
                <img
                  src={require("../../assets/modal/modalVr.webp")}
                  alt="Brand & Product Positioning"
                  loading="lazy"
                />
                <Typography className="scroll-dialog-content-box-title text-uppercase text-center">
                  BRAND & PRODUCT POSITIONING
                </Typography>
                <Box>
                  <ul className="scroll-dialog-content-box-list">
                    <li>
                      Align yourselves with leading brands and fuel your
                      marketing engine through tech event sponsorship.
                    </li>
                    <li>
                      Present yourself to a global audience of IT Pros and
                      developers.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
            <Grid item cd={6}>
              <Box className="scroll-dialog-content-box d-flex flex-column justify-content-center">
                <img
                  src={require("../../assets/modal/modalPeople.webp")}
                  alt="Brand & Product Positioning"
                  loading="lazy"
                />
                <Typography className="scroll-dialog-content-box-title text-uppercase text-center">
                  TALENT ATTRACTION & RETENTION
                </Typography>
                <Box>
                  <ul className="scroll-dialog-content-box-list">
                    <li>
                      Gain access to a global pool of candidates from different
                      countries.
                    </li>
                    <li>
                      Simplify the hiring process by building credibility within
                      the Open-Source community.
                    </li>
                    <li>
                      Communicate to your employees that you are at the
                      forefront of technology and care about their professional
                      development.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
            <Grid item cd={6}>
              <Box className="scroll-dialog-content-box d-flex flex-column justify-content-center">
                <img
                  src={require("../../assets/modal/modalAudience.webp")}
                  alt="Brand & Product Positioning"
                  loading="lazy"
                />
                <Typography className="scroll-dialog-content-box-title text-uppercase text-center">
                  EMPLOYER BRANDING
                </Typography>
                <Box>
                  <ul className="scroll-dialog-content-box-list">
                    <li>
                      Put your company name in line with top industry leaders.
                    </li>
                    <li>
                      Improve company image and brand exposure globally across a
                      significant number of targeted developer groups and
                      communities.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
            <Grid item cd={6}>
              <Box className="scroll-dialog-content-box d-flex flex-column justify-content-center">
                <img
                  src={require("../../assets/modal/modalSessionSpeaker.webp")}
                  alt="Brand & Product Positioning"
                  loading="lazy"
                />
                <Typography className="scroll-dialog-content-box-title text-uppercase text-center">
                  LEAD GENERATION
                </Typography>
                <Box>
                  <ul className="scroll-dialog-content-box-list">
                    <li>
                      Increase brand awareness and drive sales pipeline growth.
                    </li>
                    <li>
                      Community events are not typically associated with high
                      lead generation; however, it is one of the best places to
                      promote your products and services and make new prospect
                      leads.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box className="d-flex flex-column align-items-center">
            <Typography
              sx={{
                width: {
                  xs: "80%",
                  sm: "100%",
                },
              }}
              className="scroll-dialog-content-title text-uppercase text-center"
            >
              SPONSORSHIP SCHEMES
            </Typography>
          </Box>
          <Grid
            container
            columnSpacing={3}
            rowSpacing={5}
            className="scroll-dialog-content-box-offeings d-flex justify-content-center align-items-start"
          >
            <Grid item xs={12} mmb={8} cd={4}>
              <div className="scheme-card">
                <div className="modalSponsor-schemes-headerGold">
                  <Typography className="offerings">Gold Sponsor</Typography>
                </div>
                {/*  modalSponsor-schemes-body BelowClass */}
                <div className="d-flex flex-column align-items-center">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <span className="moneyTextGold">20,000 INR</span>
                    <div className="moneyTextGold-para">
                      For small to medium sized organizations
                    </div>
                  </div>
                  <div className="Sponsor-ulDiv">
                    <ul className="d-flex flex-column align-items-start">
                      <div className="Sponsor-divider" />
                      <li>Company logos on the event website as sponsors.</li>
                      <div className="Sponsor-divider" />
                      <li>
                        Company logos on the event banners, session slides,
                        swags, and giveaways.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} mmb={8} cd={4}>
              <div className="scheme-card">
                <div className="modalSponsor-schemes-headerPurple">
                  <Typography className="offerings">
                    Platinum Sponsor
                  </Typography>
                </div>
                <div className="d-flex flex-column align-items-center modalSponsor-schemes-body">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <span className="moneyTextPurple">25,000 INR</span>
                    <div className="moneyTextPurple-para">
                      For small to medium sized organizations
                    </div>
                  </div>
                  <div className="Sponsor-ulDiv">
                    <ul className="d-flex flex-column align-items-start">
                      <div className="Sponsor-divider" />
                      <li>Company logos on the event website as sponsors.</li>
                      <div className="Sponsor-divider" />
                      <li>
                        Company logos on the event banners, session slides,
                        swags, and giveaways.
                      </li>
                      <div className="Sponsor-divider" />
                      <li>
                        5% off on India Cloud Security Summit 2024 Sponsorship
                        Fee.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} mmb={8} cd={4}>
              <div className="scheme-card">
                <div className="modalSponsor-schemes-headerSky">
                  <Typography className="offerings">Diamond Sponsor</Typography>
                </div>
                <div className="d-flex flex-column align-items-center modalSponsor-schemes-body">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <span className="moneyTextSky">30,000 INR</span>
                    <div className="moneyTextSky-para">
                      For small to medium sized organizations
                    </div>
                  </div>
                  <div className="Sponsor-ulDiv">
                    <ul className="d-flex flex-column align-items-start">
                      <div className="Sponsor-divider" />
                      <li>All the Benefits in Platinum Sponsorship.</li>
                      <div className="Sponsor-divider" />
                      <li>Attendee opt. in contact details.</li>
                      <div className="Sponsor-divider" />
                      <li>Company Logo in the pre-event mail.</li>
                      {/* <div className="Sponsor-divider" /> */}
                      {/* <li>
                        A slot to present or talk about your product or any
                        Microsoft Cloud Security product that you recently
                        worked on.
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center", textAlign: "center" }}>
            <a href={sponsorPDF} target="_blank">
              <Typography
                sx={{
                  color: "#41C1C1",
                  marginInline: "auto 0",
                  display: "inline",
                }}
                variant="h4"
              >
                Download the Sponsorship Boucher
              </Typography>
            </a>
          </Box>
          <Box
            className="d-flex flex-column align-items-center"
            sx={{
              margin: "0 auto",
              width: {
                xs: "95%",
                sm: "100%",
              },
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
              className="sponsorButton"
              href={homeData.sponsorLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: theme.colors.text.bSponsorPrimary,
                ":hover": {
                  backgroundColor: theme.colors.text.bSponsorPrimary,
                  opacity: 0.9,
                },
                color: theme.colors.text.primary,
                fontSize: {
                  xs: "clamp(1.6rem, calc(1.6rem + ((1vw - 0.32rem) * 2.7273)), 2.8rem) !important",
                  cd: theme.fontSize.eventButton,
                },
                scale: {
                  xs: "1",
                  mmb: "1.2",
                },
                paddingInline: {
                  xs: "2.5rem !important",
                },
                "&:hover": {
                  color: theme.colors.text.primary,
                },
              }}
              variant="contained"
              aria-label="Become A Sponsor Now"
            >
              Become A Sponsor Now
              {/* Coming Soon */}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BeAsponsor;
