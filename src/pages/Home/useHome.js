import { useQuery } from "@tanstack/react-query";
import { fetchBestProducts } from "../../apis/endpoints/product";

export const useHomeCard = () => {
    return useQuery({
        queryKey: ["bestProducts"],
        queryFn: fetchBestProducts,
    });
};
