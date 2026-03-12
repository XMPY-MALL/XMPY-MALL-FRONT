import { useQuery } from "@tanstack/react-query";
import { fetchProductDetail } from "../../../apis/endpoints/product";

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetail(id),
    enabled: !!id,
  });
};
