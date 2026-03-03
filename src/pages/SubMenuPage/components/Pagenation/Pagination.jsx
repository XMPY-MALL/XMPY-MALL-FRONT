/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useSearchParams } from "react-router-dom";
import { XMPY_COLORS } from "../../../../constants/colors";

const containerStyle = css`
  display: flex;
  list-style: none;
  gap: 4px;
  padding: 0;
  margin: 0;
`;

const baseStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 2px;
  font-size: 13px;
  border: 1px solid ${XMPY_COLORS.LIGHT_BEIGE};
  background: ${XMPY_COLORS.WHITE};
  color: ${XMPY_COLORS.GRAY_BROWN};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.15s ease;
  &:hover {
    background: ${XMPY_COLORS.LIGHT_BEIGE};
    border-color: ${XMPY_COLORS.BEIGE_BROWN};
    color: ${XMPY_COLORS.BLACK};
  }
`;

const activeStyle = css`
  background: ${XMPY_COLORS.GRAY_BROWN};
  border-color: ${XMPY_COLORS.GRAY_BROWN};
  color: ${XMPY_COLORS.WHITE};
  font-weight: 700;
  pointer-events: none;
`;

const disabledStyle = css`
  color: ${XMPY_COLORS.LIGHT_BEIGE};
  border-color: ${XMPY_COLORS.LIGHT_BEIGE};
  cursor: not-allowed;
  pointer-events: none;
`;

const PageLink = ({ to, children, active, disabled }) => {
  if (disabled) {
    return <span css={[baseStyle, disabledStyle]}>{children}</span>;
  }
  return (
    <Link to={to} css={[baseStyle, active && activeStyle]}>
      {children}
    </Link>
  );
};
const Pagination = ({ totalPages }) => {
  const [searchParams] = useSearchParams();
  const activePage = Number(searchParams.get("page")) || 1;

  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, activePage - 2);
    const end = Math.min(totalPages, activePage + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();
  const isFirst = activePage === 1;
  const isLast = activePage === totalPages;

  return (
    <ul css={containerStyle}>
      <li>
        <PageLink to="?page=1" disabled={isFirst}>
          «
        </PageLink>
      </li>
      <li>
        <PageLink to={`?page=${activePage - 1}`} disabled={isFirst}>
          ‹
        </PageLink>
      </li>
      {pageNumbers.map((pageNum) => (
        <li key={pageNum}>
          <PageLink to={`?page=${pageNum}`} active={pageNum === activePage}>
            {pageNum}
          </PageLink>
        </li>
      ))}
      <li>
        <PageLink to={`?page=${activePage + 1}`} disabled={isLast}>
          ›
        </PageLink>
      </li>
      <li>
        <PageLink to={`?page=${totalPages}`} disabled={isLast}>
          »
        </PageLink>
      </li>
    </ul>
  );
};

export default Pagination;
