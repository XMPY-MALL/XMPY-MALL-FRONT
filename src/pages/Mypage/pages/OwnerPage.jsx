import { useState } from "react";
import styles from "./OwnerPage.module.css";

export default function OwnerPage() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h2>마이 페이지</h2>
        <p>계정 정보 및 주문 내역 관리</p>
      </div>
      <div className={styles.tabMenu}>
        <span
          className={`${styles.tabItem} ${activeTab === "주문내역관리" ? styles.active : ""}`}
          onClick={() => setActiveTab("주문내역관리")}
        >
          주문 내역 관리
        </span>
        <span
          className={`${styles.tabItem} ${activeTab === "리뷰관리" ? styles.active : ""}`}
          onClick={() => setActiveTab("리뷰관리")}
        >
          리뷰 관리
        </span>
      </div>
    </div>
  );
}
