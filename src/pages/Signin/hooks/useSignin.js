import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../../../stores/authStore"
import { signinApi } from "../../../apis/endpoints/auth";
import { jwtDecode } from "jwt-decode"
import { useState } from "react"; // 추가

export const useSigninMutation = () => {
    const { login } = useAuthStore();
    const [errorMessage, setErrorMessage] = useState(''); // 추가

    return {
        errorMessage, // 추가
        ...useMutation({
            mutationFn: signinApi,

            onSuccess: (data) => {
                const accessToken = data;
                const decoded = jwtDecode(accessToken);
                console.log(decoded);
                setErrorMessage(''); // 성공시 에러 메시지 초기화
                login(accessToken);
            },

            onError: (error) => {
                const errorMsg = error.response.data;
                console.log(errorMsg);
                setErrorMessage(errorMsg); // 에러 메시지 세팅
            }
        })
    }
}