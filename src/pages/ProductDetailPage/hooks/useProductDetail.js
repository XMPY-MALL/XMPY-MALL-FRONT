import { useQuery } from "@tanstack/react-query";
import { fetchProductDetail } from "../../../apis/endpoints/product";

export const useProduct = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductDetail(id),
    });

    return { data, isLoading, isError };
};
