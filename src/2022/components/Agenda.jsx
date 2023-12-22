import React, { useState, useRef } from "react";
import {
  Typography,
  Box,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  Avatar,
  SvgIcon,
  Button,
} from "@mui/material";
import moment from "moment-timezone";
import about from "../store/oct2022/about.json";
import "../style/global.scss";
import "../style/speaker.scss";
import "../style/agenda.scss";
import AboutSpeaker from "./subComponents/AboutSpeaker";
import AboutSession from "./subComponents/AboutSession";
import welcomeSpeaker from "../assets/speakers/vignesh.jpg";
import keynoteSpeaker from "../assets/speakers/hammad_rajjoub.jpg";
import Tushar from "../assets/organizers/TusharKumar.jpg";
import Shrusti from "../assets/speakers/ShrustiShah.jpg";
import VivaExplorer from "../assets/logoIcons/VivaExplorersHeader-Image.png";

import trackdetails from "../store/oct2022/tracksdetails.json"

export const staticContributorData = [
  // {
  //   id: "1",
  //   firstName: "Tushar",
  //   lastName: "Kumar",
  //   fullName: "Tushar Kumar",
  //   bio: "Azure Certified Cloud Solutions Architect, Awarded Most valuable professional by Alibaba Cloud, former MSP, Community lead and Microsoft recognized Azure Community Hero. With rich experience in planning, designing, implementing and maintaining secure applications in Azure Cloud from x86 and non-x86 environments. A recognized leader in migrating and creating enterprise architecture for the transition from on-premise to cloud using Azure services. I hold advanced specialization in Identity, Security, and Compliance and working extensively in the large transformation of enterprises and Banking Finance and Insurance institutions towards public cloud and responsible for designing scalable architecture with respective industry standards and security compliance Framework.",
  //   tagLine: "-",
  //   profilePicture: Tushar,
  //   sessions: [
  //     {
  //       id: "8c13b06b-d43a-4615-abe3-0ac805939849",
  //       name: "Quiz & Closing Note",
  //     },
  //   ],
  //   isTopSpeaker: false,
  //   links: [],
  //   questionAnswers: [
  //     {
  //       id: 50129,
  //       question: "Company Name",
  //       questionType: "Short_Text",
  //       answer: "Codec",
  //       sort: 0,
  //       answerExtra: null,
  //     },
  //     {
  //       id: 50130,
  //       question: "LinkedIn ID",
  //       questionType: "Short_Text",
  //       answer: "https://www.linkedin.com/in/followtushar",
  //       sort: 1,
  //       answerExtra: null,
  //     },
  //     {
  //       id: 50131,
  //       question: "Twitter ID",
  //       questionType: "Short_Text",
  //       answer: "https://twitter.com/followtushar",
  //       sort: 2,
  //       answerExtra: null,
  //     },
  //     {
  //       id: 50132,
  //       question: "Instagram ID",
  //       questionType: "Short_Text",
  //       answer: "-",
  //       sort: 3,
  //       answerExtra: null,
  //     },
  //     {
  //       id: 50133,
  //       question: "WhatsApp no.",
  //       questionType: "Short_Text",
  //       answer: "-",
  //       sort: 4,
  //       answerExtra: null,
  //     },
  //     {
  //       id: 52209,
  //       question: "Designation",
  //       questionType: "Short_Text",
  //       answer: "Cloud Security Lead",
  //       sort: 5,
  //       answerExtra: null,
  //     },
  //   ],
  //   categories: [
  //     {
  //       id: 50127,
  //       name: "Can we mention your company name on the poster?",
  //       categoryItems: [
  //         {
  //           id: 171335,
  //           name: "Yes",
  //         },
  //       ],
  //       sort: 0,
  //     },
  //     {
  //       id: 50128,
  //       name: "Are you currently a Microsoft MVP?",
  //       categoryItems: [
  //         {
  //           id: 171337,
  //           name: "No",
  //         },
  //       ],
  //       sort: 1,
  //     },
  //   ],
  // },
  {
    id: "1",
    firstName: "Tushar",
    lastName: "Kumar",
    fullName: "Tushar Kumar",
    bio: "Azure Certified Cloud Solutions Architect, Awarded Most valuable professional by Alibaba Cloud, former MSP, Community lead and Microsoft recognized Azure Community Hero. With rich experience in planning, designing, implementing and maintaining secure applications in Azure Cloud from x86 and non-x86 environments. A recognized leader in migrating and creating enterprise architecture for the transition from on-premise to cloud using Azure services. I hold advanced specialization in Identity, Security, and Compliance and working extensively in the large transformation of enterprises and Banking Finance and Insurance institutions towards public cloud and responsible for designing scalable architecture with respective industry standards and security compliance Framework.",
    tagLine: "-",
    profilePicture: Tushar,
    sessions: [
      {
        id: "8c13b06b-d43a-4615-abe3-0ac805939849",
        name: "Quiz & Closing Note",
      },
    ],
    isTopSpeaker: false,
    links: [
      {
        title: "Twitter",
        url: "https://twitter.com/followtushar",
        linkType: "Twitter",
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/followtushar",
        linkType: "LinkedIn",
      },
    ],
    questionAnswers: [
      {
        id: 43958,
        question: "Company Name",
        questionType: "Short_Text",
        answer: "Codec",
        sort: 0,
        answerExtra: null,
      },
      {
        id: 43959,
        question: "Designation",
        questionType: "Short_Text",
        answer: "Cloud Security Lead",
        sort: 5,
        answerExtra: null,
      },
    ],
    categories: [
      {
        id: 43956,
        name: "Are you a Microsoft Employee?",
        categoryItems: [{}],
        sort: 0,
      },
      {
        id: 43957,
        name: "Are you  a Microsoft MVP?",
        categoryItems: [
          {
            id: 144060,
            name: "No",
          },
        ],
        sort: 1,
      },
    ],
  },
  // {
  //   id: "2",
  //   firstName: "Shrushti",
  //   lastName: "Shah",
  //   fullName: "Shrushti Shah",
  //   bio: "Speaker, Working professional with 4.5+ years of experience as SharePoint Framework Developer, Building usecases in Microsoft Teams and Microsoft Power Platform based on the latest features by Microsoft.",
  //   tagLine: "-",
  //   profilePicture: Shrusti,
  //   sessions: [
  //     {
  //       id: "501279",
  //       name: "Empower employees using viva engage and keep every employee in the flow of work using connection",
  //     },
  //     { id: "b9ea879f-d988-410c-901f-6ebdf6d99597", name: "Quiz" },
  //   ],
  //   isTopSpeaker: false,
  //   links: [
  //     {
  //       linkType: "Twitter",
  //       title: "Twitter",
  //       url: null,
  //     },
  //     {
  //       linkType: "LinkedIn",
  //       title: "LinkedIn",
  //       url: "https://www.linkedin.com/in/shrushti-shah-bba565162/",
  //     },
  //   ],
  //   questionAnswers: [
  //     {
  //       id: 52209,
  //       question: "Designation",
  //       questionType: "Short_Text",
  //       answer: "Cloud & Microsoft 365 Consultant",
  //       sort: 1,
  //       answerExtra: null,
  //     },
  //     {
  //       id: 52209,
  //       question: "Bio",
  //       questionType: "Long_Text",
  //       answer:
  //         "Speaker, Working professional with 4.5+ years of experience as SharePoint Framework Developer, Building usecases in Microsoft Teams and Microsoft Power Platform based on the latest features by Microsoft.",
  //       sort: 2,
  //       answerExtra: null,
  //     },
  //     {
  //       id: 52209,
  //       question: "Twitter",
  //       questionType: "Long_Text",
  //       answer: null,
  //       sort: 3,
  //       answerExtra: null,
  //     },
  //     {
  //       id: 52209,
  //       question: "Custom TagLine",
  //       questionType: "Long_Text",
  //       answer: "Cloud & Microsoft 365 Consultant",
  //       sort: 4,
  //       answerExtra: null,
  //     },
  //     {
  //       id: 52209,
  //       question: "Company",
  //       questionType: "Long_Text",
  //       answer: "Rapid Circle",
  //       sort: 5,
  //       answerExtra: null,
  //     },
  //     {
  //       id: 52209,
  //       question: "LinkedIn",
  //       questionType: "Long_Text",
  //       answer: "https://www.linkedin.com/in/shrushti-shah-bba565162/",
  //       sort: 6,
  //       answerExtra: null,
  //     },
  //     {
  //       id: 52209,
  //       question: "isMVP",
  //       questionType: "Long_Text",
  //       answer: "Yes",
  //       sort: 7,
  //       answerExtra: null,
  //     },
  //     {
  //       id: 52209,
  //       question: "isMicrosoftEmployee",
  //       questionType: "Long_Text",
  //       answer: "No",
  //       sort: 7,
  //       answerExtra: null,
  //     },
  //   ],
  //   categories: [],
  // },
  {
    id: "501279",
    firstName: "Shrushti",
    lastName: "Shah",
    fullName: "Shrushti Shah",
    bio: "Speaker, Working professional with 4.5+ years of experience as SharePoint Framework Developer, Building usecases in Microsoft Teams and Microsoft Power Platform based on the latest features by Microsoft.",
    tagLine: "Cloud & Microsoft 365 Consultant",
    profilePicture: Shrusti,
    title: "Quiz",
    sessions: [{ id: "501279", name: "Quiz" }],
    isTopSpeaker: false,
    links: [
      {
        title: "Twitter",
        url: null,
        linkType: "Twitter",
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/shrushti-shah-bba565162/",
        linkType: "LinkedIn",
      },
    ],
    questionAnswers: [
      {
        id: 43958,
        question: "Company Name",
        questionType: "Short_Text",
        answer: "Rapid Circle",
        sort: 26,
        answerExtra: null,
      },
      {
        id: 43959,
        question: "Designation",
        questionType: "Short_Text",
        answer: "Cloud & Microsoft 365 Consultant",
        sort: 1,
        answerExtra: null,
      },
      {
        id: 44032,
        question: "About",
        questionType: "Long_Text",
        answer:
          "Speaker, Working professional with 4.5+ years of experience as SharePoint Framework Developer, Building usecases in Microsoft Teams and Microsoft Power Platform based on the latest features by Microsoft.",
        sort: 28,
        answerExtra: null,
      },
    ],
    categories: [
      {
        id: 43956,
        name: "Are you a Microsoft Employee?",
        categoryItems: [
          {
            id: 144060,
            name: "No",
          },
        ],
        sort: 24,
      },
      {
        id: 43957,
        name: "Are you a Microsoft MVP?",
        categoryItems: [
          {
            id: 144059,
            name: "Yes",
          },
        ],
        sort: 25,
      },
    ],
    startsAt: "2022-10-29T10:30:00",
    endsAt: "2022-10-29T10:45:00",
  },
  {
    id: "7617ea5b-3616-4cd7-899d-68c9a498b3ec",
    firstName: "Vignesh",
    lastName: "Ganesan",
    fullName: "Vignesh Ganesan",
    bio: "Vignesh Ganesan is an Enterprise Cloud Architect with 10+ years of experience . He specializes in technical presales, designing and implementing SaaS, IaaS and PaaS environments including on-premises and hybrid infrastructures. In addition to that he also has a sound knowledge in designing and implementing security solutions for customers using native cloud controls along with 3rd party tools to build a secure Cloud environment. During his stint with Microsoft , he designed technical solutions that can meet his customer’s needs and helped in driving their Digital Transformation so that they can get the best out of their Office 365, EMS & Azure implementation . He has worked on many products/technologies so far such as Active Directory , Windows Server , SharePoint & Exchange Server , Microsoft 365 , Azure AD ,Azure IaaS & PaaS , Slack , Google Workspace&Enterprise Mobility & Security etc .He has spoken on plethora of user groups , conferences & events across the globe and you can find all his work on his blog site i.e. Vignesh’s SharePoint Thought’s and his YouTube Channel . Over the years he has written almost 400 technical articles and has involved himself in many technical community related engagements for which he was awarded the prestigious C Sharp corner MVP award three times in a row for all his contributions . He always has a thirst to constantly learn something new which is what made him to complete almost 18+ Microsoft certifications.",
    tagLine: "-",
    profilePicture: welcomeSpeaker,
    title: "Welcome Note",
    sessions: [
      { id: "7617ea5b-3616-4cd7-899d-68c9a498b3ec", title: "Welcome Note" },
    ],
    isTopSpeaker: false,
    links: [
      {
        linkType: "Twitter",
        title: "Twitter",
        url: "https://twitter.com/cloudvignesh",
      },
      {
        linkType: "LinkedIn",
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/vignesh-ganesan-i-microsoft-mvp-and-mct-9246384a/",
      },
    ],
    questionAnswers: [
      {
        id: 52209,
        question: "Designation",
        questionType: "Short_Text",
        answer:
          "Modern Workplace Architect (Modern Work, Security & Compliance and Employee Experience )",
        sort: 1,
        answerExtra: null,
      },
      {
        id: 52209,
        question: "Bio",
        questionType: "Long_Text",
        answer:
          "Vignesh Ganesan is an Enterprise Cloud Architect with 10+ years of experience . He specializes in technical presales, designing and implementing SaaS, IaaS and PaaS environments including on-premises and hybrid infrastructures. In addition to that he also has a sound knowledge in designing and implementing security solutions for customers using native cloud controls along with 3rd party tools to build a secure Cloud environment. During his stint with Microsoft , he designed technical solutions that can meet his customer’s needs and helped in driving their Digital Transformation so that they can get the best out of their Office 365, EMS & Azure implementation . He has worked on many products/technologies so far such as Active Directory , Windows Server , SharePoint & Exchange Server , Microsoft 365 , Azure AD ,Azure IaaS & PaaS , Slack , Google Workspace&Enterprise Mobility & Security etc .He has spoken on plethora of user groups , conferences & events across the globe and you can find all his work on his blog site i.e. Vignesh’s SharePoint Thought’s and his YouTube Channel . Over the years he has written almost 400 technical articles and has involved himself in many technical community related engagements for which he was awarded the prestigious C Sharp corner MVP award three times in a row for all his contributions . He always has a thirst to constantly learn something new which is what made him to complete almost 18+ Microsoft certifications.",
        sort: 2,
        answerExtra: null,
      },
      {
        id: 52209,
        question: "Twitter",
        questionType: "Long_Text",
        answer: "https://twitter.com/cloudvignesh",
        sort: 3,
        answerExtra: null,
      },
      {
        id: 52209,
        question: "Custom TagLine",
        questionType: "Long_Text",
        answer:
          "Modern Workplace Architect (Modern Work, Security & Compliance and Employee Experience )",
        sort: 4,
        answerExtra: null,
      },
      {
        id: 52209,
        question: "Company",
        questionType: "Long_Text",
        answer: "",
        sort: 5,
        answerExtra: null,
      },
      {
        id: 52209,
        question: "LinkedIn",
        questionType: "Long_Text",
        answer:
          "https://www.linkedin.com/in/vignesh-ganesan-i-microsoft-mvp-and-mct-9246384a/",
        sort: 6,
        answerExtra: null,
      },
      {
        id: 52209,
        question: "isMVP",
        questionType: "Long_Text",
        answer: "Yes",
        sort: 7,
        answerExtra: null,
      },
      {
        id: 52209,
        question: "isMicrosoftEmployee",
        questionType: "Long_Text",
        answer: "No",
        sort: 7,
        answerExtra: null,
      },
    ],
    categories: [],
    startsAt: "2022-10-29T08:35:00",
    endsAt: "2022-10-29T09:00:00",
  },
  {
    id: "4",
    firstName: "Hammad",
    lastName: "Rajjoub",
    fullName: "Hammad Rajjoub",
    bio: "Hammad Rajjoub is a highly regarded product leader with over 15 years of experience in the technology industry. He currently serves as the Director of Product Strategy and Marketing Management at Microsoft, where he is responsible for product strategy as well as marketing execution for extensibility (APIs, Connectors, AI, ML, etc.) and developer ecosystem, including (SIs, ISVs, and MSSPs) across various solution areas.",
    tagLine: "-",
    profilePicture: keynoteSpeaker,
    sessions: [{ id: "682c34f4-0a70-4207-8c64-79be6d8edaec", name: "Keynote" }],
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

const Agenda = ({ theme, speaker, session }) => {
  // changes started from here

  const trackfunc = (trackValue) => {
    setTrack(trackValue);
    var temptrack = trackDetailsState;
    var tempselectedRoomId;
    let i = 0;
    for (i = 0; i < temptrack.length; i++) {
      if (temptrack[i].trackId == trackValue) {
        temptrack[i].isActive = true;
        tempselectedRoomId = temptrack[i].roomId;
      } else {
        temptrack[i].isActive = false;
      }
    }
    setTrackDetails(temptrack);
    setselecteditem(tempselectedRoomId);
  };
  const [track, setTrack] = useState("1");

  const [trackDetailsState, setTrackDetails] = useState(trackdetails);

  const [selectedRoomId, setselecteditem] = useState(27836);

  // ended here

  //loop to push hard coded data into the session and delete the pre-existing hard coded data from the session array
  for (let i = 0; i < staticContributorData.length; i++) {
    if (session.indexOf(staticContributorData[i]) > -1) {
      session.splice(session.indexOf(staticContributorData[i]), 1);
    }
    session.push(staticContributorData[i]);
  }

  console.log("AgendaSpeaker", speaker);
  console.log("AgendaSession", session);

  const [speakerModal, setSpeakerModal] = React.useState(false);
  const [speakerModalData, setSpeakerModalData] = useState({});

  const [sessionModal, setSessionModal] = React.useState(false);
  const [sessionModalData, setSessionModalData] = useState({});

  const [modalSessionSpeaker, setModalSessionSpeaker] = useState();

  return (
    <>
      <div className="agenda">
        <Box className="sectionMaxWidth">
          <Box className="speakersHeadingBox">
            <Typography
              className="text-uppercase text-center speakersHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
              }}
            >
              Agenda
            </Typography>
          </Box>

          <Box className="d-flex justify-content-center keynote-box agenda-box">
            <Paper className="agenda-paper" elevation={0}>
              <Box
                className="agenda-head"
                aria-label="outlined primary button group"
              >
                <Box
                  sx={{
                    background: theme.colors.bg.agendaSelected,
                  }}
                  className="agenda-track t1 d-flex flex-column"
                >
                  <Typography
                    sx={{
                      color: theme.colors.text.agendaSelected,
                    }}
                    className="agenda-track-text text-uppercase"
                  >
                    Sessions
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.colors.text.agendaSelected,
                    }}
                    className="agenda-track-subtext"
                  >
                    29th October 2022
                  </Typography>
                </Box>
              </Box>
              {/* start here */}
              <div className="container-fluid dec2022-track-list">
                <div className="row dec2022-track-row">
                  {trackDetailsState.map((data) => {
                    console.log(data);
                    return (
                      <div
                        className="dec2022-tracks col-4"
                        key={data.trackId}
                        onClick={() => trackfunc(data.trackId)}
                      >
                        {data.isActive === true ? (
                          <div
                            className="dec2022-track-data"
                            style={{
                              // backgroundColor: "#4faaaa",
                              background:
                                "linear-gradient(180deg, #35B2B2 0%, #117878 72.58%, #005151 100%)",
                              color: "#fff",
                            }}
                          >
                            <div className="dec2022-track-head">
                              {data.trackTitle}
                            </div>
                            <span className="dec2022-track-span">
                              {data.room}
                            </span>
                            <span className="dec2022-track-date">
                              {data.trackDate}
                            </span>
                          </div>
                        ) : (
                          <div className="dec2022-track-data">
                            <div className="dec2022-track-head">
                              {data.trackTitle}
                            </div>
                            <span className="dec2022-track-span">
                              {data.room}
                            </span>
                            <span className="dec2022-track-date">
                              {data.trackDate}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* end here */}
              <Box className="agenda-sessions-container">
                <Paper elevation={3} className="session-tile">
                  <Box className="session-data-container">
                    <Box className="responsive-wrapper pointer">
                      <Box className="d-flex session-time">
                        <Typography
                          className="session-time-text"
                          sx={{
                            color: "#421282",
                            fontSize: { xs: "1.8rem", mmb: "2.2rem" },
                            marginLeft: "1rem",
                          }}
                        >
                          {" 08:45 AM - 09:00 AM IST"}
                        </Typography>
                      </Box>
                      <Box className="session-title-container">
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "2rem",
                              mmb: theme.fontSize.aboutSubheadingText,
                            },
                          }}
                          className="session-title text-left"
                        >
                          Welcome Note
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="speaker-container">
                      {/* <Box className="session-speakers">
                        <IconButton
                          sx={{ minWidth: "6rem" }}
                          href={about.track}
                          target="_blank"
                        >
                          <SvgIcon
                            sx={{
                              fontSize: "3.2rem",
                            }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              role="presentation"
                              class="app-svg icons-teams"
                            >
                              <path
                                d="M8 10.12v7.38a5.47 5.47 0 0 0 .605 2.5h5A1.5 1.5 0 0 0 15 18.646V9.02L14.72 9h-5.6A1.12 1.12 0 0 0 8 10.12zM13.833 6h-2.976A3.24 3.24 0 0 0 15 8.143v-.976A1.17 1.17 0 0 0 13.833 6z"
                                opacity=".1"
                              ></path>
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                d="M22.873 9H17.88l-1.394 1.127v5.589a3.757 3.757 0 1 0 7.514 0v-5.589A1.127 1.127 0 0 0 22.873 9z"
                                fill="#5059c9"
                              ></path>
                              <circle
                                cx="20.5"
                                cy="5.5"
                                r="2.5"
                                fill="#5059c9"
                              ></circle>
                              <path
                                d="M9.12 9h8.76A1.12 1.12 0 0 1 19 10.12v7.38a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 8 17.5v-7.38A1.12 1.12 0 0 1 9.12 9z"
                                fill="#7b83eb"
                              ></path>
                              <circle
                                cx="14"
                                cy="5"
                                r="3.313"
                                fill="#7b83eb"
                              ></circle>
                              <path
                                d="M8 10.12v7.38a5.47 5.47 0 0 0 .605 2.5h5A1.5 1.5 0 0 0 15 18.646V9.02L14.72 9h-5.6A1.12 1.12 0 0 0 8 10.12zM13.833 6h-2.976A3.24 3.24 0 0 0 15 8.143v-.976A1.17 1.17 0 0 0 13.833 6z"
                                opacity=".5"
                              ></path>
                              <rect
                                y="5"
                                width="14"
                                height="14"
                                rx="1.167"
                                ry="1.167"
                                fill="#4b53bc"
                              ></rect>
                              <path
                                d="M10.18 9.578H7.793V16h-1.57V9.578H3.819V8h6.362z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </SvgIcon>
                        </IconButton>
                      </Box> */}
                      <Box className="session-speakers">
                        <a
                          onClick={() => {
                            setSpeakerModal(true);
                            setSpeakerModalData(staticContributorData[2]);
                          }}
                        >
                          <Avatar
                            className="pointer"
                            src={welcomeSpeaker}
                            sx={{
                              width: 80,
                              height: 80,
                              marginBottom: "1rem",
                            }}
                          />
                        </a>
                        <Typography
                          className="text-center speaker-name"
                          sx={{
                            color: theme.colors.text.bodyGrey,
                            fontSize: {
                              xs: "1.5rem",
                              mmb: theme.fontSize.footerSubTxt,
                            },
                          }}
                        >
                          Vignesh Ganesan
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
                {/* <Paper elevation={3} className="session-tile">
                  <Box className="session-data-container">
                    <Box className="responsive-wrapper pointer">
                      <Box className="d-flex session-time">
                        <Typography
                          className="session-time-text"
                          sx={{
                            color: "#421282",
                            fontSize: { xs: "1.8rem", mmb: "2.2rem" },
                            marginLeft: "1rem",
                          }}
                        >
                          {" 09:40 AM - 10:00 AM IST"}
                        </Typography>
                      </Box>
                      <Box className="session-title-container">
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "2rem",
                              mmb: theme.fontSize.aboutSubheadingText,
                            },
                          }}
                          className="session-title text-left"
                        >
                          Keynote
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="speaker-container">
                      <Box className="session-speakers">
                        <IconButton sx={{ minWidth: "6rem"}} href={about.track} target="_blank">
                          <SvgIcon
                            sx={{
                              fontSize: "3.2rem",
                            }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              role="presentation"
                              class="app-svg icons-teams"
                            >
                              <path
                                d="M8 10.12v7.38a5.47 5.47 0 0 0 .605 2.5h5A1.5 1.5 0 0 0 15 18.646V9.02L14.72 9h-5.6A1.12 1.12 0 0 0 8 10.12zM13.833 6h-2.976A3.24 3.24 0 0 0 15 8.143v-.976A1.17 1.17 0 0 0 13.833 6z"
                                opacity=".1"
                              ></path>
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                d="M22.873 9H17.88l-1.394 1.127v5.589a3.757 3.757 0 1 0 7.514 0v-5.589A1.127 1.127 0 0 0 22.873 9z"
                                fill="#5059c9"
                              ></path>
                              <circle
                                cx="20.5"
                                cy="5.5"
                                r="2.5"
                                fill="#5059c9"
                              ></circle>
                              <path
                                d="M9.12 9h8.76A1.12 1.12 0 0 1 19 10.12v7.38a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 8 17.5v-7.38A1.12 1.12 0 0 1 9.12 9z"
                                fill="#7b83eb"
                              ></path>
                              <circle
                                cx="14"
                                cy="5"
                                r="3.313"
                                fill="#7b83eb"
                              ></circle>
                              <path
                                d="M8 10.12v7.38a5.47 5.47 0 0 0 .605 2.5h5A1.5 1.5 0 0 0 15 18.646V9.02L14.72 9h-5.6A1.12 1.12 0 0 0 8 10.12zM13.833 6h-2.976A3.24 3.24 0 0 0 15 8.143v-.976A1.17 1.17 0 0 0 13.833 6z"
                                opacity=".5"
                              ></path>
                              <rect
                                y="5"
                                width="14"
                                height="14"
                                rx="1.167"
                                ry="1.167"
                                fill="#4b53bc"
                              ></rect>
                              <path
                                d="M10.18 9.578H7.793V16h-1.57V9.578H3.819V8h6.362z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </SvgIcon>
                        </IconButton>
                      </Box>
                      <Box className="session-speakers">
                        <a
                          onClick={() => {
                            setSpeakerModal(true);
                            setSpeakerModalData(staticContributorData[3]);
                          }}
                        >
                          <Avatar
                            src={keynoteSpeaker}
                            className="pointer"
                            sx={{
                              width: 80,
                              height: 80,
                              marginBottom: "1rem",
                            }}
                          />
                        </a>
                        <Typography
                          className="text-center speaker-name"
                          sx={{
                            color: theme.colors.text.bodyGrey,
                            fontSize: {
                              xs: "1.5rem",
                              mmb: theme.fontSize.footerSubTxt,
                            },
                          }}
                        >
                          Hammad Rajjoub
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper> */}

                {/* Data starts here */}
                {session
                  ?.filter(
                    (data) =>
                      // data.id != "7617ea5b-3616-4cd7-899d-68c9a498b3ec" &&
                      // data.id != "b9ea879f-d988-410c-901f-6ebdf6d99597"
                      data.roomId === selectedRoomId
                  )
                  .map((trackData, idx) => {
                    let timezone = moment(
                      trackData.startsAt.split("T")[1].split(":")[0],
                      "hh"
                    )
                      .format("LT")
                      .split(" ")[1];
                    let timezone2 = moment(
                      trackData.endsAt.split("T")[1].split(":")[0],
                      "hh"
                    )
                      .format("LT")
                      .split(" ")[1];

                    // let starttime = trackData.startsAt.split("T")[1].split(":")[0]+":"+trackData.startsAt.split("T")[1].split(":")[1];
                    let starttime =
                      moment(
                        trackData.startsAt.split("T")[1].split(":")[0],
                        "hh"
                      )
                        .format("LT")
                        .split(":")[0] +
                      ":" +
                      trackData.startsAt.split("T")[1].split(":")[1];
                    let endtime =
                      moment(trackData.endsAt.split("T")[1].split(":")[0], "hh")
                        .format("LT")
                        .split(":")[0] +
                      ":" +
                      trackData.endsAt.split("T")[1].split(":")[1];

                    // let endtime = trackData.endsAt.split("T")[1].split(":")[0]+":"+trackData.endsAt.split("T")[1].split(":")[1];
                    return (
                      <Paper key={idx} elevation={3} className="session-tile">
                        {console.log("trackDT", trackData.id)}
                        <Box className="session-data-container">
                          <Box
                            onClick={() => {
                              setSessionModal(true);
                              setSessionModalData(trackData);
                              setModalSessionSpeaker(trackData.speakers);
                            }}
                            className="responsive-wrapper pointer"
                          >
                            <Box className="d-flex session-time">
                              <Typography
                                className="session-time-text"
                                sx={{
                                  color: "#421282",
                                  fontSize: { xs: "1.8rem", mmb: "2.2rem" },
                                  marginLeft: "1rem",
                                }}
                              >
                                {/* {moment
                                  .utc(trackData.startsAt, null)
                                  .tz("Asia/Kolkata")
                                  .format("hh:mm A")}{" "}
                                -{" "}
                                {moment
                                  .utc(trackData.endsAt, null)
                                  .tz("Asia/Kolkata")
                                  .format("hh:mm A")}{" "}
                                {"IST"} */}
                                {starttime + " " + timezone + " "}-
                                {" " + endtime + " " + timezone2 + " "}
                                {" IST"}
                              </Typography>
                            </Box>
                            <Box className="session-title-container">
                              <Typography
                                sx={{
                                  fontSize: {
                                    xs: "2rem",
                                    mmb: theme.fontSize.aboutSubheadingText,
                                  },
                                }}
                                className="session-title text-left"
                              >
                                {trackData.title}
                              </Typography>
                            </Box>
                          </Box>

                          {trackData.id != "520924" ? (
                            <Box className="speaker-container">
                              {trackData.id ==
                                "3838e772-52d5-4631-9490-54276814f3ee" && (
                                <Box className="session-speakers">
                                  <Typography variant="h4">TBD</Typography>
                                </Box>
                              )}

                              {trackData?.speakers?.map((spkr, idx) => {
                                let spkrimg = speaker.find(
                                  (s) => s.id == spkr.id
                                ).profilePicture;

                                let speakerData = speaker.find(
                                  (s) => s.id == spkr.id
                                );
                                console.log("ThisisSPKRDATA", speakerData);
                                return (
                                  <>
                                    <Box key={idx} className="session-speakers">
                                      <a
                                        onClick={() => {
                                          setSpeakerModal(true);
                                          setSpeakerModalData(speakerData);
                                          // console.log("imagepath",spkrimg)
                                        }}
                                      >
                                        <Avatar
                                          className="pointer"
                                          src={spkrimg}
                                          sx={{
                                            width: 80,
                                            height: 80,
                                            marginBottom: "1rem",
                                          }}
                                        />
                                      </a>
                                      <Typography
                                        className="text-center speaker-name"
                                        sx={{
                                          color: theme.colors.text.bodyGrey,
                                          fontSize: {
                                            xs: "1.5rem",
                                            mmb: theme.fontSize.footerSubTxt,
                                          },
                                        }}
                                      >
                                        {spkr.name}
                                      </Typography>
                                    </Box>
                                  </>
                                );
                              })}
                            </Box>
                          ) : (
                            <Box className="speaker-container">
                              {/* <Box className="session-speakers">
                                <IconButton
                                  sx={{ minWidth: "6rem" }}
                                  href={about.track}
                                  target="_blank"
                                >
                                  <SvgIcon
                                    sx={{
                                      fontSize: "3.2rem",
                                    }}
                                  >
                                    <svg
                                      viewBox="0 0 24 24"
                                      role="presentation"
                                      class="app-svg icons-teams"
                                    >
                                      <path
                                        d="M8 10.12v7.38a5.47 5.47 0 0 0 .605 2.5h5A1.5 1.5 0 0 0 15 18.646V9.02L14.72 9h-5.6A1.12 1.12 0 0 0 8 10.12zM13.833 6h-2.976A3.24 3.24 0 0 0 15 8.143v-.976A1.17 1.17 0 0 0 13.833 6z"
                                        opacity=".1"
                                      ></path>
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                      ></path>
                                      <path
                                        d="M22.873 9H17.88l-1.394 1.127v5.589a3.757 3.757 0 1 0 7.514 0v-5.589A1.127 1.127 0 0 0 22.873 9z"
                                        fill="#5059c9"
                                      ></path>
                                      <circle
                                        cx="20.5"
                                        cy="5.5"
                                        r="2.5"
                                        fill="#5059c9"
                                      ></circle>
                                      <path
                                        d="M9.12 9h8.76A1.12 1.12 0 0 1 19 10.12v7.38a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 8 17.5v-7.38A1.12 1.12 0 0 1 9.12 9z"
                                        fill="#7b83eb"
                                      ></path>
                                      <circle
                                        cx="14"
                                        cy="5"
                                        r="3.313"
                                        fill="#7b83eb"
                                      ></circle>
                                      <path
                                        d="M8 10.12v7.38a5.47 5.47 0 0 0 .605 2.5h5A1.5 1.5 0 0 0 15 18.646V9.02L14.72 9h-5.6A1.12 1.12 0 0 0 8 10.12zM13.833 6h-2.976A3.24 3.24 0 0 0 15 8.143v-.976A1.17 1.17 0 0 0 13.833 6z"
                                        opacity=".5"
                                      ></path>
                                      <rect
                                        y="5"
                                        width="14"
                                        height="14"
                                        rx="1.167"
                                        ry="1.167"
                                        fill="#4b53bc"
                                      ></rect>
                                      <path
                                        d="M10.18 9.578H7.793V16h-1.57V9.578H3.819V8h6.362z"
                                        fill="#fff"
                                      ></path>
                                    </svg>
                                  </SvgIcon>
                                </IconButton>
                              </Box> */}
                              <Box className="session-speakers">
                                <Button target="_blank">
                                  <img
                                    src={VivaExplorer}
                                    alt="Viva Explorer Logo"
                                    onClick={() => {
                                      setSessionModal(true);
                                      setSessionModalData(trackData);
                                      setModalSessionSpeaker(
                                        trackData.speakers
                                      );
                                    }}
                                  />
                                </Button>
                              </Box>
                            </Box>
                          )}
                        </Box>
                      </Paper>
                    );
                  })}
                {/* Data ends here */}

                <Paper elevation={3} className="session-tile">
                  <Box className="session-data-container">
                    <Box className="responsive-wrapper pointer">
                      <Box className="d-flex session-time">
                        <Typography
                          className="session-time-text"
                          sx={{
                            color: "#421282",
                            fontSize: { xs: "1.8rem", mmb: "2.2rem" },
                            marginLeft: "1rem",
                          }}
                        >
                          {" 10:30 PM - 10:45 PM IST"}
                        </Typography>
                      </Box>
                      <Box className="session-title-container">
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "2rem",
                              mmb: theme.fontSize.aboutSubheadingText,
                            },
                          }}
                          className="session-title text-left"
                        >
                          Quiz
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="speaker-container">
                      {/* <Box className="session-speakers">
                        <IconButton href={about} target="_blank">
                          <SvgIcon
                            sx={{
                              fontSize: "3.2rem",
                            }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              role="presentation"
                              class="app-svg icons-teams"
                            >
                              <path
                                d="M8 10.12v7.38a5.47 5.47 0 0 0 .605 2.5h5A1.5 1.5 0 0 0 15 18.646V9.02L14.72 9h-5.6A1.12 1.12 0 0 0 8 10.12zM13.833 6h-2.976A3.24 3.24 0 0 0 15 8.143v-.976A1.17 1.17 0 0 0 13.833 6z"
                                opacity=".1"
                              ></path>
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                d="M22.873 9H17.88l-1.394 1.127v5.589a3.757 3.757 0 1 0 7.514 0v-5.589A1.127 1.127 0 0 0 22.873 9z"
                                fill="#5059c9"
                              ></path>
                              <circle
                                cx="20.5"
                                cy="5.5"
                                r="2.5"
                                fill="#5059c9"
                              ></circle>
                              <path
                                d="M9.12 9h8.76A1.12 1.12 0 0 1 19 10.12v7.38a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 8 17.5v-7.38A1.12 1.12 0 0 1 9.12 9z"
                                fill="#7b83eb"
                              ></path>
                              <circle
                                cx="14"
                                cy="5"
                                r="3.313"
                                fill="#7b83eb"
                              ></circle>
                              <path
                                d="M8 10.12v7.38a5.47 5.47 0 0 0 .605 2.5h5A1.5 1.5 0 0 0 15 18.646V9.02L14.72 9h-5.6A1.12 1.12 0 0 0 8 10.12zM13.833 6h-2.976A3.24 3.24 0 0 0 15 8.143v-.976A1.17 1.17 0 0 0 13.833 6z"
                                opacity=".5"
                              ></path>
                              <rect
                                y="5"
                                width="14"
                                height="14"
                                rx="1.167"
                                ry="1.167"
                                fill="#4b53bc"
                              ></rect>
                              <path
                                d="M10.18 9.578H7.793V16h-1.57V9.578H3.819V8h6.362z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </SvgIcon>
                        </IconButton>
                      </Box> */}
                      {/* <Box className="session-speakers">
                        <a
                          onClick={() => {
                            setSpeakerModal(true);
                            setSpeakerModalData(staticContributorData[0]);
                          }}
                        >
                          <Avatar
                            className="pointer"
                            src={Tushar}
                            sx={{
                              width: 80,
                              height: 80,
                              marginBottom: "1rem",
                            }}
                          />
                        </a>
                        <Typography
                          className="text-center speaker-name"
                          sx={{
                            color: theme.colors.text.bodyGrey,
                            fontSize: {
                              xs: "1.5rem",
                              mmb: theme.fontSize.footerSubTxt,
                            },
                          }}
                        >
                          Tushar Kumar
                        </Typography>
                      </Box> */}
                      {/* <Box className="session-speakers">
                        <IconButton
                          sx={{ minWidth: "6rem" }}
                          href={about.track}
                          target="_blank"
                        >
                          <SvgIcon
                            sx={{
                              fontSize: "3.2rem",
                            }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              role="presentation"
                              class="app-svg icons-teams"
                            >
                              <path
                                d="M8 10.12v7.38a5.47 5.47 0 0 0 .605 2.5h5A1.5 1.5 0 0 0 15 18.646V9.02L14.72 9h-5.6A1.12 1.12 0 0 0 8 10.12zM13.833 6h-2.976A3.24 3.24 0 0 0 15 8.143v-.976A1.17 1.17 0 0 0 13.833 6z"
                                opacity=".1"
                              ></path>
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                d="M22.873 9H17.88l-1.394 1.127v5.589a3.757 3.757 0 1 0 7.514 0v-5.589A1.127 1.127 0 0 0 22.873 9z"
                                fill="#5059c9"
                              ></path>
                              <circle
                                cx="20.5"
                                cy="5.5"
                                r="2.5"
                                fill="#5059c9"
                              ></circle>
                              <path
                                d="M9.12 9h8.76A1.12 1.12 0 0 1 19 10.12v7.38a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 8 17.5v-7.38A1.12 1.12 0 0 1 9.12 9z"
                                fill="#7b83eb"
                              ></path>
                              <circle
                                cx="14"
                                cy="5"
                                r="3.313"
                                fill="#7b83eb"
                              ></circle>
                              <path
                                d="M8 10.12v7.38a5.47 5.47 0 0 0 .605 2.5h5A1.5 1.5 0 0 0 15 18.646V9.02L14.72 9h-5.6A1.12 1.12 0 0 0 8 10.12zM13.833 6h-2.976A3.24 3.24 0 0 0 15 8.143v-.976A1.17 1.17 0 0 0 13.833 6z"
                                opacity=".5"
                              ></path>
                              <rect
                                y="5"
                                width="14"
                                height="14"
                                rx="1.167"
                                ry="1.167"
                                fill="#4b53bc"
                              ></rect>
                              <path
                                d="M10.18 9.578H7.793V16h-1.57V9.578H3.819V8h6.362z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </SvgIcon>
                        </IconButton>
                      </Box> */}
                      <Box className="session-speakers">
                        <a
                          onClick={() => {
                            setSpeakerModal(true);
                            setSpeakerModalData(staticContributorData[1]);
                          }}
                        >
                          <Avatar
                            className="pointer"
                            src={Shrusti}
                            sx={{
                              width: 80,
                              height: 80,
                              marginBottom: "1rem",
                            }}
                          />
                        </a>
                        <Typography
                          className="text-center speaker-name"
                          sx={{
                            color: theme.colors.text.bodyGrey,
                            fontSize: {
                              xs: "1.5rem",
                              mmb: theme.fontSize.footerSubTxt,
                            },
                          }}
                        >
                          Shrushti Shah
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Paper>
          </Box>
          <AboutSpeaker
            theme={theme}
            open={speakerModal}
            sessionOpen={sessionModal}
            close={setSpeakerModal}
            data={speakerModalData}
            sessions={session}
          />
          <AboutSession
            theme={theme}
            open={sessionModal}
            close={setSessionModal}
            data={sessionModalData}
            sessionSpeaker={modalSessionSpeaker}
            speaker={speaker}
            sessions={session}
          />
        </Box>
      </div>
    </>
  );
};
export default Agenda;
