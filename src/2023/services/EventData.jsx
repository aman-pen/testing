export const speakerApi = async () => {
  try {
    const response = await fetch(
      "https://sessionize.com/api/v2/ca6moh2z/view/Speakers"
    );
    const sessResponse = await fetch(
      "https://sessionize.com/api/v2/ca6moh2z/view/Sessions"
    );
    const data = await response.json();
    const sessData = await sessResponse.json();
    console.info("speaker API", data);
    let dt = data;
    sessData != undefined &&
      sessData.length > 0 &&
     dt.map((val, index, arr) => {
        val.sessions.map((valin, indexin, arrin) => {
          let curSessDetail = null;
          curSessDetail = sessData[0].sessions.find(
            (curr) => curr.id == valin.id
          );
          // console.info("curSessDetail", curSessDetail);
          let newObj = {
            description: curSessDetail.description,
            endsAt: curSessDetail.endsAt,
            id: curSessDetail.id,
            isPlenumSession: curSessDetail.isPlenumSession,
            isServiceSession: curSessDetail.isServiceSession,
            room: curSessDetail.room,
            roomId: curSessDetail.roomId,
            startsAt: curSessDetail.startsAt,
            status: curSessDetail.status,
            title: curSessDetail.title,
          };
          arrin[indexin] = {...arrin[indexin],...newObj};
          // valin = {...valin,...newObj};
          // console.info("finalDtat", valin);
        });
      });
    console.info("finalDtat", dt);
    // console.info("speaker API", data);
    return data;
  } catch (error) {
    console.info("Error Receiving Speaker(s) Data", error);
  }
};
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
export const sessionApi = async () => {
  try {
    const response = await fetch(
      "https://sessionize.com/api/v2/ca6moh2z/view/Sessions"
    );
    const data = await response.json();
    console.info("Sessions API", data[0].sessions);
    // console.info("Sessions API", data);
    return data;
  } catch (error) {
    console.info("Error Receiving session(s) Data", error);
  }
};
