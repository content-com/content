import styles from "../../styles/Auth/Login.module.css";

export const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginFirstContainer}>
        <div className={styles.loginHeader}>
          <h2>Login</h2>
          <h4>Sign up with your Email.</h4>
        </div>
        <div className={styles.loginForm}>
          <div className={styles.loginUserBox}>
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className={styles.loginUserBox}>
            <label>Password</label>
            <input type="password" required />
          </div>
        </div>
      </div>
      <div className={styles.loginSecondContainer}>
        <button>Login</button>
      </div>
    </div>
  );
};
