import { useQuery } from "@tanstack/react-query";
import { getOrderListAPI } from "../../../apis/endpoints/order";

export const useOrderList = () => {
    return useQuery({
        queryKey: ["getOrderList"],
        queryFn: getOrderListAPI,  
    });
}