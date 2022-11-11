import Image from "next/image";

import styles from "../../styles/Form/Form.module.css";

const Form = () => {
  return (
    <div className={styles.form}>
      <div className={styles.formHeader}>
        <h2>Create account</h2>
        <h4>Connect with Google or Sign up with your Email.</h4>
      </div>
      <button className={styles.formButtonGoogle}>
        <Image
          width="20"
          height="20"
          alt="Profile navbar icon"
          src="/logo-google.svg"
        ></Image>
        <p>Sign up with Google</p>
      </button>
      <p>or Sign up with Email</p>
      <div className={styles.formRegister}>
        <form className={styles.formForm}>
          <div className={styles.formUserBox}>
            <label>Full Name</label>
            <input type="text" required />
          </div>
          <div className={styles.formUserBox}>
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className={styles.formUserBox}>
            <label>Password</label>
            <input type="password" required />
          </div>
          <button className={styles.formButtonSubmit}>Sign up</button>
        </form>
        <p>
          By continuing you accept our standard terms and conditions and our
          privacy policy.
        </p>
        <h3>Already have an account? Log in</h3>
      </div>
    </div>
  );
};

export default Form;
