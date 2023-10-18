import React from "react";
import {
  Box,
  Dialog,
  IconButton,
  List,
  ListItem,
  Toolbar,
  AppBar,
  Typography,
  ListItemButton,
} from "@mui/material";
import "../style/mobileMenu.scss";

import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

//    "About",   "Speakers",   "Agenda",   "Sponsors",   "Contact Us",   "Become A Sponsor",
// const navItems = ["About", "Sponsors", "Contact Us", "Become A Sponsor"];
// const navItems = [
//   { text: "About", id: "about" },
//   { text: "Sponsors", id: "sponsors" },
//   { text: "Contact Us", id: "contactUS" },
//   { text: "Become A Sponsor", id: "beAsponsor" },
// ];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  open,
  handleClose,
  theme,
  navItems,
  handleModalOpen,
}) {
  const beASponsor = {
    borderRadius: "5rem",
    background: theme.colors.bg.navWhite,
  };
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Box
        className="mobileNavParent"
        sx={{ background: theme.colors.bg.mobile }}
      >
        <AppBar sx={{ position: "static" }} color="transparent" elevation={0}>
          <Toolbar sx={{ height: "10rem" }}>
            <Box sx={{ flex: 1 }} />
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              alt="Close Menu"
            >
              <CloseIcon
                className="navButton"
                sx={{ color: theme.colors.text.primary }}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List className="d-flex flex-column align-items-center">
          {navItems.map((item, index) => (
            <ListItem key={index} sx={{ maxWidth: "fit-content" }}>
              <ListItemButton
                sx={item.id === "beAsponsor" ? beASponsor : null}
                href={`#${item.id}`}
                aria-label = {item.text}
                onClick={() => {
                  handleClose();
                  item.id === "beAsponsor" && handleModalOpen();
                }}
              >
                <Typography
                  className="navText"
                  sx={
                    item.id === "beAsponsor"
                      ? {
                          color: theme.colors.bg.mobile,
                          fontWeight: "800",
                        }
                      : { color: theme.colors.text.primary }
                  }
                >
                  {item.text}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Dialog>
  );
}
