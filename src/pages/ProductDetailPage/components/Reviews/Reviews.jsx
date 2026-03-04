/** @jsxImportSource @emotion/react */
import { useReviews } from "../../hooks/useReviews";
import * as s from "./styles";

export default function Reviews({ id }) {
  const { visibleReviews, hasMore, loadMore } = useReviews(id);

  return (
    <div css={s.container}>
      <div css={s.header}>
        <h2 css={s.title}>상품 후기</h2>
      </div>
      <ul css={s.list}>
        {visibleReviews.map(({ reviewId, userName, content, createdAt }) => (
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
        <button css={s.moreButton} onClick={loadMore}>
          더보기
        </button>
      )}
    </div>
  );
}
