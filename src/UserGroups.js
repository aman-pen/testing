import React from "react";
import "./css/UserGroups.scss";
import UserGroupsData from "./content/UserGroupsData.json";
// import Group1 from "./images/website/group1.png";

export const UserGroups = () => {
  return (
    <div className="oct2022-user-groups">
      <h1 className="oct2022-user-groups-heading text-center">
        SUPPORTING USER GROUPS
      </h1>
      <div className="row oct2022-group-wrapper">
        {UserGroupsData.map((data) => {
          return (
            <div className="col-xs-12 col-md-12 col-lg-6 oct2022-group-card text-center">
              <a
                href={data.groupUrl}
                target="_blank"
                className="oct2022-group-border row align-items-center"
                rel="noreferrer"
              >
                <div className="col-3 col-xs-2 oct2022-group-img">
                  <img src={`${data.groupImage}`} alt={data.groupAltText} />
                </div>

                <div className="col-8 col-xs-8 oct2022-group-name">
                  <span>{data.groupName}</span>
                </div>
                <div className="col-1 col-xs-2 oct2022-group-arrow">
                  <div class="oct2022-arrow-right"></div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
