import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { signupAPI } from "../../../apis/endpoints/auth";


export const useSignupMutation = () => {
    const navigator = useNavigate();

    return useMutation({
        mutationFn: signupAPI,
        onSuccess: () => {
            console.log("회원가입 완료");
            navigator("/signin");
        },
        onError: (error) => {
            console.log(error.response);
            const msg = error.response?.data;
        }
    })
}

export const useSignupValidation = (formVal) => {
    const {
        userName,
        email,
        userPassword,
        passwordConfirm,
        address,
        userPhone
    } = formVal;

    const newError = {};

    // 공백 여부 판단
    if (!userName.trim()){
        newError.userName = "이름을 입력해주세요";
    }
    
    if (!email.trim()){
        newError.email = "비밀번호를 입력해주세요";
    }
    
    if (!userPassword.trim()){
        newError.userPassword = "비밀번호를 입력해주세요"
    }
    
    if (!passwordConfirm.trim()){
        newError.passwordConfirm = "비밀번호를 입력해주세요"
    } else if (userPassword !== passwordConfirm){
        newError.passwordConfirm = "비밀번호가 일치하지 않습니다"
    }

    if (!address.trim()){
        newError.address = "주소를 입력해주세요"
    }

    if (!userPhone.trim()){
        newError.userPhone = "전화번호를 입력해주세요"
    }

    // 검사를 모두 통과했다면 -> newError: {}
    const isAllValidate = Object.keys(newError).length === 0;

    return {newError, isAllValidate}
}