import React from 'react';
import { useSigninMutation } from './hooks/useSignin';
import * as s from "./style"
import { css } from '@emotion/react';
import logo from "../../assets/logo.png"
import { useForm } from '../../hooks/useForm';


export default function Signin() {
    // const {formVal, handleChange} = useForm({
    //     username: "",
    //     password: ""
    // });
    const {formVal, handleChange} = useForm({
        username: "",
        password: ""
        // 위에 친구들이 initVal(매개변수)
    })

    const {isPending, mutate} = useSigninMutation();
    // 여기의 mutate가 useSignin의 mutationFn, onSucess모두 해당?

    // 로그인 버튼을 눌렀을때, 실행되는 코드
    const handleSignin = () => {
        mutate(formVal,
        // mutate가 성공하면 실행한다.
        {
            onSuccess : () => {
                setTimeout(() => {
                    window.location.href = "/";
                }, 1000);
            }
        }
        )
    }


    return (
        <div css={s.container}>
            <div css={s.signinBox}>

                <div css={s.logoBox}>
                    <img src={logo} alt="logo" css={s.logo} />
                </div>

                <h1 css={s.title}>로그인</h1>

                <div css={s.formBox}>
                    <div css={s.inputBox}>
                        <label>아이디</label>
                        <input
                            type="text"
                            value={formVal.username}
                            name='username'
                            onChange={handleChange}
                            placeholder='아이디를 입력하세요'
                        />
                    </div>

                    <div css={s.inputBox}>
                        <label>패스워드</label>
                        <input
                            type="password"
                            value={formVal.password}
                            name='password'
                            onChange={handleChange}
                            placeholder='패스워드를 입력하세요'
                        />
                    </div>

                    <button css={s.btn} onClick={handleSignin} disabled={isPending}>
                        {/* disabled = {isPending} : isPending이 true면 버튼비활성화, false면 버튼활성화 */}
                        {isPending ? "로그인중" : "로그인"}
                    </button>
                </div>
            </div>
        </div>
    );
}

