import React from "react";
import { Box, Typography, Card } from "@mui/material";
import "../style/PreviousEvents.scss";
import PrevEvents from "../store/dec2023/PrevEvents.json";
const PreviousEvents = ({ theme }) => {
  return (
    <div className="prevEvents">
      <Box
        className="sectionMaxWidth"
        sx={{
          paddingBottom: "5rem",
        }}
      >
        <Typography
          className="text-uppercase text-center organizerHeading"
          sx={{
            fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
          }}
        >
          PREVIOUS EVENTS
        </Typography>
      </Box>
      <div className="prevEvents-scroll">
        {PrevEvents.map((data) => {
          return (
            <div className="row prevEvents-wrapper">
                <a href={data.eventLink} target="_blank" rel="noreferrer">
                  <Card class="prevEvents-card" elevation={10}>
                    {/* {console.log(data.eventImage)} */}
                    <img
                      alt="Card"
                      src={data.eventImage}
                      className="prevEventImage"
                      loading="lazy"
                    />
                  </Card>
                </a>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PreviousEvents;
