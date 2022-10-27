import React from "react";
// import HeaderData from "./content/HeaderData.json";
import "./css/EventTeam.scss";
// import EventTeams from "./content/EventTeam.json";
import Organizers from "./content/EventTeam.json";
import LinkedInlogo from "./images/website/LinkedInlogo.png";

export const EventTeam = () => {
  return (
    <div className="oct2022-eventTeam" id="eventTeam">
      <h1 className="oct2022-eventTeam-heading">EVENT TEAM</h1>
      <h2 className="oct2022-event-organizers">Organizers</h2>
      <div className="row">
        {Organizers.filter((item) => item.isVolunteer == "false").map(
          (data) => {
            return (
              <>
                <div className="col">
                  <img
                    src={data.OrganizerImage}
                    className="oct2022-organizer-image"
                    alt="organizer"
                  />
                  <h4 className="oct2022-organizer-name">
                    <span>{data.OrganizerName}</span>
                  </h4>
                  <a
                    href={data.speakerLinkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="col-2 nopadding"
                  >
                    <img
                      src={LinkedInlogo}
                      alt="LinkedIn"
                      className="oct2022-card-linkedIn align-self-start"
                    />
                  </a>
                </div>
              </>
            );
          }
        )}
      </div>
      <h2 className="oct2022-event-organizers">Volunteers </h2>
      <div className="row">
        {Organizers.filter((item) => item.isVolunteer == "true").map((data) => {
          return (
            <div className="col">
              <img
                src={data.OrganizerImage}
                className="oct2022-organizer-image"
                alt="organizer"
              />
              <h4 className="oct2022-organizer-name">
                <span>{data.OrganizerName}</span>
              </h4>
              <a
                href={data.speakerLinkedIn}
                target="_blank"
                rel="noreferrer"
                className="col-2 nopadding"
              >
                <img
                  src={LinkedInlogo}
                  alt="LinkedIn"
                  className="oct2022-card-linkedIn align-self-start"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
