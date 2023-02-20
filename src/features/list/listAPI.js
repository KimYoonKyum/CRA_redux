import axios from "axios";

export function getCardList() {
  const accessToken = process.env.REACT_APP_TEST_ACCESS_TOKEN
  return axios.get(`https://kr.api.blizzard.com/hearthstone/cards?locale=ko_KR&access_token=${accessToken}`)
    .then((response)=>{
      console.log(response);
      return response
    })
    .catch((error)=>{
      console.log(error);
    })
}