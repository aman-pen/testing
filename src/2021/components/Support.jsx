import { Typography, Box, Grid } from "@mui/material";
import "../style/support.scss";
import "../style/global.scss";
import supportData from "../store/aug2021/support.json";
import { InsertLink } from "@mui/icons-material";
import arrow from "../assets/Arrow.png";

const Support = ({ theme }) => {
  return (
    <>
      <div className="supports">
        <Box className="sectionMaxWidth" sx={{ paddingBlockEnd: "3rem" }}>
          <Box className="supportsHeadingBox">
            <Typography
              className="text-uppercase text-center supportHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
              }}
            >
              SUPPORTING USER GROUPS
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
                className="support-wrapper text-center d-flex justify-content-center flex-wrap align-items-center"
              >
                <Grid
                  container
                  className="d-flex justify-content-center"
                  spacing={2}
                  sx={{
                    maxWidth: "144rem",
                  }}
                >
                  {supportData.map((data, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        key={index}
                        sx={{
                          marginBlock: {
                            xs: "2rem",
                          },
                          width: "100%",
                          paddingInline: "2rem",
                        }}
                        className="support-card
                        d-flex justify-content-start align-items-center flex-wrap"
                      >
                        <a
                          href={data.groupUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="support-border"
                        >
                          <Box sx={{width: "25%"}}>
                            <img
                              className="support-img"
                              alt={data.groupAltText}
                              src={data.groupImage}
                              // width="300px"
                              loading="lazy"
                            />
                          </Box>
                          <Box className="group-name d-flex justify-content-start" sx={{width: "60%",paddingLeft:"2rem"}}>
                            <span className="text-left">{data.groupName}</span>
                          </Box>
                          <Box className="group-arrow" sx={{width: "15%", paddingLeft:"2rem", paddingRight:"1.5rem"}}>
                            <img
                              src={arrow}
                              alt="arrow"
                              className="group-arrow"
                            />
                          </Box>
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
export default Support;
