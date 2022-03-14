import React from "react";
import banner from "assets/loginBanner.png";
import logo from "assets/googleLogo.png";
import styles from "./index.module.scss";
import Form from "./Form";
import store from "_slices/store.js";
import { Provider } from "react-redux";

export default function Login() {
  return (
    <Provider store={store}>
        <div className={styles.loginFormContainer}>
          <div className={styles.loginForm}>
            <span className={styles.items}>Đăng nhập</span>
            <button className={styles.loginBtn}>
              <img className={styles.googleLogo} src={logo} alt="logo" />
              <span className={styles.btnItems}>Đăng nhập với Google</span>
            </button>
            <div className={styles.spanContainer}>
              <div className={styles.line}></div>
              <span className={styles.spanItem}>
                Hoặc đăng nhập bằng tài khoản
              </span>
              <div className={styles.line}></div>
            </div>
            <Form />
          </div>
          <div className={styles.loginBannerContainer}>
            <img src={banner} alt="banner"></img>
          </div>
        </div>
    </Provider>
  );
}
