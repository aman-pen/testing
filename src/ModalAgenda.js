/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./css/Modal.scss";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";
import sessions from "./content/Sessions.json";
// import speaker1 from "./images/speakers/Speaker1.png";
// import Speakers from "./content/SpeakersData.json";
import { ApiSpeaker } from "./services/Api";

const ModalAgenda = ({ modal, toggle, data }) => {
  const [speakerData, setSpeakerData] = useState();

  useEffect(() => {
    ApiSpeaker().then((data) => {
      // console.log("speaker api called");
      setSpeakerData(data);
    });
  }, []);

  const closeBtn = <button className="oct2022-close" onClick={toggle}></button>;
  // console.log(data, "dataAgenda");
  let startHour =
    data.startsAt.split("T")[1].split(":")[0] % 12 == 0
      ? 12
      : data.startsAt.split("T")[1].split(":")[0] % 12;

  let startMinutes = data.startsAt.split("T")[1].split(":")[1];

  let startM = data.startsAt.split("T")[1].split(":")[0] < 12 ? "AM" : "PM";

  let endHour =
    data.endsAt.split("T")[1].split(":")[0] % 12 == 0
      ? 12
      : data.endsAt.split("T")[1].split(":")[0] % 12;

  let endMinutes = data.endsAt.split("T")[1].split(":")[1];

  let endM = data.endsAt.split("T")[1].split(":")[0] < 12 ? "AM" : "PM";

  return (
    <div>
      <Modal className="oct2022-agenda-dialog" isOpen={modal} toggle={toggle}>
        <div className="oct2022-modalHeader">
          <ModalHeader toggle={toggle} close={closeBtn}>
            <div className="oct2022-event-time">
              {startHour + ":" + startMinutes + " " + startM} -{" "}
              {endHour + ":" + endMinutes + " " + endM}{" "}
            </div>
          </ModalHeader>
        </div>
        <ModalBody>
          <div className="oct2022-session-Title pb-5">
            <span>{data.title}</span>
          </div>
          <div className="oct2022-session-introtext">
            <span>{data.description}</span>
          </div>
          <div className="oct2022-divider"></div>
          <h2 className="text-center py-4">Speakers</h2>
          <div className="oct2022-speaker-array d-flex justify-content-center">
            {data.title === "Welcome Note" && (
              <div className="oct2022-speaker pr-2 pl-2">
                <img
                  src={sessions[1].profilePicture}
                  alt="Session Speaker"
                  width="50px"
                  height="50px"
                  className="oct2022-agenda-speaker-img"
                />

                <span className="oct2022-agenda-speaker-name">
                  {sessions[1].fullName}
                </span>
              </div>
            )}
            {data.title ===
              "Keynote : Cloud Security - Board Level Imperative" && (
              <div className="oct2022-speaker pr-2 pl-2">
                <img
                  src={sessions[0].profilePicture}
                  alt="Session Speaker"
                  width="50px"
                  height="50px"
                  className="oct2022-agenda-speaker-img"
                />

                <span className="oct2022-agenda-speaker-name">
                  {sessions[0].fullName}
                </span>
              </div>
            )}
            {data.title === "Quiz" && (
              <div className="oct2022-speaker  pr-2 pl-2">
                <img
                  src={sessions[2].profilePicture}
                  alt="Session Speaker"
                  width="50px"
                  height="50px"
                  className="oct2022-agenda-speaker-img"
                />
                <span className="oct2022-agenda-speaker-name">
                  {sessions[2].fullName}
                </span>
              </div>
            )}
            {data.title === "Quiz" && (
              <div className="oct2022-speaker  pr-2 pl-2">
                <img
                  src={sessions[3].profilePicture}
                  alt="Session Speaker"
                  width="50px"
                  height="50px"
                  className="oct2022-agenda-speaker-img"
                />
                <span className="oct2022-agenda-speaker-name">
                  {sessions[3].fullName}
                </span>
              </div>
            )}
            {data.title !==
              "Keynote : Cloud Security - Board Level Imperative" &&
              data.speakers.map((spkr) => {
                return (
                  <div className="oct2022-speaker pr-2 pl-2">
                    <img
                      src={
                        speakerData &&
                        speakerData.filter((s) => s.id === spkr.id)[0]
                          .profilePicture
                      }
                      alt="Session Speaker"
                      width="50px"
                      height="50px"
                      className="oct2022-agenda-speaker-img"
                    />

                    <span className="oct2022-agenda-speaker-name">
                      {speakerData &&
                        speakerData.filter((s) => s.id === spkr.id)[0].fullName}
                    </span>
                  </div>
                );
              })}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalAgenda;
