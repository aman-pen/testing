import React from "react";
import { Box, Typography } from "@mui/material";
import "../style/prizes.scss";
import "../style/global.scss";
import prizes from "../store/dec2023/prizes.json";
import books from "../store/dec2023/prizeBooks.json";

const Prizes = ({ theme }) => {
  return (
    <div className="QuizPrizes">
      <Box className="sectionMaxWidth">
        <Box className="prizesHeadingBox">
          <Typography
            className="text-uppercase text-center prizesHeading"
            sx={{
              fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
            }}
          >
            Win exciting prizes
          </Typography>
        </Box>
        <div className="QuizPrizes-para-wrapper">
          <Typography
            className="text-center prizesSubheadingText"
            sx={{
              fontSize: {
                xs: "2rem",
                mmb: theme.fontSize.aboutSubheadingText,
              },
              paddingTop: "1rem",
            }}
          >
            We have an exciting quiz competition for all the attendees. Be part
            of our event, attend sessions, participate in the quiz competition,
            and win exciting prizes!
          </Typography>
        </div>
        <div className="QuizPrizes-wrapper">
          {prizes.map((data, idx) => {
            return (
              <div key={idx} className="QuizPrizes-card">
                <div className="QuizPrizes-card-head">
                  <img
                    src={data.image}
                    alt="prize"
                    className="QuizPrizes-card-img"
                  />
                  <Typography className="QuizPrizes-card-heading">
                    {data.title}
                  </Typography>
                </div>
                <Typography className="QuizPrizes-card-desc">
                  {data.description}
                </Typography>
              </div>
            );
          })}
        </div>
      </Box>
    </div>
  );
};
export default Prizes;
