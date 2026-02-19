
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
    withCredentials: true
})

export default instance;
// 아래는 refreshToken내용일 것 같은데...