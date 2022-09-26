import React from "react";
import "./css/App.scss";
import { Header } from "./Header";
import { About } from "./About";
import { Donate } from "./Donate";
import { CallForSpeaker } from "./CallForSpeaker";
import { Agenda } from "./Agenda";
import { Speaker } from "./Speaker";
import { Sponsor } from "./Sponsor";
import { UserGroups } from "./UserGroups";
import { PreviousEvents } from "./PreviousEvents";
import { Footer } from "./Footer";
import { KeyNoteSpeaker } from "./KeyNoteSpeaker";
import { CountDownTimer } from "./CountDownTimer";
import { EventTeam } from "./EventTeam";
import { Prev } from "./previous/aug2021/Prev";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid icss">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <CountDownTimer />
                {/* <CallForSpeaker /> */}
                <About />
                <Donate />
                <Agenda />
                {/* <KeyNoteSpeaker /> */}
                {/* <Speaker /> */}
                <Sponsor />
                {/* <UserGroups /> */}
                <EventTeam />
                <PreviousEvents />
                <Footer />
              </>
            }
          />
          <Route path="/aug2021" element={<Prev />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
