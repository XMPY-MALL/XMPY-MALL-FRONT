/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./styles";
import { useState } from "react";

export default function CategoryDropdown({ category }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      css={s.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div css={s.navLink}>{category.productCategoryName}</div>
      <ul css={s.dropdown(isHovered)}>
        {category.subMenu.map((sub) => (
          <li key={sub.productCategoryDetailId}>
            <Link
              to={`/category/${sub.productCategoryDetailId}`}
              css={s.dropdownItem}
            >
              {sub.productCategoryDetailName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
