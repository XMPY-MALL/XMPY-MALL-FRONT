import {useQuery} from "@tanstack/react-query"
import { getMeAPI } from "../../../apis/endpoints/user"


export const useMyInfo = () => {
    return useQuery({
        queryKey: ["getMyInfo"],
        queryFn: getMeAPI,
        staleTime: 5 * 60 * 1000
    })
}

// useQuery는 @tanstack/react-query라이브러리에 
// 포함되어있기 때문에 별도로 설치해야 한다
