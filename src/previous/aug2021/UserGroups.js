import React from "react";
import "./css/UserGroups.scss";
import UserGroupsData from "./content/UserGroupsData.json";
// import Group1 from "./images/website/group1.png";
import arrow from "./images/website/Arrow.png";

export const UserGroups = () => {
  return (
    <div className="aug2021-user-groups">
      <h1 className="aug2021-user-groups-heading text-center">
        SUPPORTING USER GROUPS
      </h1>
      <div className="row aug2021-group-wrapper">
        {UserGroupsData.map((data) => {
          return (
            <div className="col-xs-12 col-md-12 col-lg-6 aug2021-group-card text-center">
              <a
                href={data.groupUrl}
                target="_blank"
                className="aug2021-group-border row align-items-center"
                rel="noreferrer"
              >
                <div className="col-3 col-xs-2 aug2021-group-img">
                  <img src={`${data.groupImage}`} alt={data.groupAltText} />
                </div>

                <div className="col-8 col-xs-8 aug2021-group-name">
                  <span>{data.groupName}</span>
                </div>
                <div className="col-1 col-xs-2 aug2021-group-arrow">
                  <img
                    src={arrow}
                    alt="arrow"
                    className="aug2021-group-arrow"
                  />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
