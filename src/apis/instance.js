
// instance친구의 역할 : 기본url을 설정하는 것
// ex) http://localhost:8080/api/users , /user/me 
// 등을 매번 한꺼번에 다 써주기는 힘들다...

// => axios를 통해 기본 URL (http://localhost:8080) 을 설정해주는 것!!

import axios from "axios";

// axios 설치 : npm install axios
const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type" : "application/json"
    },
})


// axios의 인터셉터 기능
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken")
    if(!!accessToken) {
      config
      .headers
      .Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // 요청 설정 하다가 에러가 발생한 경우
    // 실행할 함수
    return Promise.reject(error);
  }
);



export default instance;
// 아래는 refreshToken내용일 것 같은데...