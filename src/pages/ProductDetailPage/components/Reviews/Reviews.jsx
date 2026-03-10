/** @jsxImportSource @emotion/react */
import { useReviews } from "../../hooks/useReviews";
import * as s from "./styles";

export default function Reviews({ id }) {
  const { reviews, hasMore, loadMore, isFetching } = useReviews(id);

  return (
    <div css={s.container}>
      <div css={s.header}>
        <h2 css={s.title}>상품 후기</h2>
      </div>
      <ul css={s.list}>
        {reviews.map(({ reviewId, userName, content, createdAt }) => (
          <li key={reviewId} css={s.item}>
            <div css={s.itemTop}>
              <span css={s.userName}>{userName}</span>
              <span css={s.createdAt}>{createdAt}</span>
            </div>
            <p css={s.content}>{content}</p>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button css={s.moreButton} onClick={loadMore} disabled={isFetching}>
          {isFetching ? "로딩 중..." : "더보기"}
        </button>
      )}
    </div>
  );
}
