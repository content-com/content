import Link from "next/link";
import styles from "../../styles/Auth/SignUp.module.css";

export const Register = ({ handleLogin }) => {
  return (
    <div className={styles.signUp}>
      <div className={styles.signUpFirstContainer}>
        <div className={styles.signUpHeader}>
          <h2>Create account</h2>
          <h4>Sign up with your Email.</h4>
        </div>
        <div className={styles.signUpForm}>
          <div className={styles.signUpUserBox}>
            <label>Full name</label>
            <input type="text" required />
          </div>
          <div className={styles.signUpUserBox}>
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className={styles.signUpUserBox}>
            <label>Password</label>
            <input type="password" required />
          </div>
        </div>
      </div>
      <div className={styles.signUpSecondContainer}>
        <button className={styles.signUpButtonSubmit}>Sign up</button>{" "}
        <p>
          By continuing you accept our standard{" "}
          <Link href="https://www.linkedin.com/company/74515908">
            terms and conditions
          </Link>{" "}
          and our{" "}
          <Link href="https://www.linkedin.com/company/74515908">
            privacy policy
          </Link>
          .
        </p>
        <div className={styles.signUpLogin}>
          <h3>Already have an account? </h3>
          <h3 onClick={handleLogin}>Log in</h3>
        </div>
      </div>
    </div>
  );
};
