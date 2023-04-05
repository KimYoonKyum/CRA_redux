//통신 설정 파일
import axios from "axios";
import { getToken } from "../features/card-list/apis/CardListAPI";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      const tokenResponse = await getToken();
      const accessToken = tokenResponse.data.access_token;
      localStorage.setItem("tk", String(accessToken));
      error.config.url = `https://kr.api.blizzard.com/hearthstone/cards?locale=ko_KR&access_token=${accessToken}`;
      return await axios.request(error.config);
    }

    return Promise.reject(error);
  }
);
