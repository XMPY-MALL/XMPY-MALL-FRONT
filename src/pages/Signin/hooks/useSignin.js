import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../../../stores/authStore"
import { signinApi } from "../../../apis/endpoints/auth";


export const useSigninMutation = () => {
    const {login} = useAuthStore();

    return useMutation({
        mutationFn: signinApi,

        onSuccess: (data) => {
            const accessToken = data;
            login(accessToken);
        },

        onError: (error) => {
            const errorMsg = error.response.data;
            console.log(errorMsg);

        }
    })
}