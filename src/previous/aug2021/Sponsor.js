import React from "react";
import "./css/Sponsor.scss";
import SponsorData from "./content/SponsorData.json";

export const Sponsor = () => {
  return (
    <div className="aug2021-sponsor p-md-5 p-3" id="sponsors">
      <h1 className="aug2021-sponsor-heading my-5 text-center">SPONSORS</h1>
      <div className="row aug2021-sponsor-wrapper text-center">
        {SponsorData.map((data) => {
          return (
            <div className="col-xs-12 col-md-6 col-lg-4 aug2021-sponsor-card">
              <a
                href={data.sponsorUrl}
                target="_blank"
                rel="noreferrer"
                className="aug2021-sponsor-border"
              >
                <img
                  className="aug2021-sponsor-img"
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
