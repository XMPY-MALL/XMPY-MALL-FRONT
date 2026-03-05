import React, { useEffect, useState } from "react";
import { useMyInfo } from "../../../hooks/useUserInfo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserInfoAPI } from "../../../../../apis/endpoints/user";
import styles from './UserInfo.module.css';

export default function UserInfo() {
  const { data: user, isLoading } = useMyInfo();
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    userPassword: "",
    newPassword: "",
    address: "",
    userPhone: "",
  });

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        address: user.address,
        userPhone: user.userPhone,
      }));
    }
  }, [user]);

  const updateMutation = useMutation({
    mutationFn: updateUserInfoAPI,
    onSuccess: () => {
      alert("수정 완료!");
      queryClient.invalidateQueries(["getMyInfo"]);
    },
    onError: (error) => {
      if (error.response?.status === 400) {
        alert("현재 비밀번호가 일치하지 않습니다");
      }
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateMutation.mutate(form);
  };

  if (isLoading) return <div className={styles.loading}>로딩중...</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>개인정보 수정</h2>

      <div className={styles.formGroup}>
        <label className={styles.label}>현재 비밀번호</label>
        <input
          className={styles.input}
          type="password"
          name="userPassword"
          value={form.userPassword}
          onChange={handleChange}
          placeholder="현재 비밀번호"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>새 비밀번호</label>
        <input
          className={styles.input}
          type="password"
          name="newPassword"
          value={form.newPassword}
          onChange={handleChange}
          placeholder="새 비밀번호"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>주소</label>
        <input
          className={styles.input}
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="주소"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>전화번호</label>
        <input
          className={styles.input}
          type="text"
          name="userPhone"
          value={form.userPhone}
          onChange={handleChange}
          placeholder="전화번호"
        />
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleSubmit}>저장</button>
      </div>
    </div>
  );
}