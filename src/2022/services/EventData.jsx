export const speakerApi = async () => {
  try {
    const response = await fetch(
      "https://sessionize.com/api/v2/hbbdpvjn/view/Speakers"
    );
    const data = await response.json();
    console.info("speakerData API Return", data);
    return data;
  } catch (error) {
    console.info("Error Receiving Speaker(s) Data", error);
  }
};
export const scheduleGridApi = async () => {
  try {
    const response = await fetch(
      "https://sessionize.com/api/v2/hbbdpvjn/view/GridSmart"
    );
    const data = await response.json();
    console.info("Schedule Grid API Return", data);
    return data;
  } catch (error) {
    console.info("Error Receiving Grid Data", error);
  }
};
export const sessionApi = async () => {
  try {
    const response = await fetch(
      "https://sessionize.com/api/v2/hbbdpvjn/view/Sessions"
    );
    const data = await response.json();
    console.info("Sessions API Return", data);
    return data;
  } catch (error) {
    console.info("Error Receiving session(s) Data", error);
  }
};
