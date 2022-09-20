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

export function ApiSession() {
  return fetch("https://sessionize.com/api/v2/hbbdpvjn/view/Sessions")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}
