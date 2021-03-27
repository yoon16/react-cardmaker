import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modal_overlay}></div>
        <div className={styles.content}>
          <header className={styles.header}>
            <img src="../../../images/logo.png" alt="logo" />
            <span className={styles.headerTitle}>Business Card Maker</span>
          </header>
          <section className={styles.loginPage}>
            <span className={styles.loginTitle}>Login</span>
            <button className={styles.loginBtn}>Google</button>
            <button className={styles.loginBtn}>Github</button>
          </section>
          <footer className={styles.footer}>
            <span>Code your dream</span>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Login;
