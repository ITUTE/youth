import React, { useState } from "react";
import styles from "./index.module.scss";
import "mdbreact/dist/css/mdb.css";
import { useDispatch } from "react-redux";
import {loginReducer} from "_slices/loginSlice.js";

export default function Form() {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch;
  const handleLoginBtn = () => {
    dispatch(
      loginReducer.actions.userLoginCheck({
        userID: userID,
        password: password,
      })
    );
  };
  const handleInputId = (e) => {
    setUserID(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  }
  return (
    <form className={styles.inputContainer}>
      <label className={styles.label}>
        ID người dùng
      </label>
      <input
        type="text"
        id="userID"
        name="userID"
        placeholder="Nhập ID"
        className={styles.input}
        onChange={handleInputId}
      ></input>
      <label className={styles.label}>
        Mật khẩu
      </label>
      <input
        type="password"
        id="userPassword"
        name="userPassword"
        placeholder="Nhập mật khẩu"
        className={styles.input}
        onChange={handleInputPassword}
      ></input>
      <button className={styles.submitBtn} onClick={handleLoginBtn}>
        Đăng nhập
      </button>
    </form>
  );
}
