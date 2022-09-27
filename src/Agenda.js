import React, { useState, useEffect } from "react";
import "./css/Agenda.scss";
import { ShowSessionData } from "./ShowSessionData";
// import Sessions from "./content/Sessions.json";
import TrackDetails from "./content/TrackDetails.json";
import { ComingSoon } from "./ComingSoon";
import { ApiSession } from "./services/Api";

import { Col } from "reactstrap";

export const Agenda = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    let mounted = true;
    ApiSession().then((data) => {
      if (mounted) {
        setSessions(data);
      }
    });
    return () => (mounted = false);
  }, []);

  const trackfunc = (trackValue) => {
    setTrack(trackValue);
    var temptrack = trackDetailsState;
    let i = 0;
    for (i = 0; i < temptrack.length; i++) {
      if (temptrack[i].trackId === trackValue) {
        temptrack[i].isActive = true;
      } else {
        temptrack[i].isActive = false;
      }
    }
    setTrackDetails(temptrack);
  };

  const [track, setTrack] = useState("1");

  const [trackDetailsState, setTrackDetails] = useState(TrackDetails);
  return (
    <div className="oct2022-agenda" id="agenda">
      <h1 className="oct2022-agenda-heading"> AGENDA </h1>
      {/* <div className="mt-4">
        <ComingSoon />
      </div> */}
      <div className="oct2022-agenda-para-text-1">
        Check out the agenda and the sessions for the India Cloud Security
        Summit 2021 event.
      </div>
      <div className="oct2022-agenda-para-text-2">
        This event has an ensemble of amazing workshops and seminars by
        professionals.
      </div>
      <div className="container-fluid oct2022-track-list">
        <div className="row oct2022-track-row">
          {trackDetailsState.map((data) => {
            return (
              <Col
                xs="4"
                className="oct2022-tracks"
                key={data.trackId}
                onClick={() => trackfunc(data.trackId)}
              >
                {data.isActive === true ? (
                  <div className="oct2022-track-data oct2022-selected-track">
                    <div className="oct2022-track-head">{data.trackTitle}</div>
                    <span className="oct2022-track-span">
                      {data.trackSubTitle}
                    </span>
                    <span className="oct2022-track-date">{data.trackDate}</span>
                  </div>
                ) : (
                  <div className="oct2022-track-data">
                    <div className="oct2022-track-head">{data.trackTitle} </div>
                    <span className="oct2022-track-span">
                      {data.trackSubTitle}
                    </span>
                    <span className="oct2022-track-date">{data.trackDate}</span>
                  </div>
                )}
              </Col>
            );
          })}
        </div>
      </div>
      <ShowSessionData CurrentTrackID={track} />
    </div>
  );
};
