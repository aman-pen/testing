const SpeakerApi = "https://sessionize.com/api/v2/ca6moh2z/view/Speakers";
const SessionApi = "https://sessionize.com/api/v2/ca6moh2z/view/Sessions";
const GridApi = "https://sessionize.com/api/v2/ca6moh2z/view/GridSmart";

export const scheduleGridApi = async () => {
  try {
    const response = await fetch(GridApi);
    const data = await response.json();
    console.log("Schedule API", data);
    return data;
  } catch (error) {
    console.log("Error Receiving Grid Data", error);
  }
};

export const SpeakersAndSessionsCompleteData = async () => {
  try {
    const speakerResponse = await fetch(SpeakerApi);
    const sessionResponse = await fetch(SessionApi);
    const speakerApiResponseJSON = await speakerResponse.json();
    let tempSessionsStore = await sessionResponse.json();
    const sessionApiResponseJSON = tempSessionsStore[0].sessions;

    sessionApiResponseJSON.map((session) => {

      return session.speakers.map(
        (
          currSessionSpeakers,
          currSessionSpeakerIndex,
          currSessionSpeakersArray
        ) => {
          const currSpeakerDetails = speakerApiResponseJSON.find(
            (currSessionSpeakerDetail) =>
              currSessionSpeakerDetail.id == currSessionSpeakers.id
          );

          // console.log("currSpeakerDetails", currSpeakerDetails);
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
            // Data To Be Custom Mapped
            customTagLine: currSpeakerDetails.questionAnswers[0]?.answer,
            linkedIn: currSpeakerDetails.questionAnswers[3]?.answer,
            twitter: currSpeakerDetails.questionAnswers[2]?.answer,
            companyName: currSpeakerDetails.questionAnswers[4]?.answer,
            designation: currSpeakerDetails.questionAnswers[5]?.answer,
            isMVP:
              currSpeakerDetails.categories[0]?.categoryItems[0]?.name == "Yes",
            isMicrosoftEmployee:
              currSpeakerDetails.categories[1]?.categoryItems[0]?.name == "Yes",
          };

          return (currSessionSpeakersArray[currSessionSpeakerIndex] = {
            ...currSessionSpeakersArray[currSessionSpeakerIndex],
            ...additionalSpeakerDetails,
          });
          // currSessionSpeakers = {...currSessionSpeakers,...additionalSpeakerDetails};
          // console.log("FinalDataForCurrentSpeaker", currSessionSpeakers);
        }
      );

    });

    speakerApiResponseJSON.map(
      (speaker, currSpeakerIndex, parentSpeakerArray) => {
        let additionalSpeakerDetails = {
          // Data To Be Custom Mapped
          customTagLine: speaker.questionAnswers[0]?.answer,
          companyName: speaker.questionAnswers[4]?.answer,
          linkedIn: speaker.questionAnswers[3]?.answer,
          twitter: speaker.questionAnswers[2]?.answer,
          designation: speaker.questionAnswers[5]?.answer,
          isMVP: speaker.categories[0]?.categoryItems[0]?.name == "Yes",
          isMicrosoftEmployee:
            speaker.categories[1]?.categoryItems[0]?.name == "Yes",
        };

        parentSpeakerArray[currSpeakerIndex] = {
          ...parentSpeakerArray[currSpeakerIndex],
          ...additionalSpeakerDetails,
        };

        return speaker.sessions.map(
          (
            currSpeakerSessions,
            currSpeakerSessionIndex,
            currSpeakerSessionsArray
          ) => {
            const currSessionDetails = sessionApiResponseJSON.find(
              (currSpeakerSessionDetail) =>
                currSpeakerSessionDetail.id == currSpeakerSessions.id
            );
            // console.log("currSessionDetails", currSessionDetails);
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

            return (currSpeakerSessionsArray[currSpeakerSessionIndex] = {
              ...currSpeakerSessionsArray[currSpeakerSessionIndex],
              ...additionalSessionDetails,
            });
            // currSpeakerSessions = {...currSpeakerSessions,...additionalSessionDetails};
            // console.log("FinalDataForCurrentSpeaker", currSpeakerSessions);
          }
        );
      }
    );
    console.log("Speaker API", speakerApiResponseJSON);
    console.log("Session API", sessionApiResponseJSON);

    return [speakerApiResponseJSON, sessionApiResponseJSON];
  } catch (error) {
    console.log("Error Receiving Speaker(s) Data", error);
  }
};
