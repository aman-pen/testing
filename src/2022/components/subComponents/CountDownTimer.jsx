import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import { Card, CardContent, Box, Typography, Grid } from "@mui/material";
import "../../style/global.scss";
import "../../style/countdowntimer.scss";

function CountdownTimer() {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <>
        <Box className="d-flex flex-column align-items-center justify-content-center">
          <Typography className="digits">{zeroPad(days)}</Typography>

          <Box>
            <Typography className="dateUnits">Days</Typography>
          </Box>
        </Box>
        <Typography className="digitDots">&#58;</Typography>

        <Box className="d-flex flex-column align-items-center justify-content-center">
          <Typography className="digits">{zeroPad(hours)}</Typography>

          <Box>
            <Typography className="dateUnits">hours</Typography>
          </Box>
        </Box>
        <Typography className="digitDots">&#58;</Typography>

        <Box className="d-flex flex-column align-items-center justify-content-center">
          <Typography className="digits">{zeroPad(minutes)}</Typography>

          <Box>
            <Typography className="dateUnits">minutes</Typography>
          </Box>
        </Box>
        {/* <Typography className="digitDots">&#58;</Typography> */}

        {/* <Box className="d-flex flex-column align-items-center justify-content-center">
          <Typography className="digits">{zeroPad(seconds)}</Typography>

          <Box>
            <Typography className="dateUnits">seconds</Typography>
          </Box>
        </Box> */}
      </>
    );
  };

  return (
    <Box className="countdownTimer d-flex flex-column">
      <Grid container className="d-flex justify-content-center">
        <Grid
          item
          cd={12}
          sx={{
            display: {
              xs: "flex",
              cd: "none",
            },
            paddingBottom: "4rem",
            flexDirection: "column",
            placeContent: "center",
            placeItems: "center",
          }}
        >
          <Typography className="countDownEventDate">12th Aug 2023</Typography>
          <Typography className="eventText pt-2">
            Microsoft Viva Days
          </Typography>
        </Grid>
      </Grid>
      <Box className="d-flex align-items-center justify-content-center">
        <Card
          className="timerCard"
          sx={{
            borderRadius: "1.5rem",
            minWidth: {
              xs: "min(70%,32rem)",
              cd: "min(80%,100rem)",
            },
          }}
        >
          <CardContent>
            <Grid container>
              <Grid
                item
                cd={6}
                sx={{
                  display: {
                    xs: "none",
                    cd: "flex",
                  },
                  flexDirection: "column",
                  placeContent: "center",
                  placeItems: "center",
                }}
              >
                <Typography className="countDownEventDate">
                  12th Aug 2023
                </Typography>
                <Typography className="eventText pt-2">
                  Microsoft Viva Days
                </Typography>
              </Grid>
              <Grid
                sx={{
                  margin: "auto",
                }}
                item
                cd={6}
                xs={12}
                s
                className="d-flex align-items-center justify-content-around"
              >
                <Countdown
                  renderer={renderer}
                  className="countdownNumbers"
                  date={"Aug 12 2023"}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default CountdownTimer;
