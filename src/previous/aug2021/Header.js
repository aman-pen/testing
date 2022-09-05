import React, { useState } from "react";
import "./css/Header.scss";
import Sponsors from "./content/SponsorData.json";
import Speakers from "./content/SpeakersData.json";
import Sessions from "./content/Sessions.json";
import NavbarData from "./content/NavbarData.json";
import HeaderData from "./content/HeaderData.json";
// import bgImg from "./images/website/bg-img.png";
import logo from "./images/website/transparentLogo.png";
import twitterLogo from "./images/website/twittericon.png";
import { Navbar, Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import { isMobile } from "react-device-detect";
import { slide as Menu } from "react-burger-menu";
import hamburgerclose from "./images/website/close.png";

export const Header = () => {
  const [HamburgerOpen, setHamburgerOpen] = useState({ menuOpen: false });
  const handleHambugerMenuStateChange = (state) => {
    setHamburgerOpen({ menuOpen: state.isOpen });
  };
  const closeHamburgerMenu = () => {
    setHamburgerOpen({ menuOpen: false });
  };
  const toggleHamburgerMenu = () => {
    setHamburgerOpen({ menuOpen: !HamburgerOpen.menuOpen });
  };
  return (
    // <div className="aug2021-header" id="header">
    <div className="aug2021-header" id="header">
      <Row className="aug2021-head-nav">
        <Col xs={3}>
          <a href="/" rel="noreferrer">
            <img src={logo} alt="ICSS-logo" className="aug2021-nav-bar-logo" />
          </a>
        </Col>
        {isMobile ? (
          <>
            <Col xs={6}> </Col>
            <Col>
              <Menu
                isOpen={HamburgerOpen.menuOpen}
                onStateChange={(state) => handleHambugerMenuStateChange(state)}
                right
                width={"100%"}
                className={"aug2021-slidebar"}
                customCrossIcon={
                  <img
                    src={hamburgerclose}
                    onClick={toggleHamburgerMenu}
                    alt="hamburger-menu"
                  />
                }
              >
                {NavbarData.map((data) => {
                  return (
                    <a
                      className="menu-item"
                      href={data.url}
                      onClick={() => closeHamburgerMenu()}
                    >
                      <span>{data.title}</span>
                    </a>
                  );
                })}
              </Menu>
            </Col>
          </>
        ) : (
          <Col xs={9} className="aug2021-nav-item">
            <Navbar>
              <Nav navbar>
                {NavbarData.map((data) => {
                  return (
                    <NavItem>
                      <NavLink href={encodeURI(data.url)}>{data.title}</NavLink>
                    </NavItem>
                  );
                })}
              </Nav>
            </Navbar>
          </Col>
        )}
      </Row>
      <Row className="aug2021-head-data">
        {HeaderData.map((data) => {
          return (
            <>
              <Col md={12} xl={6} className="aug2021-content-left row">
                <Row className="aug2021-siteTitle">
                  <Col>
                    <span>{data.presentedUserGroup}</span>
                    <h1>{data.siteTitle}</h1>
                  </Col>
                </Row>
                <Row className="aug2021-subTitle">
                  <Col>
                    <span>{data.subTitle}</span>
                  </Col>
                </Row>
                <Row className="aug2021-registrationBtn">
                  <Col>
                    <a href="#sessions-recordings">
                      <button className="aug2021-register-btn">
                        <span>{data.watchNowBtn}</span>
                      </button>
                    </a>
                  </Col>
                </Row>
              </Col>
              <Col md={12} xl={6} className="row aug2021-content-right">
                <Row className="aug2021-handles col-7">
                  <Col>
                    <a
                      href={
                        "https://twitter.com/search?q=" +
                        encodeURIComponent(data.twitterHashTag)
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="Twitter logo" src={twitterLogo} />
                      <span className="aug2021-twitterHashTag">
                        {data.twitterHashTag}
                      </span>
                    </a>
                  </Col>
                  <Col>
                    <a
                      href={"https://twitter.com/" + data.twitterHandle}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="Twitter logo" src={twitterLogo} />
                      <span className="aug2021-twitterHandle">
                        {data.twitterHandle}
                      </span>
                    </a>
                  </Col>
                </Row>
                <Row className="aug2021-eventDate">
                  <Col md={5} className="aug2021-eventData-border">
                    <span>{data.eventDate}</span>
                  </Col>
                </Row>
                <Row className="aug2021-fields">
                  <Col>
                    <span className="aug2021-eventTitle">
                      {data.eventTitle}
                    </span>
                    <div
                      className={
                        isMobile
                          ? "aug2021-fields-row"
                          : "aug2021-fields-row row"
                      }
                    >
                      <Col className="aug2021-sessionNumber">
                        <span>{Speakers.length}</span>
                        <span>SPEAKERS</span>
                      </Col>
                      <Col className="aug2021-trackNumber">
                        <span>{Sessions.length}</span>
                        <span>SESSIONS</span>
                      </Col>
                      <Col className="aug2021-sponserNumber">
                        <span>{Sponsors.length}</span>
                        <span>SPONSORS</span>
                      </Col>
                    </div>
                  </Col>
                </Row>
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};
