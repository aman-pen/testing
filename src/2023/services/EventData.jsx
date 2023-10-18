export const speakerApi = async () => {
  try {
    const response = await fetch(
      "https://sessionize.com/api/v2/bheuir6t/view/Speakers"
    );
    const data = await response.json();
    console.log("speakerData API Return", data);
    return data;
  } catch (error) {
    console.log("Error Receiving Speaker(s) Data", error);
  }
};
export const scheduleGridApi = async () => {
  try {
    const response = await fetch(
      "https://sessionize.com/api/v2/bheuir6t/view/GridSmart"
    );
    const data = await response.json();
    console.log("Schedule Grid API Return", data);
    return data;
  } catch (error) {
    console.log("Error Receiving Grid Data", error);
  }
};
export const sessionApi = async () => {
  try {
    const response = await fetch(
      "https://sessionize.com/api/v2/bheuir6t/view/Sessions"
    );
    const data = await response.json();
    console.log("Sessions API Return", data);
    return data;
  } catch (error) {
    console.log("Error Receiving session(s) Data", error);
  }
};
