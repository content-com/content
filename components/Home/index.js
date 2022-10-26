import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home/Home.module.css";

const Home = () => {
  return (
    <main id="landing-main">
      <div className={styles.firstSectionHome}>
        <div className={styles.firstLeftSectionHome}>
          <div className={styles.principalTextHome}>
            <h1>The place to find the best content creators for you</h1>
            <h3>
              Get the most advanced analytics for every creator in the platform
            </h3>
          </div>
          <div className={styles.firstSectionButtons}>
            <Link href="/profile">
              <a className={styles.firstSectionLeftButton}>
                <span>Get Sponsored&nbsp;</span>
                <Image
                  width="24"
                  height="24"
                  alt="arrow"
                  src="/arrowLeftButton.svg"
                ></Image>
              </a>
            </Link>
            <Link href="/profile">
              <a className={styles.firstSectionRightButton}>Find Creators</a>
            </Link>
          </div>
        </div>
        <Image
          width="643"
          height="463"
          alt="Profile navbar icon"
          src="/landing1.svg"
        ></Image>
      </div>
    </main>
  );
};

export default Home;
