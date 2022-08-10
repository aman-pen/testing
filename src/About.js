import React from "react";
import HeaderData from "./content/HeaderData.json";
import "./css/About.scss";

export const About = () => {
  return (
    <div className="oct2022-about">
      <h1 className="oct2022-about-heading"> ABOUT </h1>
      <div className="oct2022-one-day-event">
        A One Day Event Focusing On The <span> Microsoft </span> Cloud Security
        Services
      </div>
      <div className="oct2022-about-para-text">
        India Cloud Security Summit , 2022 is a one day virtual event organized
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
      <div className="oct2022-registration-text">
        {/* <a
          className="oct2022-registration-button"
          href={HeaderData[0].registrationLink}
          target="_blank"
          rel="noreferrer"
        > */}
        <div
          className="oct2022-registration-button cursor-pointer"
          style={{ cursor: "pointer" }}
        >
          {/* <p>Registrations are free !</p> */}
          <p>COMING SOON !</p>
        </div>
        {/* </a> */}
      </div>
    </div>
  );
};
