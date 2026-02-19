import React from "react";
import { container } from "./styles";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HOME_IMAGE_CARDS } from "../../constants/images";
import * as s from "./styles"


export default function Home() {
  return (
    <div css={s.container}>
      <div css={s.cardSection}>
        { HOME_IMAGE_CARDS.map((card) => {
          return (
            <div key={card.id} css={s.card}>
              <img src={card.src} alt={card.alt} css={s.cardImage} />
            </div>
          );
        }) }
      </div>
    </div>
  );
}
