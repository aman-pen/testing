import React from "react";
import "./css/App.scss";
import { Header } from "./Header";
import { About } from "./About";
// import { Donate } from "./Donate";
import { Agenda } from "./Agenda";
import { Speaker } from "./Speaker";
import { Sponsor } from "./Sponsor";
import { UserGroups } from "./UserGroups";
import { Footer } from "./Footer";
import { KeyNoteSpeaker } from "./KeyNoteSpeaker";
import { CountDownTimer } from "./CountDownTimer";
import { EventTeam } from "./EventTeam";

export const Prev = () => {
  return (
    <>
      <Header />
      <CountDownTimer />
      <About />
      {/* <Donate /> */}
      <Agenda />
      <KeyNoteSpeaker />
      <Speaker />
      <Sponsor />
      <UserGroups />
      <EventTeam />
      <Footer />
    </>
  );
};
