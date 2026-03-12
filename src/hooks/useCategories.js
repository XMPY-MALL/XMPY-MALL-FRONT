/*

    class ProductCategory {
        private Integer productCategoryId;
        private String productCategoryName;
        private List<ProductCategoryDetail> details;
    }

    class ProductCategoryDetail {
        private Integer ProductCategoryDetailId;
        private String ProductCategoryDetailName;
    }

    res dto 구조
    [
        {
            productCategoryId: 1,
            productCategoryName: "상의"
            subMenu: [
                {
                    ProductCategoryDetailId: 1,
                    ProductCategoryDetailName: "맨투맨"
                },
                {
                    ProductCategoryDetailId: 2,
                    ProductCategoryDetailName: "후드"
                }
            ]
        },
        {
            productCategoryId: 2,
            productCategoryName: "하의"
            subMenu: [
                {
                    ProductCategoryDetailId: 1,
                    ProductCategoryDetailName: "반바지"
                },
                {
                    ProductCategoryDetailId: 2,
                    ProductCategoryDetailName: "청바지"
                }
            ]
        }
        ...{}
    ]
*/
// 나중에 useQuery로 get요청해서 위와같이 받아오셈
import { useQuery } from "@tanstack/react-query";
import { getCategoriesAPI } from "../apis/endpoints/category";

export const useCategories = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesAPI,
  });

  return data ?? [];
};
