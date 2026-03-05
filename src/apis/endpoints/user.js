import instance from "../instance";

// 유저 정보 받아오기
export const getMeAPI = async () => {
    const response = await instance.get("/user/me");
    return response.data;
}



// 유저 정보 수정
export const updateUserInfoAPI = async (data) => {
    const response = await instance.put('/user/me', data);
    return response.data;
}

