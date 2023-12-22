import React, { useState } from "react";
import {
  Card,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import "../style/videoPlayer.scss";
import "../style/global.scss";

const VideoPlayer = () => {
  const [currentYoutubeVideo, setCurrentYoutubeVideo] = useState(
    "https://www.youtube.com/embed/8jYgUxke3RU?si=rZ8NtgcYnA6uTU8D"
  );
  return (
    <div className="card-parent d-flex mt-5">
      <Card raised className="m-auto d-flex">
        <div className="video-iframe">
          <iframe
            className="iframe-props"
            src={currentYoutubeVideo}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <Box className="playlist-details">
          <List className="playlist-padding">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Box>1234</Box>
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Box>1234</Box>
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Card>
    </div>
  );
};

export default VideoPlayer;
