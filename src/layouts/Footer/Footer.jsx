// Footer/Footer.tsx
/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./styles";

export default function Footer() {
  return (
    <footer css={s.container}>
      <div css={s.inner}>

        <div css={s.column}>
          <h4 css={s.title}>XMPY</h4>
          <Link to="/terms" css={s.link}>이용약관</Link>
          <Link to="/privacy" css={s.link}>개인정보 처리방침</Link>
        </div>

        <div css={s.column}>
          <h4 css={s.title}>공지사항</h4>
          <Link to="/notice" css={s.link}>공지사항</Link>
          <Link to="/faq" css={s.link}>FAQ</Link>
          <Link to="/exchange" css={s.link}>문의 등록 / 조회</Link>
        </div>

        <div css={s.column}>
          <h4 css={s.title}>회사 정보</h4>
          <p css={s.text}>대표 전화 : 051-0000-0000</p>
          <p css={s.text}>운영시간 : 평일 09:00 - 18:00</p>
          <p css={s.text}>점심시간 : 12:00 - 13:00</p>
          <p css={s.text}>주말 / 공휴일 휴무</p>
        </div>

      </div>
    </footer>
  );
}