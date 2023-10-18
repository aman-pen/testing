import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import "../style/global.scss";
import "../style/speaker.scss";
import keyNote from "../store/oct2022/keyNote.json";
import Card from "./subComponents/Card";
import AboutSpeaker from "./subComponents/AboutSpeaker";

const KeynoteSpeaker = ({ theme }) => {
  const [speakerModal, setSpeakerModal] = React.useState(false);
  const [speakerModalData, setSpeakerModalData] = useState({});

  return (
    <>
      <div className="speakers">
        <Box className="sectionMaxWidth">
          <Box className="speakersHeadingBox">
            <Typography
              className="text-uppercase text-center speakersHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
              }}
            >
              Keynote Speakers
            </Typography>
          </Box>
          <Box className="d-flex justify-content-center keynote-box">
            <Box
              onClick={() => {
                setSpeakerModal(true);
                setSpeakerModalData(keynoteData[0]);
              }}
            >
              <Card
                theme={theme}
                image={keyNote.image}
                name={keyNote.name}
                designation={keyNote.designation}
                company={keyNote.company}
                linkedIn={keyNote.linkedIn}
                twitter={keyNote.twitter}
                microsoft={true}
                mvp={false}
              />
            </Box>
          </Box>
        </Box>
      </div>
      <AboutSpeaker
        theme={theme}
        open={speakerModal}
        sessionOpen={null}
        close={setSpeakerModal}
        data={speakerModalData}
        sessions={null}
        isKeynote={true}
      />
    </>
  );
};
export default KeynoteSpeaker;

const keynoteData = [
  {
    id: "4",
    firstName: "Hammad",
    lastName: "Rajjoub",
    fullName: "Hammad Rajjoub",
    bio: "Hammad Rajjoub is a highly regarded product leader with over 15 years of experience in the technology industry. He currently serves as the Director of Product Strategy and Marketing Management at Microsoft, where he is responsible for product strategy as well as marketing execution for extensibility (APIs, Connectors, AI, ML, etc.) and developer ecosystem, including (SIs, ISVs, and MSSPs) across various solution areas.",
    tagLine: "-",
    profilePicture: keyNote.image,
    sessions: [
      { id: "682c34f4-0a70-4207-8c64-79be6d8edaec", name: "Welcome Keynote" },
    ],
    isTopSpeaker: false,
    links: [],
    questionAnswers: [
      {
        id: 50129,
        question: "Company Name",
        questionType: "Short_Text",
        answer: "Microsoft",
        sort: 0,
        answerExtra: null,
      },
      {
        id: 50130,
        question: "LinkedIn ID",
        questionType: "Short_Text",
        answer: "https://www.linkedin.com/in/hammadrajjoub/",
        sort: 1,
        answerExtra: null,
      },
      {
        id: 50131,
        question: "Twitter ID",
        questionType: "Short_Text",
        answer: "https://twitter.com/iRajjoub",
        sort: 2,
        answerExtra: null,
      },
      {
        id: 50132,
        question: "Instagram ID",
        questionType: "Short_Text",
        answer: "-",
        sort: 3,
        answerExtra: null,
      },
      {
        id: 50133,
        question: "WhatsApp no.",
        questionType: "Short_Text",
        answer: "-",
        sort: 4,
        answerExtra: null,
      },
      {
        id: 52209,
        question: "Designation",
        questionType: "Short_Text",
        answer: "Director of Product Strategy and Marketing Management",
        sort: 5,
        answerExtra: null,
      },
    ],
    categories: [
      {
        id: 50127,
        name: "Can we mention your company name on the poster?",
        categoryItems: [
          {
            id: 171335,
            name: "Yes",
          },
        ],
        sort: 0,
      },
      {
        id: 50128,
        name: "Are you currently a Microsoft MVP?",
        categoryItems: [
          {
            id: 171337,
            name: "No",
          },
        ],
        sort: 1,
      },
    ],
  },
];
