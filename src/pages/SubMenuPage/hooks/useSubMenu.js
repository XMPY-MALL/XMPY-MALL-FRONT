// hooks/useSubMenu.js
export const useSubMenu = (categoryDetailId, page) => {
  return {
    categoryDetailName: "셔츠",
    totalPages: 5,
    products: [
      {
        productId: 1,
        categoryDetailName: "셔츠",
        productName: "스트라이프 셔츠",
        price: 45000,
        thumbnailUrl:
          "https://lookple.com/web/product/extra/big/202409/f8a728d98e87ff129eac92a244ee0b3c.png",
        best: true,
        soldOut: false,
        reviewCount: 1,
      },
      {
        productId: 2,
        categoryDetailName: "셔츠",
        productName: "체크 셔츠",
        price: 30000,
        thumbnailUrl:
          "https://lookple.com/web/product/extra/big/202409/753cda836d7a089cd651b6358f0ba23c.png",
        best: true,
        soldOut: false,
        reviewCount: 3,
      },
      {
        productId: 3,
        categoryDetailName: "셔츠",
        productName: "오버핏 셔츠",
        price: 43000,
        thumbnailUrl:
          "https://lookple.com/web/product/extra/big/202409/f8a728d98e87ff129eac92a244ee0b3c.png",
        best: true,
        soldOut: true,
        reviewCount: 2,
      },
      {
        productId: 4,
        categoryDetailName: "셔츠",
        productName: "스탠다드 핏 셔츠",
        price: 44100,
        thumbnailUrl:
          "https://lookple.com/web/product/extra/big/202409/753cda836d7a089cd651b6358f0ba23c.png",
        best: true,
        soldOut: false,
        reviewCount: 4,
      },
      {
        productId: 5,
        categoryDetailName: "셔츠",
        productName: "린넨 셔츠",
        price: 38000,
        thumbnailUrl:
          "https://lookple.com/web/product/extra/big/202409/f8a728d98e87ff129eac92a244ee0b3c.png",
        best: false,
        soldOut: false,
        reviewCount: 7,
      },
      {
        productId: 6,
        categoryDetailName: "셔츠",
        productName: "베이직 셔츠",
        price: 25000,
        thumbnailUrl:
          "https://lookple.com/web/product/extra/big/202409/753cda836d7a089cd651b6358f0ba23c.png",
        best: false,
        soldOut: false,
        reviewCount: 12,
      },
      {
        productId: 7,
        categoryDetailName: "셔츠",
        productName: "슬림핏 셔츠",
        price: 55000,
        thumbnailUrl:
          "https://lookple.com/web/product/extra/big/202409/f8a728d98e87ff129eac92a244ee0b3c.png",
        best: false,
        soldOut: true,
        reviewCount: 0,
      },
      {
        productId: 8,
        categoryDetailName: "셔츠",
        productName: "루즈핏 셔츠",
        price: 69000,
        thumbnailUrl:
          "https://lookple.com/web/product/extra/big/202409/753cda836d7a089cd651b6358f0ba23c.png",
        best: false,
        soldOut: false,
        reviewCount: 5,
      },
    ],
  };
};

[
  {
    categoryName: "상의",
    products: [
      {
        productId: 8,
        categoryDetailName: "셔츠",
        productName: "루즈핏 셔츠",
        price: 69000,
        thumbnailUrl:
          "https://lookple.com/web/product/extra/big/202409/753cda836d7a089cd651b6358f0ba23c.png",
        best: false,
        soldOut: false,
        reviewCount: 5,
      },
    ],
  },
  {
    categoryName: "하의",
    products: [{}],
  },
  {
    categoryName: "아우터",
    products: [{}],
  },
];
