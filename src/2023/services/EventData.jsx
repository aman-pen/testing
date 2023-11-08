// export const speakerApi = async () => {
//   try {
//     const response = await fetch(
//       "https://sessionize.com/api/v2/ca6moh2z/view/Speakers"
//     );
//     const sessResponse = await fetch(
//       "https://sessionize.com/api/v2/ca6moh2z/view/Sessions"
//     );
//     const data = await response.json();
//     const sessData = await sessResponse.json();
//     console.info("speaker API", data);
//     let dt = data;
//     sessData != undefined &&
//       sessData.length > 0 &&
//      dt.map((val, index, arr) => {
//         val.sessions.map((valin, indexin, arrin) => {
//           let curSessDetail = null;
//           curSessDetail = sessData[0].sessions.find(
//             (curr) => curr.id == valin.id
//           );
//           // console.info("curSessDetail", curSessDetail);
//           let newObj = {
//             description: curSessDetail.description,
//             endsAt: curSessDetail.endsAt,
//             id: curSessDetail.id,
//             isPlenumSession: curSessDetail.isPlenumSession,
//             isServiceSession: curSessDetail.isServiceSession,
//             room: curSessDetail.room,
//             roomId: curSessDetail.roomId,
//             startsAt: curSessDetail.startsAt,
//             status: curSessDetail.status,
//             title: curSessDetail.title,
//           };
//           arrin[indexin] = {...arrin[indexin],...newObj};
//           // valin = {...valin,...newObj};
//           // console.info("finalDtat", valin);
//         });
//       });
//     console.info("finalDtat", dt);
//     // console.info("speaker API", data);
//     return data;
//   } catch (error) {
//     console.info("Error Receiving Speaker(s) Data", error);
//   }
// };
export const scheduleGridApi = async () => {
  try {
    const response = await fetch(
      "https://sessionize.com/api/v2/ca6moh2z/view/GridSmart"
    );
    const data = await response.json();
    console.info("Schedule API", data);
    return data;
  } catch (error) {
    console.info("Error Receiving Grid Data", error);
  }
};
// export const sessionApi = async () => {
//   try {
//     const response = await fetch(
//       "https://sessionize.com/api/v2/ca6moh2z/view/Sessions"
//     );
//     const data = await response.json();
//     console.info("Sessions API", data[0].sessions);
//     // console.info("Sessions API", data);
//     return data;
//   } catch (error) {
//     console.info("Error Receiving session(s) Data", error);
//   }
// };

export const SpeakersAndSessionsCompleteData = async () => {
  try {
    const speakerResponse = await fetch(
      "https://sessionize.com/api/v2/ca6moh2z/view/Speakers"
    );
    const sessionResponse = await fetch(
      "https://sessionize.com/api/v2/ca6moh2z/view/Sessions"
    );
    const speakerApiResponseJSON = await speakerResponse.json();
    let tempSessionsStore = await sessionResponse.json();
    const sessionApiResponseJSON = tempSessionsStore[0].sessions;

    speakerApiResponseJSON.map((speaker) => {
      speaker.sessions.map(
        (
          currSpeakerSessions,
          currSpeakerSessionIndex,
          currSpeakerSessionsArray
        ) => {
          const currSessionDetails = sessionApiResponseJSON.find(
            (currSpeakerSessionDetail) =>
              currSpeakerSessionDetail.id == currSpeakerSessions.id
          );
          // console.info("currSessionDetails", currSessionDetails);
          let additionalSessionDetails = {
            description: currSessionDetails.description,
            endsAt: currSessionDetails.endsAt,
            id: currSessionDetails.id,
            isPlenumSession: currSessionDetails.isPlenumSession,
            isServiceSession: currSessionDetails.isServiceSession,
            room: currSessionDetails.room,
            roomId: currSessionDetails.roomId,
            startsAt: currSessionDetails.startsAt,
            status: currSessionDetails.status,
          };
          currSpeakerSessionsArray[currSpeakerSessionIndex] = {
            ...currSpeakerSessionsArray[currSpeakerSessionIndex],
            ...additionalSessionDetails,
          };
          // currSpeakerSessions = {...currSpeakerSessions,...additionalSessionDetails};
          // console.info("FinalDataForCurrentSpeaker", currSpeakerSessions);
        }
      );
    });

    sessionApiResponseJSON.map((session) => {
      session.speakers.map(
        (
          currSessionSpeakers,
          currSessionSpeakerIndex,
          currSessionSpeakersArray
        ) => {
          const currSpeakerDetails = speakerApiResponseJSON.find(
            (currSessionSpeakerDetail) =>
              currSessionSpeakerDetail.id == currSessionSpeakers.id
          );
          // console.info("currSpeakerDetails", currSpeakerDetails);
          let additionalSpeakerDetails = {
            bio: currSpeakerDetails.bio,
            categories: currSpeakerDetails.categories,
            firstName: currSpeakerDetails.firstName,
            fullName: currSpeakerDetails.fullName,
            isTopSpeaker: currSpeakerDetails.isTopSpeaker,
            links: currSpeakerDetails.links,
            profilePicture: currSpeakerDetails.profilePicture,
            questionAnswers: currSpeakerDetails.questionAnswers,
            tagLine: currSpeakerDetails.tagLine,
          };
          currSessionSpeakersArray[currSessionSpeakerIndex] = {
            ...currSessionSpeakersArray[currSessionSpeakerIndex],
            ...additionalSpeakerDetails,
          };
          // currSessionSpeakers = {...currSessionSpeakers,...additionalSpeakerDetails};
          // console.info("FinalDataForCurrentSpeaker", currSessionSpeakers);
        }
      );
    });

    console.info("Speaker API", speakerApiResponseJSON);
    console.info("Session API", sessionApiResponseJSON);
    return [speakerApiResponseJSON,sessionApiResponseJSON];
  } catch (error) {
    console.info("Error Receiving Speaker(s) Data", error);
  }
};
