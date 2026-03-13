import { useState } from "react";
import { useReviewItems } from "../../../hooks/useReviewItems";
import { useWriteReview } from "../../../hooks/useWriteReview";
import { useMyReviews } from "../../../hooks/useMyReviews";
import styles from "./ReviewWrite.module.css";

export default function ReviewWrite() {
  const { data: items, isLoading: itemsLoading } = useReviewItems();
  const { data: myReviews, isLoading: reviewsLoading } = useMyReviews();
  const { mutate: writeReview } = useWriteReview();
  const [contents, setContents] = useState({});

  const handleChange = (orderItemId, value) => {
    setContents((prev) => ({ ...prev, [orderItemId]: value }));
  };

  const handleSubmit = (orderItemId) => {
    const content = contents[orderItemId];
    if (!content || content.trim() === "") {
      alert("리뷰 내용을 입력해주세요.");
      return;
    }
    writeReview({ orderItemId, content });
  };

  return (
    <div className={styles.container}>

      {/* 작성 가능한 리뷰 */}
      <h3 className={styles.sectionTitle}>작성 가능한 리뷰</h3>
      {itemsLoading ? (
        <div>로딩중...</div>
      ) : !items || items.length === 0 ? (
        <div className={styles.empty}>작성 가능한 리뷰가 없습니다.</div>
      ) : (
        items.map((item) => (
          <div key={item.orderItemId} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.orderId}>주문번호 #{item.ordersId}</span>
              <button className={styles.submitBtn} onClick={() => handleSubmit(item.orderItemId)}>
                리뷰 등록
              </button>
            </div>
            <div className={styles.productInfo}>
              <div className={styles.imgBox}>
                {item.imgUrl && <img src={item.imgUrl} alt={item.productName} className={styles.img} />}
              </div>
              <div className={styles.productDetail}>
                <span className={styles.productName}>{item.productName}</span>
                <span className={styles.productOption}>
                  {item.colorName} / {item.sizeName} / {item.quantity}개
                </span>
              </div>
            </div>
            <textarea
              className={styles.textarea}
              value={contents[item.orderItemId] || ""}
              onChange={(e) => handleChange(item.orderItemId, e.target.value)}
              placeholder="리뷰를 작성해주세요"
              rows={3}
            />
          </div>
        ))
      )}


      {/* 작성한 리뷰 */}
      <h3 className={styles.sectionTitle}>작성한 리뷰</h3>
      {reviewsLoading ? (
        <div>로딩중...</div>
      ) : !myReviews || myReviews.length === 0 ? (
        <div className={styles.empty}>작성한 리뷰가 없습니다.</div>
      ) : (
        myReviews.map((review) => (
          <div key={review.reviewId} className={styles.card}>
            <div className={styles.productInfo}>
              <div className={styles.imgBox}>
                {review.imgUrl && <img src={review.imgUrl} alt={review.productName} className={styles.img} />}
              </div>
              <div className={styles.productDetail}>
                <span className={styles.productName}>{review.productName}</span>
                <span className={styles.productOption}>{review.createdAt}</span>
              </div>
            </div>
            <div className={styles.reviewContent}>{review.content}</div>
          </div>
        ))
      )}

    </div>
  );
}