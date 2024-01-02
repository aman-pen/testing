import { Typography, Box, Grid } from "@mui/material";
import "../style/sponsors.scss";
import "../style/global.scss";
import SponsorData from "../store/dec2023/sponsorData.json";
import promoPartnerData from "../store/dec2023/promoPartners.json";

const Sponsors = ({ theme }) => {
  return (
    <>
      <div className="sponsors">
        <Box className="sectionMaxWidth" sx={{ paddingBlockEnd: "3rem" }}>
          <Box className="sponsorsHeadingBox">
            <Typography
              className="text-uppercase text-center sponsorHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
              }}
            >
              Sponsors
            </Typography>
          </Box>
          <Box
            sx={{
              paddingBlock: "3rem",
              // uncomment above when tier sponsor added
            }}
          >
            <Typography
              className="text-center sponsorSubHeading diamond"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.sponsorTags },
              }}
            >
              Diamond
            </Typography>
            <Box>
              <Box
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                }}
                className="sponsor-wrapper text-center d-flex justify-content-center flex-wrap align-items-center"
              >
                <Grid
                  container
                  className="d-flex justify-content-center"
                  spacing={2}
                >
                  {SponsorData.filter(
                    (sponsor) => sponsor.sponsorStatus === "diamond"
                  ).map((data, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        key={index}
                        sx={{
                          marginBlock: {
                            xs: "2rem",
                          },
                        }}
                        className="sponsor-card
                        d-flex justify-content-center align-items-center"
                      >
                        <a
                          href={data.sponsorUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="sponsor-border"
                        >
                          <img
                            className="sponsor-img"
                            alt={data.sponsorAltText}
                            src={data.sponsorImage}
                            width="280px"
                            loading="lazy"
                          />
                        </a>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              paddingBlock: "3rem",
              // uncomment above when tier sponsor added
            }}
          >
            <Typography
              className="text-center sponsorSubHeading platinum"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.sponsorTags },
              }}
            >
              Platinum
            </Typography>
            <Box>
              <Box
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                }}
                className="sponsor-wrapper text-center d-flex justify-content-center flex-wrap align-items-center"
              >
                <Grid
                  container
                  className="d-flex justify-content-center"
                  spacing={2}
                >
                  {SponsorData.filter(
                    (sponsor) => sponsor.sponsorStatus === "platinum"
                  ).map((data, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        key={index}
                        sx={{
                          marginBlock: {
                            xs: "2rem",
                          },
                        }}
                        className="sponsor-card
                        d-flex justify-content-center align-items-center"
                      >
                        <a
                          href={data.sponsorUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="sponsor-border"
                        >
                          <img
                            className="sponsor-img"
                            alt={data.sponsorAltText}
                            src={data.sponsorImage}
                            width="280px"
                            loading="lazy"
                          />
                        </a>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Box>
          {/* <Box sx={{
              paddingBlock: "3rem",
            }}>
            <Typography
              className="text-center sponsorSubHeading gold"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.sponsorTags },
              }}
            >
              Gold
            </Typography>
          </Box> */}
        </Box>
        <Box className="sectionMaxWidth" sx={{ paddingBlockEnd: "3rem" }}>
          {/* <Box className="sponsorsHeadingBox">
            <Typography
              className="text-uppercase text-center sponsorHeading promoPartners"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
              }}
            >
              Promotional Partners
            </Typography>
          </Box> */}
          {/* <Box
            sx={{
              paddingBlock: "3rem",
            }}
          >
            <Box>
              <Box
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                }}
                className="sponsor-wrapper text-center d-flex justify-content-center flex-wrap align-items-center"
              >
                <Grid
                  container
                  className="d-flex justify-content-center"
                  spacing={2}
                >
                  {promoPartnerData.map((data, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        key={index}
                        sx={{
                          marginBlock: {
                            xs: "2rem",
                          },
                        }}
                        className="sponsor-card
                        d-flex justify-content-center align-items-center"
                      >
                        <a
                          href={data.promoPartnerUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="sponsor-border"
                        >
                          <img
                            className="sponsor-img"
                            alt={data.promoPartnerAltText}
                            src={data.promoPartnerImage}
                            width="280px"
                            loading="lazy"
                          />
                        </a>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Box> */}
          {/* <Box sx={{
              paddingBlock: "3rem",
            }}>
            <Typography
              className="text-center sponsorSubHeading gold"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.sponsorTags },
              }}
            >
              Gold
            </Typography>
          </Box> */}
        </Box>
      </div>
    </>
  );
};
export default Sponsors;
