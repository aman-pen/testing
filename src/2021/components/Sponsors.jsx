import { Typography, Box, Grid } from "@mui/material";
import "../style/sponsors.scss";
import "../style/global.scss";
import SponsorData from "../store/aug2021/sponsorData.json";

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
                  sx={{
                    maxWidth: "144rem"
                  }}
                >
                  {SponsorData.map((data, index) => {
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
                            width="300px"
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
        </Box>
      </div>
    </>
  );
};
export default Sponsors;
