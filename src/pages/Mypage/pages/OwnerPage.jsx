import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAdminOrdersApi,
  getAdminReviewsApi,
  updateAdminOrderStatusApi,
  updateAdminReviewReplyApi,
} from "../../../apis/endpoints/admin";
import styles from "./OwnerPage.module.css";

const ORDER_STATUS_OPTIONS = [
  "주문완료",
  "배송준비",
  "배송중",
  "배송완료",
  "주문취소",
];

function formatDateOnly(dateString) {
  if (!dateString) return "-";
  return String(dateString).slice(0, 10);
}

export default function OwnerPage() {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState("주문내역관리");
  const [openReplyId, setOpenReplyId] = useState(null);
  const [replyInputs, setReplyInputs] = useState({});

  const {
    data: orders = [],
    isLoading: isOrdersLoading,
    isError: isOrdersError,
  } = useQuery({
    queryKey: ["adminOrders"],
    queryFn: getAdminOrdersApi,
    enabled: activeTab === "주문내역관리",
  });

  const {
    data: reviews = [],
    isLoading: isReviewsLoading,
    isError: isReviewsError,
  } = useQuery({
    queryKey: ["adminReviews"],
    queryFn: getAdminReviewsApi,
    enabled: activeTab === "리뷰관리",
  });

  const updateOrderStatusMutation = useMutation({
    mutationFn: updateAdminOrderStatusApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminOrders"] });
    },
    onError: () => {
      alert("주문 상태 변경에 실패했습니다.");
    },
  });

  const updateReviewReplyMutation = useMutation({
    mutationFn: updateAdminReviewReplyApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminReviews"] });
      setOpenReplyId(null);
    },
    onError: () => {
      alert("리뷰 답변 저장에 실패했습니다.");
    },
  });

  const handleOrderStatusChange = (ordersId, status) => {
    updateOrderStatusMutation.mutate({ ordersId, status });
  };

  const handleOpenReply = (review) => {
    setOpenReplyId(review.reviewId);
    setReplyInputs((prev) => ({
      ...prev,
      [review.reviewId]: prev[review.reviewId] ?? review.adminReply ?? "",
    }));
  };

  const handleReplyInputChange = (reviewId, value) => {
    setReplyInputs((prev) => ({
      ...prev,
      [reviewId]: value,
    }));
  };

  const handleSaveReply = (reviewId) => {
    const adminReply = replyInputs[reviewId]?.trim();

    if (!adminReply) {
      alert("답변 내용을 입력해주세요.");
      return;
    }

    updateReviewReplyMutation.mutate({
      reviewId,
      adminReply,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h2 className={styles.pageTitle}>마이페이지</h2>
        <p className={styles.pageDesc}>계정 정보 및 주문 내역 관리</p>
      </div>

      <div className={styles.tabMenu}>
        <button
          type="button"
          className={`${styles.tabItem} ${
            activeTab === "주문내역관리" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("주문내역관리")}
        >
          주문 내역 관리
        </button>

        <button
          type="button"
          className={`${styles.tabItem} ${
            activeTab === "리뷰관리" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("리뷰관리")}
        >
          리뷰 관리
        </button>
      </div>

      {activeTab === "주문내역관리" && (
        <section className={styles.orderSection}>
          <div className={styles.tableHeader}>
            <div className={`${styles.headerCell} ${styles.colOrderId}`}>주문 ID</div>
            <div className={`${styles.headerCell} ${styles.colCustomer}`}>고객명</div>
            <div className={`${styles.headerCell} ${styles.colProduct}`}>상품</div>
            <div className={`${styles.headerCell} ${styles.colPrice}`}>금액</div>
            <div className={`${styles.headerCell} ${styles.colDate}`}>주문일</div>
            <div className={`${styles.headerCell} ${styles.colStatus}`}>배송 상태</div>
          </div>

          {isOrdersLoading ? (
            <div className={styles.emptyBox}>주문 데이터를 불러오는 중입니다.</div>
          ) : isOrdersError ? (
            <div className={styles.emptyBox}>주문 데이터를 불러오지 못했습니다.</div>
          ) : orders.length === 0 ? (
            <div className={styles.emptyBox}>주문 내역이 없습니다.</div>
          ) : (
            <div className={styles.tableBody}>
              {orders.map((order) => (
                <div key={order.orderId} className={styles.tableRow}>
                  <div className={`${styles.cell} ${styles.colOrderId} ${styles.orderIdText}`}>
                    #{order.orderId}
                  </div>

                  <div className={`${styles.cell} ${styles.colCustomer} ${styles.customerText}`}>
                    {order.customerName}
                  </div>

                  <div className={`${styles.cell} ${styles.colProduct}`}>
                    <div className={styles.productText}>{order.productSummary}</div>
                  </div>

                  <div className={`${styles.cell} ${styles.colPrice} ${styles.priceText}`}>
                    {Number(order.totalPrice || 0).toLocaleString()}원
                  </div>

                  <div className={`${styles.cell} ${styles.colDate} ${styles.dateText}`}>
                    {formatDateOnly(order.orderDate)}
                  </div>

                  <div className={`${styles.cell} ${styles.colStatus}`}>
                    <div className={styles.statusSelectWrap}>
                      <select
                        className={styles.statusSelect}
                        value={order.status}
                        onChange={(e) =>
                          handleOrderStatusChange(order.orderId, e.target.value)
                        }
                        disabled={updateOrderStatusMutation.isPending}
                      >
                        {ORDER_STATUS_OPTIONS.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {activeTab === "리뷰관리" && (
        <section className={styles.reviewSection}>
          {isReviewsLoading ? (
            <div className={styles.emptyBox}>리뷰 데이터를 불러오는 중입니다.</div>
          ) : isReviewsError ? (
            <div className={styles.emptyBox}>리뷰 데이터를 불러오지 못했습니다.</div>
          ) : reviews.length === 0 ? (
            <div className={styles.emptyBox}>등록된 리뷰가 없습니다.</div>
          ) : (
            <div className={styles.reviewList}>
              {reviews.map((review) => {
                const isOpen = openReplyId === review.reviewId;
                const replyValue =
                  replyInputs[review.reviewId] ?? review.adminReply ?? "";

                return (
                  <div key={review.reviewId} className={styles.reviewCard}>
                    <div className={styles.reviewTopRow}>
                      <div className={styles.reviewUserName}>{review.userName}</div>
                      <div className={styles.reviewDate}>
                        {formatDateOnly(review.createdAt)}
                      </div>
                    </div>

                    <div className={styles.reviewProduct}>
                      {review.productName}
                      {review.orderId ? `(주문 #${review.orderId})` : ""}
                    </div>

                    <div className={styles.reviewContent}>{review.content}</div>

                    {review.adminReply && !isOpen && (
                      <div className={styles.savedReplyBox}>
                        <div className={styles.savedReplyLabel}>관리자 답변</div>
                        <div className={styles.savedReplyText}>{review.adminReply}</div>
                      </div>
                    )}

                    <div className={styles.reviewButtonRow}>
                      <button
                        type="button"
                        className={styles.replyButton}
                        onClick={() => handleOpenReply(review)}
                      >
                        {review.adminReply ? "답변수정" : "답변하기"}
                      </button>
                    </div>

                    {isOpen && (
                      <div className={styles.replyEditor}>
                        <textarea
                          className={styles.replyTextarea}
                          value={replyValue}
                          placeholder="답변 내용을 입력하세요."
                          onChange={(e) =>
                            handleReplyInputChange(review.reviewId, e.target.value)
                          }
                        />
                        <div className={styles.replyEditorButtonRow}>
                          <button
                            type="button"
                            className={styles.replyCancelButton}
                            onClick={() => setOpenReplyId(null)}
                          >
                            취소
                          </button>
                          <button
                            type="button"
                            className={styles.replySaveButton}
                            onClick={() => handleSaveReply(review.reviewId)}
                            disabled={updateReviewReplyMutation.isPending}
                          >
                            저장
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}
    </div>
  );
}