import axios from "axios";
import qs from "qs";

export function getCardList(searchOption) {
  const accessToken = localStorage.getItem("tk");
  const url = `https://kr.api.blizzard.com/hearthstone/cards`;
  const fullUrl = `${url}${qs.stringify(
    { ...searchOption, access_token: accessToken },
    { addQueryPrefix: true, strictNullHandling: true, arrayFormat: "repeat" }
  )}`;

  return axios
    .get(fullUrl)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getToken() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  const data = {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "client_credentials",
  };
  return axios
    .post(`https://oauth.battle.net/token`, data, { headers })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
