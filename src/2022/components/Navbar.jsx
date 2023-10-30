import React, { useState, useEffect } from "react";
import icssLogo from "../assets/icssLogo.png";
import icssLogoDark from "../assets/icssLogoDark.png";
import MobileMenu from "./MobileMenu";
import BeAsponsor from "./subComponents/BeAsponsor";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  ListItemButton,
  List,
  ListItem,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import "../style/global.scss";
import "../style/navBar.scss";

// import IcssLogo from "./images/icssTransparentLogo.png";

//    "About",   "Speakers",   "Agenda",   "Sponsors",   "Contact Us",   "Become A Sponsor",
// const navItems = ["About", "Sponsors", "Contact Us", "Become A Sponsor"];
const navItems = [
  { text: "Home", id: "home" },
  { text: "About", id: "about" },
  // { text: "Speakers", id: "speakers" },

  // { text: "Agenda", id: "agenda" },
  { text: "Sponsors", id: "sponsors" },
  { text: "Contact Us", id: "contactUS" },
  // { text: "Become A Sponsor", id: "beAsponsor" },
];
// console.log("navItems", navItems);

function DrawerAppBar({ theme }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [navbar, setNavbar] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const beASponsor = {
    borderRadius: "5rem",
    background: navbar
      ? theme.colors.text.bSponsorPrimary
      : theme.colors.bg.navWhite,
    transition: "all .3s ease-in-out",
    "&:hover": {
      background: navbar
        ? theme.colors.text.bSponsorPrimary
        : theme.colors.bg.navWhite,
      transform: "scale(1.02)",
    },
  };

  const handleMenuClickOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });

  // console.log("theme", theme);

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: "1",
      }}
    >
      {/* Will change the background color from White to Desired Color */}
      <section
        className="navLayout"
        style={
          navbar
            ? {
                background: theme.colors.bg.navWhite,
                boxShadow: theme.colors.navbar.boxShadow,
                transition: theme.colors.navbar.transition,
              }
            : { backgroundColor: "transparent" }
        }
      >
        <Box>
          <AppBar
            position="static"
            color="transparent"
            elevation={0}
            className="sectionMaxWidth"
            sx={{
              paddingInline: "2.5rem",
            }}
          >
            <Toolbar className="baseline navMinHeight">
              <Box sx={{ width: { xs: "60%", md: "60%" } }}>
                <a href="/">
                  <img
                    alt="Viva Logo"
                    src={navbar ? icssLogoDark : icssLogo}
                    className="nav-logo"
                    // style={{
                      // width: "22rem",
                      // height: "auto",
                    // }}
                  />
                </a>
              </Box>
              <Box
                sx={{
                  width: { xs: "40%", md: "40%" },
                }}
              >
                <List
                  className="d-flex flex-row justify-content-center align-items-center"
                  sx={{
                    display: {
                      xs: "none !important",
                      lg: "flex !important",
                    },
                    width: "90%",
                  }}
                >
                  {navItems.map((item, index) => (
                    <ListItem
                      key={index}
                      disablePadding
                      className="navTextSpace"
                    >
                      <ListItemButton
                        aria-label={item.text}
                        className="d-flex"
                        sx={
                          item.id === "beAsponsor"
                            ? beASponsor
                            : { padding: "0", marginRight: "6rem" }
                        }
                        href={`#${item.id}`}
                        onClick={() => {
                          item.id === "beAsponsor" && handleModalOpen();
                        }}
                      >
                        <Typography
                          style={
                            navbar
                              ? item.id === "beAsponsor"
                                ? { color: theme.colors.text.primary }
                                : { color: theme.colors.text.coalBlack }
                              : item.id === "beAsponsor"
                              ? { color: theme.colors.text.bSponsorPrimary }
                              : { color: theme.colors.text.primary }
                          }
                          className="navText"
                        >
                          {item.text}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  display: {
                    xs: "flex",
                    lg: "none",
                  },
                }}
                onClick={handleMenuClickOpen}
              >
                <MenuIcon
                  className="navButton"
                  style={
                    navbar
                      ? { color: theme.colors.text.coalBlack }
                      : { color: theme.colors.text.primary }
                  }
                />
              </IconButton>
            </Toolbar>
            <MobileMenu
              navItems={navItems}
              open={menuOpen}
              handleClose={handleMenuClose}
              theme={theme}
              handleModalOpen={handleModalOpen}
            />
          </AppBar>
        </Box>
      </section>
      <BeAsponsor
        theme={theme}
        open={open}
        handleModalClose={handleModalClose}
      />
    </Box>
  );
}

export default DrawerAppBar;
