
// npm install zustand 하기
import { create } from "zustand";

// 처음화면 - (create 최초실행) isAuthenticated : false , accessToken : null
// login이 되엇을때 - isAuthenticated: true, accessToken: accessToken
// logout이 되었을때 - isAuthenticated: false, accessToken: null
// 로그인상태에서 새로고침화면 - (create 재실행) 이미 localStorage안에 accessToken이 존재하기 때문에 isAuthenticated: true, accessToken: ~~
export const useAuthStore = create((set) => {
    const accessToken = localStorage.getItem("accessToken");
    // 처음에, 접속을 할때, create가 실행은 되지만,
    // 현재 accessToken이 존재는 하지 않기 때문에
    // getItem은 accessToken이라는 localStorage로부터 값을 꺼내오는 코드
    return {
        isAuthenticated : !!accessToken,
        accessToken: accessToken,

        login: (accessToken) => {
            localStorage.setItem("accessToken", accessToken);
            set({
                isAuthenticated: true,
                accessToken: accessToken
            });
        },

        logout: () => {
            localStorage.removeItem("accessToken");
            set({
                isAuthenticated: false,
                accessToken: null
            })
        }
        // 이 안에 setToken이 들어가야하는지 아닌지..
        // 리프레쉬토큰 관련 코드를 구현을 안해놓았기 때문에
        // 따로 적을 필요는 없음..
    }
})