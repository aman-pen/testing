import React from "react";
import "./css/App.scss";
import { Header } from "./Header";
import { About } from "./About";
import { Donate } from "./Donate";
import { QuizPrizes } from "./QuizPrizes";
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
import { PromoPartner } from "./PromoPartner";
import { Prev } from "./previous/aug2021/Prev";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LazyLoad from "react-lazy-load";

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
                <LazyLoad>
                  <CountDownTimer />
                </LazyLoad>

                {/* <CallForSpeaker /> */}
                <LazyLoad>
                  <About />
                </LazyLoad>
                <LazyLoad>
                  <Donate />
                </LazyLoad>
                <LazyLoad>
                  <QuizPrizes />
                </LazyLoad>
                <LazyLoad>
                  <Agenda />
                </LazyLoad>
                <LazyLoad>
                  <KeyNoteSpeaker />
                </LazyLoad>
                <LazyLoad>
                  <Speaker />
                </LazyLoad>
                <LazyLoad>
                  <Sponsor />
                </LazyLoad>
                <LazyLoad>
                  <PromoPartner />
                </LazyLoad>
                {/* <UserGroups /> */}

                <LazyLoad>
                  <EventTeam />
                </LazyLoad>
                <LazyLoad>
                  <PreviousEvents />
                </LazyLoad>
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
