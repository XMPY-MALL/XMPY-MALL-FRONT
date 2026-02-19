import instance from "../instance";


export const signinApi = async (dto) => {
  const response = await instance.post("/auth/signin", dto);
  return response.data;
};
//  {username:"", password: ""} -> dto -> response.data