/** @jsxImportSource @emotion/react */
import { useCart } from "../../hooks/useCart";
import { useForm } from "../../hooks/useForm";
import { useKakaoPostcodePopup } from "react-daum-postcode";
import * as s from "./styles";

export default function PaymentPage() {
  const { cartItems } = useCart();
  const { formVal, setFormVal, handleChange } = useForm({
    zonecode: "",
    address: "",
    addressDetail: "",
  });
  const open = useKakaoPostcodePopup();

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const estimatedDate = new Date();
  estimatedDate.setDate(estimatedDate.getDate() + 3);
  const formattedDate = estimatedDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const handleAddressSearch = () => {
    open({
      onComplete: (data) => {
        setFormVal((prev) => ({
          ...prev,
          zonecode: data.zonecode,
          address: data.roadAddress,
        }));
      },
    });
  };

  return (
    <div css={s.container}>
      <h1 css={s.title}>주문하기</h1>
      <div css={s.layout}>
        <div css={s.left}>
          <section css={s.section}>
            <h2 css={s.sectionTitle}>배송정보</h2>
            <div css={s.addressBox}>
              <div css={s.addressRow}>
                <input
                  css={s.input}
                  value={formVal.zonecode}
                  placeholder="우편번호"
                  readOnly
                />
                <button css={s.searchBtn} onClick={handleAddressSearch}>
                  주소 검색
                </button>
              </div>
              <input
                css={s.input}
                value={formVal.address}
                placeholder="도로명 주소"
                readOnly
              />
              <input
                css={s.input}
                name="addressDetail"
                value={formVal.addressDetail}
                placeholder="상세주소를 입력하세요"
                onChange={handleChange}
              />
              <p css={s.estimatedDate}>도착 예정일 · {formattedDate}</p>
            </div>
          </section>

          <section css={s.section}>
            <ul css={s.itemList}>
              {cartItems.map((item) => (
                <li
                  key={`${item.productId}-${item.color.id}-${item.size.id}`}
                  css={s.item}
                >
                  <img
                    src={item.imgUrl}
                    alt={item.productName}
                    css={s.thumbnail}
                  />
                  <div css={s.itemInfo}>
                    <p css={s.itemName}>{item.productName}</p>
                    <p css={s.itemOption}>
                      {item.color.label} / {item.size.label} / {item.quantity}개
                    </p>
                  </div>
                  <span css={s.itemPrice}>
                    {(item.price * item.quantity).toLocaleString()}원
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside css={s.right}>
          <div css={s.summary}>
            <h2 css={s.sectionTitle}>주문요약</h2>
            <div css={s.summaryRow}>
              <span>총 수량</span>
              <span>{totalQuantity}개</span>
            </div>
            <div css={s.summaryRow}>
              <span>상품 금액</span>
              <span>{totalPrice.toLocaleString()}원</span>
            </div>
            <div css={s.summaryRow}>
              <span>배송비</span>
              <span>0원</span>
            </div>
            <div css={s.summaryTotal}>
              <span>총 결제 금액</span>
              <span>{totalPrice.toLocaleString()}원</span>
            </div>
            <button css={s.payButton}>결제하기</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
