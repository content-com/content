import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home/Home.module.css";

const Home = () => {
  return (
    <main className={styles.landingMain}>
      <div className={styles.firstSectionHome}>
        <div className={styles.firstLeftSectionHome}>
          <div className={styles.principalTextHome}>
            <p className={styles.headPhrase}>
              <div className={styles.headPhrase__title}>
              <p>Contenido</p>
              <p>&nbsp;para</p>
              </div>
              <p>cada audiencia</p>
              </p>
            <div className={styles.subHeadPhrase}>
              <p>
                Una plataforma donde creadores y anunciantes se
                encuentran. 
              </p>
              <p>
                Consigue visibilidad ante miles de anunciantes.
                Encuentra al creador de
              </p>
              <p>
                contenido indicado utilizando nuestras
                analíticas avanzadas.  
              </p> 
            </div>
          </div>
          <div className={styles.firstSectionButtons}>
            <Link href="/register">
              <a className={styles.firstSectionLeftButton}>
                <span className={styles.buttonText}>Soy creador&nbsp;</span>
                <Image
                  width="24"
                  height="24"
                  alt="arrow"
                  src="/SoyCreadorButtonVector.svg"
                ></Image>
              </a>
            </Link>
            <Link href="/register">
              <a className={styles.firstSectionRightButton}>
                <span className={styles.buttonText}>Busco Creadores</span>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            layout="fixed"
            width="476.17"
            height="600"
            alt="Profile navbar icon"
            src="/Hero_Ilustration.svg"
          ></Image>
        </div>
      </div>
    </main>
  );
};

export default Home;
