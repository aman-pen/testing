import React, { useState } from "react";
import {
  Card,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";
import "./videoPlayer.scss";
import "../../style/global.scss";
import YTPlaylistData from "./ytPlaylist.json";

const VideoPlayer = ({ theme }) => {
  const [currentYoutubeVideo, setCurrentYoutubeVideo] = useState(
    "https://www.youtube.com/embed/pe5XZgyOQQQ?rel=0"
  );
  const componentHeading =
    "Watch our all India Cloud Security Summit 2023 Sessions here";
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <Box className="card-parent">
        <Typography
          className="text-uppercase text-center speakersHeading"
          sx={{
            fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
            maxWidth: "90%",
          }}
        >
          {componentHeading}
        </Typography>
      </Box>
      <div className="videoPlayer d-flex mt-5">
        <Card
          raised
          className="card-component m-auto d-flex flex-column"
          sx={{
            flexDirection: {
              md: "row",
            },
          }}
        >
          <Box
            sx={{
              paddingRight: {
                xs: "2rem",
                md: "0",
                // InLine with Card's flexDirection breakpoint || Both need to work on same breakpoint
              },
            }}
            className="video-iframe"
          >
            <iframe
              className="iframe-props"
              src={currentYoutubeVideo}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </Box>
          <Box className="playlist-details">
            <Box className="playlist-heading">
              India Cloud Security Summit 2023
            </Box>
            <List
              className="list-component"
              sx={{
                paddingLeft: "1rem",
              }}
            >
              {YTPlaylistData != null &&
                YTPlaylistData != undefined &&
                YTPlaylistData.sort((a, b) => a.VideoOrder - b.VideoOrder).map(
                  (video, index) => {
                    return (
                      <ListItem
                        onClick={() => {
                          setSelectedIndex(index);
                          setCurrentYoutubeVideo(`${video.VideoURL}?rel=0`);
                        }}
                        disablePadding
                      >
                        <ListItemButton selected={selectedIndex === index}>
                          <Box className="pi-0_5 video-number">
                            {video.VideoOrder}
                          </Box>
                          <Box className="d-flex">
                            <Box className="pi-1">
                              <img
                                className="video-thumbnail"
                                src={video.VideoThumbnail}
                                alt="video thumbnail"
                              />
                            </Box>
                            <ListItemText className="video-title-wrapper">
                              <Typography className="video-title">
                                {video.Title}
                              </Typography>
                            </ListItemText>
                          </Box>
                        </ListItemButton>
                      </ListItem>
                    );
                  }
                )}
            </List>
          </Box>
        </Card>
      </div>
    </>
  );
};

export default VideoPlayer;
