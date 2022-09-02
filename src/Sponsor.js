import React, { useState } from "react";
import "./css/Sponsor.scss";
import SponsorData from "./content/SponsorData.json";
import { ModalSponsor } from "./ModalSponsor";
export const Sponsor = () => {
  const [modalSponsor, setModalSponsor] = useState(false);

  const toggle = (data) => {
    setModalSponsor(!modalSponsor);
  };

  return (
    <div className="oct2022-sponsor p-md-5 p-3" id="sponsors">
      <h1 className="oct2022-sponsor-heading my-5 text-center">SPONSORS</h1>
      {/* <div className="row oct2022-sponsor-wrapper text-center"> */}
      <div
        className="row oct2022-sponsor-wrapper text-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="oct2022-sponsor-StatusHeading diamond">
          Diamond
          <div className="oct2022-horizontal-divider mt-2" />
        </div>

        {SponsorData.filter((data) => {
          return data.sponsorStatus === "diamond";
        }).map((data) => {
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

      <div
        className="row oct2022-sponsor-wrapper text-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="oct2022-sponsor-StatusHeading platinum">
          Platinum
          <div className="oct2022-horizontal-divider mt-2" />
        </div>
        <div
          className="mt-4 oct2022-applySponsorText d-flex justify-content-center align-items-center"
          style={{ height: "10rem" }}
        >
          <button
            onClick={toggle}
            className="oct2022-applySponsorLink"
            style={{ cursor: "pointer" }}
          >
            Apply for the Sponsorship
          </button>
        </div>
        {SponsorData.filter((data) => {
          return data.sponsorStatus === "platinum";
        }).map((data) => {
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

      <div
        className="row oct2022-sponsor-wrapper text-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="oct2022-sponsor-StatusHeading gold">
          Gold
          <div className="oct2022-horizontal-divider mt-2" />
        </div>
        {SponsorData.filter((data) => {
          return data.sponsorStatus === "gold";
        }).map((data) => {
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
      <ModalSponsor modal={modalSponsor} toggle={toggle} />
    </div>
  );
};
