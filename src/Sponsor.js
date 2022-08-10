import React from "react";
import "./css/Sponsor.scss";
import SponsorData from "./content/SponsorData.json";

export const Sponsor = () => {
  return (
    <div className="oct2022-sponsor p-md-5 p-3" id="sponsors">
      <h1 className="oct2022-sponsor-heading my-5 text-center">SPONSORS</h1>
      {/* <div className="row oct2022-sponsor-wrapper text-center"> */}
      <div
        className="row oct2022-sponsor-wrapper text-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {SponsorData.map((data) => {
          return (
            // <div className="col-xs-12 col-md-6 col-lg-4 oct2022-sponsor-card">
            <div className="col-xs-12 col-md-6 col-lg-4 oct2022-sponsor-card">
              <a
                href={data.sponsorUrl}
                target="_blank"
                rel="noreferrer"
                className="oct2022-sponsor-border"
              >
                <img
                  className="oct2022-sponsor-img"
                  alt={data.sponsorAltText}
                  src={`${data.sponsorImage}`}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
