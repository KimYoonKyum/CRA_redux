import axios from "axios";

export function getCardList() {
  const accessToken = localStorage.getItem('tk')
  return axios.get(`https://kr.api.blizzard.com/hearthstone/cards?locale=ko_KR&access_token=${accessToken}`)
    .then((response)=>{
      console.log(response);
      return response
    })
    .catch((error)=>{
      console.log(error);
    })
}

export function getToken() {
  const clientId = process.env.REACT_APP_CLIENT_ID
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET
  const headers = {
    'Content-Type': 'multipart/form-data'
  }
  const data = {
    client_id:clientId,
    client_secret:clientSecret,
    grant_type:'client_credentials'
  }
  return axios.post(`https://oauth.battle.net/token`,data,{headers})
    .then((response)=>{
      console.log(response);
      return response
    })
    .catch((error)=>{
      console.log(error);
    })
}