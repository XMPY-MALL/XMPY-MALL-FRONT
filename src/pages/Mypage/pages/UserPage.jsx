import { useState } from "react";
import styles from "./UserPage.module.css";
import OrderList from "./UserPageTabs/OrderList";
import ReviewWrite from "./UserPageTabs/ReviewWrite";
import UserInfo from "./UserPageTabs/UserInfo/UserInfo";

const UserPage = () => {
  const [activeTab, setActiveTab] = useState("개인 정보 수정");

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h2>마이페이지</h2>
        <p>계정정보 및 주문내역 관리</p>
      </div>

      <div className={styles.tabMenu}>
        <span
          className={`${styles.tabItem} ${activeTab === "주문내역" ? styles.active : ""}`}
          onClick={() => setActiveTab("주문내역")}
        >
          주문 내역
        </span>
        {/*
                    ${activeTab === "주문내역" ? styles.active : ""}
                    ------------------------------------------------
                    activeTab === "주문내역" 조건이
                    true면 "styles.active"를 추가하고,
                    false면 "빈문자열"을 추가한다
                */}
        <span
          className={`${styles.tabItem} ${activeTab === "리뷰작성" ? styles.active : ""}`}
          onClick={() => setActiveTab("리뷰작성")}
        >
          리뷰 작성
        </span>
        <span
          className={`${styles.tabItem} ${activeTab === "개인정보수정" ? styles.active : ""}`}
          onClick={() => setActiveTab("개인정보수정")}
        >
          개인 정보 수정
        </span>
      </div>

      <div className={styles.content}>
        {activeTab === "주문내역" && <OrderList />}
        {activeTab === "리뷰작성" && <ReviewWrite />}
        {activeTab === "개인정보수정" && <UserInfo />}
      </div>
      {/* 각각의 tab을 눌렀을 때, 어떤 ui를 보여 줄 것인지를 결정시킨다 */}
    </div>
  );
};

export default UserPage;
