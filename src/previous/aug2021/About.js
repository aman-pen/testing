import React from "react";
// import HeaderData from "./content/HeaderData.json";
import "./css/About.scss";

export const About = () => {
  return (
    <div className="aug2021-about">
      <h1 className="aug2021-about-heading"> ABOUT </h1>
      <div className="aug2021-one-day-event">
        A One Day Event Focusing On The <span> Microsoft </span> Cloud Security
        Services
      </div>
      <div className="aug2021-about-para-text">
        India Cloud Security Summit , 2021 is a one day virtual event organized
        by the{" "}
        <span>
          <a
            href="https://www.meetup.com/Microsoft-365-and-Power-Platform-User-group-India/"
            target="_blank"
            rel="noreferrer"
          >
            Microsoft 365 , Power Platform & Cloud Security India User group
          </a>
        </span>
        . This event will completely focus on the Cloud Security services
        related to Microsoft 365 , Microsoft Azure, Microsoft Power Platform
        security and Dynamics 365 . This is the first of its kind from the
        Microsoft Community at India and we’re planning to cover all the aspects
        of Microsoft Cloud Security services in this event . In this one day
        virtual event we will deep-dive into Microsoft’s Cloud Security stack
        with hands-on sessions and labs, delivered to you by the experts and
        community leaders.
      </div>
      <div className="aug2021-registration-text">
        <a className="aug2021-registration-button" href="#sessions-recordings">
          <p>Watch Now</p>
        </a>
      </div>
    </div>
  );
};
