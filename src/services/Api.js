export function ApiAll() {
  return fetch("https://sessionize.com/api/v2/hbbdpvjn/view/All")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}
export function ApiSpeaker() {
  return fetch("https://sessionize.com/api/v2/hbbdpvjn/view/Speakers")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}

export function ApiSpeakerWall() {
  return fetch("https://sessionize.com/api/v2/hbbdpvjn/view/SpeakerWall")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}

export function ApiSession() {
  return fetch("https://sessionize.com/api/v2/hbbdpvjn/view/Sessions")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}

export function ApiGrid() {
  return fetch("https://sessionize.com/api/v2/hbbdpvjn/view/GridSmart")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}

// ----------------------------------------- //

export function ApiDemoSpeakerWall() {
  return fetch("https://sessionize.com/api/v2/msqv8bxy/view/SpeakerWall")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}

export function ApiDemoSpeaker() {
  return fetch("https://sessionize.com/api/v2/msqv8bxy/view/Speakers")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}

export function ApiDemoGrid() {
  return fetch("https://sessionize.com/api/v2/msqv8bxy/view/GridSmart")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}

export function ApiDemoSession() {
  return fetch("https://sessionize.com/api/v2/msqv8bxy/view/Sessions")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}

export function ApiDemoAll() {
  return fetch("https://sessionize.com/api/v2/msqv8bxy/view/All")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}
