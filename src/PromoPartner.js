import React, { useState } from "react";
import "./css/Sponsor.scss";
import PromoPartnerData from "./content/PromoPartnerData.json";

export const PromoPartner = () => {
  return (
    <div className="oct2022-sponsor p-md-5 p-3" id="sponsors">
      <h1 className="oct2022-sponsor-heading my-5 text-center">
        {/* PROMOTIONAL PARTNERS */}
        PROMOTION PARTNER
      </h1>
      {/* <div className="row oct2022-sponsor-wrapper text-center"> */}
      <div
        className="row oct2022-sponsor-wrapper text-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {PromoPartnerData.map((data) => {
          return (
            // <div className="col-xs-12 col-md-6 col-lg-4 oct2022-sponsor-card">
            <div className="col-xs-12 col-md-6 col-lg-4 oct2022-sponsor-card">
              <a
                href={data.partnerUrl}
                target="_blank"
                rel="noreferrer"
                className="oct2022-sponsor-border"
              >
                <img
                  className="oct2022-sponsor-img"
                  alt={data.partner}
                  src={data.partnerImage}
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
