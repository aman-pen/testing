import React from "react";
// import HeaderData from "./content/HeaderData.json";
import "./css/EventTeam.scss";
import EventTeams from "./content/EventTeam.json";
import LinkedInlogo from "./images/website/LinkedInlogo.png";

export const EventTeam = () => {
  return (
    <div className="aug2021-eventTeam" id="eventTeam">
      <h1 className="aug2021-eventTeam-heading">EVENT TEAM</h1>
      <h2 className="aug2021-event-organizers">Organizers</h2>
      <div className="row">
        {EventTeams.map((data) => {
          return (
            <>
              {data.isVolunteer === "false" ? (
                <div className="col">
                  <img
                    src={data.OrganizerImage}
                    className="aug2021-organizer-image"
                    alt="organizer"
                  />
                  <h4 className="aug2021-organizer-name">
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
                      className="aug2021-card-linkedIn align-self-start"
                    />
                  </a>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
      {EventTeams.filter((et) => et.isVolunteer === "true").length > 0 ? (
        <>
          <h2 className="aug2021-event-organizers">Volunteers</h2>
          <div className="row">
            {EventTeams.map((data) => {
              return (
                <>
                  {data.isVolunteer === "true" ? (
                    <div className="col">
                      <img
                        src={`${data.OrganizerImage}`}
                        className="aug2021-organizer-image"
                        alt="organizer"
                      />
                      <h4 className="aug2021-organizer-name">
                        <span>{data.OrganizerName}</span>
                      </h4>
                      <a
                        href={data.speakerLinkedIn}
                        target="_blank"
                        className="col-2 nopadding"
                        rel="noreferrer"
                      >
                        <img
                          src={LinkedInlogo}
                          alt="LinkedIn"
                          className="aug2021-card-linkedIn align-self-start"
                        />
                      </a>
                    </div>
                  ) : null}
                </>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};
