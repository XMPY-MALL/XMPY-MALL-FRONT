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
export const useCategories = () => {
  return [
    {
      productCategoryId: 1,
      productCategoryName: "아우터",
      subMenu: [
        {
          productCategoryDetailId: 1,
          productCategoryDetailName: "패딩",
        },
        {
          productCategoryDetailId: 2,
          productCategoryDetailName: "코트",
        },
        {
          productCategoryDetailId: 3,
          productCategoryDetailName: "자켓",
        },
      ],
    },
    {
      productCategoryId: 2,
      productCategoryName: "상의",
      subMenu: [
        {
          productCategoryDetailId: 4,
          productCategoryDetailName: "맨투맨",
        },
        {
          productCategoryDetailId: 5,
          productCategoryDetailName: "후드",
        },
        {
          productCategoryDetailId: 6,
          productCategoryDetailName: "티셔츠",
        },
      ],
    },
    {
      productCategoryId: 3,
      productCategoryName: "하의",
      subMenu: [
        {
          productCategoryDetailId: 7,
          productCategoryDetailName: "반바지",
        },
        {
          productCategoryDetailId: 8,
          productCategoryDetailName: "청바지",
        },
        {
          productCategoryDetailId: 9,
          productCategoryDetailName: "슬랙스",
        },
      ],
    },
  ];
};
