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

axios.interceptors.response.use(function (response) {
  return response;
}, async (error) => {

  if (error.response?.status === 401) {
    const tokenResponse = await getToken();
    const accessToken = tokenResponse.data.access_token
    localStorage.setItem('tk',String(accessToken))
    error.config.url = `https://kr.api.blizzard.com/hearthstone/cards?locale=ko_KR&access_token=${accessToken}`
    return await axios.request(error.config);
  }

  return Promise.reject(error);
});



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