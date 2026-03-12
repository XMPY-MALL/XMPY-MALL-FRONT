import instance from "../instance.js";
// axios 공용 설정 파일 임폴트

// 전체 상품목록 조회
export async function fetchProductList(params = {}) {
    // get / product요청
    const res = await instance.get("/product" , { params });
     // 데이터로 반환
    return res.data
}

// 상품 단건 조회
export async function fetchProductDetail(productId) {
    // get / product/ 3 <- id
    const res = await instance.get(`/product/${productId}`);
    // 데이터로 반환
    return res.data;
}


// 디테일 카테고리별 상품 조회
export async function fetchProductByDetail(categoryDetailId) {
    // get/ product/ detail/ 1
    // 반팔/ 맨투맨/ 반바지
    const res = await instance.get(`/product/detail/${categoryDetailId}`);
    // 데이터 반환
    return res.data;
    
}

export async function createProduct(data) {
    // post /product
    const res = await instance.post("/product", data);
    return res.data;
} 



// 베스트 상품 조회
export async function fetchBestProducts() {
    const response = await instance.get("/product/best");
    return response.data;
}