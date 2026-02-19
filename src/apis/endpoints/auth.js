import instance from "../instance";


export const signinApi = async (dto) => {
  const response = await instance.post("/auth/signin", dto);
  return response.data;
};
// 해당 코드를 통해 accessToken을 들고온다...