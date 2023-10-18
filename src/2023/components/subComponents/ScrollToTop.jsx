import React, { useEffect } from "react";
import { Box, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useMediaQuery } from "react-responsive";

const ScrollToTop = ({theme}) => {
  const [scroll, setScroll] = React.useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 515px)" });

  useEffect(() => {
    // adding the event when scroll change Logo
    window.addEventListener("scroll", scrollVisibility);
  });

  const scrollVisibility = () => {
    if (!isTabletOrMobile) {
      if (window.scrollY >= 800) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
  };
  return (
    scroll && (
      <Box>
        <Fab
          compoment="a"
          href="#home"
          aria-label="add"
          sx={{
            backgroundColor: theme.colors.text.scrollGreen,
            color: "white",
            position: "fixed",
            bottom: "2.5rem",
            right: "2.5rem",
            "&:hover":{
              color: "#fff"
            }
          }}
        >
          <KeyboardArrowUpIcon
            sx={{
              fontSize: "3.5rem",
            }}
          />
        </Fab>
      </Box>
    )
  );
};
export default ScrollToTop;
