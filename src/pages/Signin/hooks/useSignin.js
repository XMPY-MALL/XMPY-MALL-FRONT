import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../../../stores/authStore"
import { signinApi } from "../../../apis/endpoints/auth";


export const useSigninMutation = () => {
    const {login} = useAuthStore();

    return useMutation({
        mutationFn: signinApi,
        // response.data 받는다

        onSuccess: (data) => {
            const accessToken = data;
            // accessToken이라는 변수에 해당 data를 저장한다

            login(accessToken);
            // 토스트도 적긴 해야함
        },

        onError: (error) => {
            const errorMsg = error.response.data;
            console.log(errorMsg);
            // 토스트도 적긴 해야함
        }
    })
}