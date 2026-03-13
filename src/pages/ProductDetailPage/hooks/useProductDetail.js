import { useQuery } from "@tanstack/react-query";
import { fetchProductDetail } from "../../../apis/endpoints/product";

const fallbackData = {
  1: {
    productName: "루즈핏 셔츠",
    price: 109000,
    best: true,
    imgUrls: ["https://lookple.com/web/product/big/202009/5f202219f7841f66aee55f6d4af304cf.webp"],
    description: "남친룩, 데이트룩으로 알맞는 기본 셔츠아이템",
    quickRundown: "면 혼방 | 루즈핏 | 간절기 추천 | 봄 추천",
    productDetailContent: "<p>남친룩, 데이트룩으로 알맞는 기본 셔츠아이템!</p><p>간절기, 봄 시즌에 알맞는 셔츠입니다.</p>",
  },
  2: {
    productName: "와이드슬랙스",
    price: 44900,
    best: true,
    imgUrls: ["https://cafe24img.poxo.com/hanggi4043/web/product/big/202602/e720adcff4e351bee25519e87de1f7d1.jpg"],
    description: "트랜디한 실루엣으로 맞게 떨어지는 기본아이템",
    quickRundown: "고급원단 | 와이드핏 | 세탁 후 변형 없음 | 사계절",
    productDetailContent: "<p>트랜디한 실루엣으로 맞게 떨어지는 기본아이템!</p><p>고급원단을 사용하여 세탁시에도 줄어들거나 헤지지 않습니다.</p>",
  },
  3: {
    productName: "레더자켓",
    price: 35900,
    best: true,
    imgUrls: ["https://cafe24img.poxo.com/hanggi4043/web/product/big/202603/3f965b4ccdac8c118412f3b1f5ec094b.webp"],
    description: "요즘 트랜드에 알맞는 레더자켓",
    quickRundown: "고급가죽 | 구겨짐 없음 | 물빠짐 없음 | 가을 겨울 추천",
    productDetailContent: "<p>요즘 트랜드에 알맞는 자켓!</p><p>고급가죽을 사용하여 구겨짐이나 물빠짐이 없습니다.</p>",
  },
};

export const useProduct = (id) => {
  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetail(id),
    enabled: !!id,
    retry: false,
  });

  const fallback = fallbackData[id] ?? {};

  return {
    productName: data?.productName || fallback.productName || "",
    description: data?.description || fallback.description || "",
    best: data?.best ?? fallback.best ?? false,
    imgUrls: (data?.imgUrls?.length ? data.imgUrls : fallback.imgUrls) ?? [],
    price: data?.price || fallback.price || 0,
    quickRundown: data?.quickRundown || fallback.quickRundown || "",
    productDetailContent: data?.productDetailContent || fallback.productDetailContent || "",
  };
};
