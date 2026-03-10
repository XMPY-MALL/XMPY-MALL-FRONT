import { useQuery } from "@tanstack/react-query";
import { getStocksAPI } from "../../../apis/endpoints/stock";

export const useOrder = (productId) => {
  const { data } = useQuery({
    queryKey: ["stocks", productId],
    queryFn: () => getStocksAPI(productId),
    enabled: !!productId,
  });

  return {
    colors: data?.colors ?? [],
    sizes: data?.sizes ?? [],
  };
};
