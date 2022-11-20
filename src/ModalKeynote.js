import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  //  ModalBody
} from "reactstrap";
import "./css/Modal.scss";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import Twitterlogo from "./images/website/twitterblue.png";
import MVPlogo from "./images/website/mvp.jpg";
import Microsoftlogo from "./images/website/microsoft_logo.png";
import { ApiSession } from "./services/Api";

const ModalKeynote = ({ modal, toggle, data }) => {
  const closeBtn = <button className="oct2022-close" onClick={toggle}></button>;
  // console.log("modal data", data);
  const [sessData, setSessData] = useState();

  useEffect(() => {
    ApiSession().then((data) => {
      // console.log("Grid api called");
      setSessData(data);
    });
  }, []);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="oct2022-modalHeader">
          <ModalHeader toggle={toggle} close={closeBtn}>
            {data.fullName}
            {/* <button type="button" className="oct2022-close-icon"></button> */}
          </ModalHeader>
        </div>
        <div className="nopadding">
          <div className="p-5 text-center">
            <img
              src={`${data.profilePicture}`}
              alt={data.speakerAltText}
              className="oct2022-modal-image modal-image"
            />
          </div>
          <div className="oct2022-bg-grey bg-grey p-5">
            <h4 className="mb-4">BIO</h4>
            <p className="oct2022-speaker-information">
              {data.questionAnswers[2].answer}
            </p>
            {data.sessions.map((dt) => {
              let strDt =
                sessData &&
                sessData[0].sessions.filter((s) => s.id == dt.id)[0].startsAt;
              let edDt =
                sessData &&
                sessData[0].sessions.filter((s) => s.id == dt.id)[0].endsAt;
              // console.log("strDt", strDt && strDt.split("T"));
              let startHour =
                strDt && strDt.split("T")[1].split(":")[0] % 12 == 0
                  ? 12
                  : strDt && strDt.split("T")[1].split(":")[0] % 12;

              let startMinutes = strDt && strDt.split("T")[1].split(":")[1];

              let startM =
                strDt && strDt.split("T")[1].split(":")[0] < 12 ? "AM" : "PM";

              let endHour =
                edDt && edDt.split("T")[1].split(":")[0] % 12 == 0
                  ? 12
                  : edDt && edDt.split("T")[1].split(":")[0] % 12;

              let endMinutes = edDt && edDt.split("T")[1].split(":")[1];

              let endM =
                edDt && edDt.split("T")[1].split(":")[0] < 12 ? "AM" : "PM";
              return (
                <div className="oct2022-speaker-session-details">
                  <div className="oct2022-divider"></div>
                  <div className="oct2022-row row">
                    <div className="oct2022-modal-track-num col-4">
                      {/* Track {dt.trackId} */}
                      Topic
                    </div>
                    <div className="col-8 oct2022-speaker-session-time">
                      {/* {dt.sessionTime} */}

                      {sessData && (
                        <span className="oct2022-event-time">
                          {startHour + ":" + startMinutes + " " + startM} -{" "}
                          {endHour + ":" + endMinutes + " " + endM}{" "}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="oct2022-speaker-session-title">{dt.name}</div>
                </div>
              );
            })}
            <div className="oct2022-divider"></div>
            <div className="oct2022-social-media-array">
              {data.categories[1]?.categoryItems[0]?.name === "Yes" && (
                <div>
                  <img
                    src={MVPlogo}
                    alt="MVP"
                    className="oct2022-card-socialmedia nopadding align-self-start oct2022-cursor-none"
                  />
                </div>
              )}
              {data.categories[0]?.categoryItems[0]?.name === "Yes" && (
                <div>
                  <img
                    src={Microsoftlogo}
                    alt="Microsoft Employee"
                    className="oct2022-card-socialmedia nopadding align-self-start"
                  />
                </div>
              )}
              {/* --------------------------- */}
              <div className="d-flex flex-row-reverse justify-content-end">
                {data.links
                  .filter(
                    (data) =>
                      data.title === "Twitter" || data.title === "LinkedIn"
                  )
                  .map((link) => {
                    return (
                      <a href={link.url} target="_blank" rel="noreferrer">
                        <img
                          src={
                            link.title === "Twitter"
                              ? Twitterlogo
                              : LinkedInlogo
                          }
                          alt={
                            link.title === "Twitter"
                              ? "Twitter logo"
                              : "LinkedIn logo"
                          }
                          className="oct2022-card-socialmedia align-self-start pr-4"
                        />
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalKeynote;
