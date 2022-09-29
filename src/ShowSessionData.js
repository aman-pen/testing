import React, { useState, useEffect } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./css/Agenda.scss";
import Sessions from "./content/Sessions.json";
import { Row, Col } from "reactstrap";
import ModalAgenda from "./ModalAgenda";
import MicrosoftTeams from "./images/website/MicrosoftTeams.png";
// import Speakers from "./content/SpeakersData.json";
import sessions from "./content/Sessions.json";
import ModalSpeaker from "./ModalSpeaker";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";
import { ApiSpeaker, ApiGrid } from "./services/Api";

export const ShowSessionData = ({ CurrentTrackID }) => {
  const [gridData, setGridData] = useState();
  const [speakerData, setSpeakerData] = useState();

  useEffect(() => {
    ApiGrid().then((data) => {
      console.log("Grid api called");
      setGridData(data);
    });

    ApiSpeaker().then((data) => {
      console.log("speaker api called");
      setSpeakerData(data);
    });
  }, []);

  const [modal, setModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const toggle = (data) => {
    setClickedData(data);
    setModal(!modal);
  };

  const [SpeakerModal, setSpeakerModal] = useState(false);
  const [clickedSpeakerData, setClickedSpeakerData] = useState([]);
  const SpeakerModaltoggle = (data) => {
    setClickedSpeakerData(data);
    setSpeakerModal(!SpeakerModal);
  };

  // const ShowSessionUrl = EventData.showSessionUrl;
  // const CurrentSessions = Sessions.filter(
  //   (d) => d.trackId.toString() === CurrentTrackID
  // );
  return (
    <>
      <div className="container-fluid oct2022-trackdata">
        {console.log(gridData, "check")}
        {gridData &&
          gridData[0].rooms[CurrentTrackID - 1].sessions.map((data) => {
            return (
              <div key={"key" + Math.random()}>
                <Row className="oct2022-trackdata-bg">
                  <>
                    <Col
                      md={12}
                      lg={3}
                      className="p-0 cursor-click m-auto"
                      onClick={() => toggle(data)}
                    >
                      <div className="oct2022-event-time">
                        {new Date(data.startsAt)
                          .toLocaleTimeString("en-US", { hour12: true })
                          .split(":")[0] +
                          ":" +
                          new Date(data.startsAt)
                            .toLocaleTimeString("en-US", { hour12: true })
                            .split(":")[1] +
                          " " +
                          new Date(data.startsAt)
                            .toLocaleTimeString("en-US", { hour12: true })
                            .split(" ")[1]}{" "}
                        -{" "}
                        {new Date(data.endsAt)
                          .toLocaleTimeString("en-US", { hour12: true })
                          .split(":")[0] +
                          ":" +
                          new Date(data.endsAt)
                            .toLocaleTimeString("en-US", { hour12: true })
                            .split(":")[1] +
                          " " +
                          new Date(data.startsAt)
                            .toLocaleTimeString("en-US", { hour12: true })
                            .split(" ")[1]}{" "}
                        {console.log(new Date(data.startsAt).getHours())}
                      </div>
                      <span className="oct2022-event-time">IST</span>
                    </Col>
                    <Col
                      md={12}
                      lg={5}
                      className="oct2022-event-desc cursor-click m-auto"
                      onClick={() => toggle(data)}
                    >
                      {data.title}
                    </Col>
                    <Col md={12} lg={4} className="oct2022-event-speakers">
                      <div className="oct2022-speaker-head">Speakers</div>
                      <div className="d-flex justify-content-center">
                        {data.title === "Welcome Note" && (
                          <div className="oct2022-speaker  pr-2 pl-2">
                            <LazyLoad height={70} width={70} debounce={false}>
                              <ImageLoader
                                onClick={() => SpeakerModaltoggle(sessions[1])}
                                src={sessions[1].profilePicture}
                                alt="Session Speaker"
                                width="50px"
                                height="50px"
                                className="oct2022-agenda-speaker-img"
                              />
                            </LazyLoad>
                            <span className="oct2022-agenda-speaker-name">
                              {sessions[1].fullName}
                            </span>
                          </div>
                        )}
                        {data.title ===
                          "Keynote : Cloud Security - Board Level Imperative" && (
                          <div className="oct2022-speaker  pr-2 pl-2">
                            <LazyLoad height={70} width={70} debounce={false}>
                              <ImageLoader
                                onClick={() => SpeakerModaltoggle(sessions[0])}
                                src={sessions[0].profilePicture}
                                alt="Session Speaker"
                                width="50px"
                                height="50px"
                                className="oct2022-agenda-speaker-img"
                              />
                            </LazyLoad>
                            <span className="oct2022-agenda-speaker-name">
                              {sessions[0].fullName}
                            </span>
                          </div>
                        )}
                        {data.title === "Quiz" && (
                          <div className="oct2022-speaker  pr-2 pl-2">
                            <LazyLoad height={70} width={70} debounce={false}>
                              <ImageLoader
                                onClick={() => SpeakerModaltoggle(sessions[2])}
                                src={sessions[2].profilePicture}
                                alt="Session Speaker"
                                width="50px"
                                height="50px"
                                className="oct2022-agenda-speaker-img"
                              />
                            </LazyLoad>
                            <span className="oct2022-agenda-speaker-name">
                              {sessions[2].fullName}
                            </span>
                          </div>
                        )}
                        {data.title === "Quiz" && (
                          <div className="oct2022-speaker  pr-2 pl-2">
                            <LazyLoad height={70} width={70} debounce={false}>
                              <ImageLoader
                                onClick={() => SpeakerModaltoggle(sessions[3])}
                                src={sessions[3].profilePicture}
                                alt="Session Speaker"
                                width="50px"
                                height="50px"
                                className="oct2022-agenda-speaker-img"
                              />
                            </LazyLoad>
                            <span className="oct2022-agenda-speaker-name">
                              {sessions[3].fullName}
                            </span>
                          </div>
                        )}
                        {data.title !==
                          "Keynote : Cloud Security - Board Level Imperative" &&
                          data.speakers.map((spkr) => {
                            return (
                              <div className="oct2022-speaker  pr-2 pl-2">
                                <LazyLoad
                                  height={70}
                                  width={70}
                                  debounce={false}
                                >
                                  <ImageLoader
                                    onClick={() =>
                                      SpeakerModaltoggle(
                                        speakerData &&
                                          speakerData.filter(
                                            (s) => s.id === spkr.id
                                          )[0]
                                      )
                                    }
                                    src={
                                      speakerData &&
                                      speakerData.filter(
                                        (s) => s.id === spkr.id
                                      )[0].profilePicture
                                    }
                                    alt="Session Speaker"
                                    width="50px"
                                    height="50px"
                                    className="oct2022-agenda-speaker-img"
                                  />
                                </LazyLoad>
                                <span className="oct2022-agenda-speaker-name">
                                  {speakerData &&
                                    speakerData.filter(
                                      (s) => s.id === spkr.id
                                    )[0].fullName}
                                  {console.log(sessions, "ccccd")}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    </Col>
                  </>
                </Row>
              </div>
            );
          })}
        {/* {gridData[CurrentTrackID - 1].map((data) => {
          console.log(data, "grid");

          return (
            <div key={"key" + Math.random()}>
              <Row className="oct2022-trackdata-bg">
                <>
                  <Col
                    md={12}
                    lg={3}
                    className="p-0 cursor-click"
                    onClick={() => toggle(data)}
                  >
                    <div className="oct2022-event-time">{data.startsAt}</div>
                  </Col>
                  <Col
                    md={12}
                    lg={5}
                    className="oct2022-event-desc cursor-click"
                    onClick={() => toggle(data)}
                  >
                    {data.rooms[0].session.title}
                  </Col>
                  <Col md={12} lg={4} className="oct2022-event-speakers">
                    <div className="oct2022-speaker-head"> Speakers </div>
                    <div>
                      {data.rooms.map((data) => {
                        return (
                          <div className="oct2022-speaker">
                             {console.log(spkr, "checkrrrrr")} 
                            <LazyLoad height={70} width={70} debounce={false}>
                              <ImageLoader
                                onClick={
                                  () => SpeakerModaltoggle()
                                  // spkr.filter((s) => s.id === data.id)[0]
                                }
                                // src={
                                //   spkr.filter((s) => s.id === data.id)[0]
                                //     .profilePicture
                                // }
                                alt={data.name}
                                width="50px"
                                height="50px"
                                className="oct2022-agenda-speaker-img"
                              />
                            </LazyLoad>

                            <span className="oct2022-agenda-speaker-name">
                              {data.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                </>
              </Row> 
            </div>
           ); 
        })} */}
      </div>
      {modal === true ? (
        <ModalAgenda data={clickedData} modal={modal} toggle={toggle} />
      ) : null}
      {SpeakerModal === true ? (
        <ModalSpeaker
          data={clickedSpeakerData}
          modal={SpeakerModal}
          toggle={SpeakerModaltoggle}
        />
      ) : null}
    </>
  );
};
