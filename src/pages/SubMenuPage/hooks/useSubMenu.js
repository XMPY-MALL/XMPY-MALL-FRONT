import { useQuery } from "@tanstack/react-query";
import { getSubMenuAPI } from "../../../apis/endpoints/product";

export const useSubMenu = (categoryDetailId, page) => {
  const { data } = useQuery({
    queryKey: ["subMenu", categoryDetailId, page],
    queryFn: () => getSubMenuAPI(categoryDetailId, page),
  });

  return data ?? { categoryDetailName: "", totalPages: 1, products: [] };
};
