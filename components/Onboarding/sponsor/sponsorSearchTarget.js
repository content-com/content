import Image from "next/image";
import styles from "../../../styles/Onboarding/Sponsor/SponsorSearchTarget.module.css";

const SponsorSearchTarget = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.form}>
                <div className={styles.crumbsNavbar}>
                    <div className={styles.arrowAndBackButton}>
                        <Image
                            width="5"
                            height="9"
                            alt="arrow"
                            src="/arrowRightButton.svg"
                        ></Image>
                        <button className={styles.backButton}>Atrás</button>
                    </div>
                    <div className={styles.sponsorInformation}>
                        Información de la marca
                        <div className={styles.sponsorInformation__progressBars}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className={styles.sponsorContent}>
                        Contenido
                        <div className={styles.sponsorContent__progressBars}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.informationAndHeroPicture}>
                    <div className={styles.information}>
                        <div className={styles.title}>
                            Cuéntanos qué tipo de contenido buscas.
                            <div className={styles.subTitle}>
                                Lorem ipsum dolor sit amet consectetur. Etiam risus et semper et sed cursus risus. Massa proin at leo maecenas ipsum platea risus dui mi.
                            </div>
                        </div>

                        <div className={styles.sponsor_description}>
                            <div className={styles.sponsor_tags_text}>
                                <a>Tags</a>
                            </div>
                            <div className={styles.sponsor_tags_input} type="text"></div>
                        </div>
                        <div className={styles.sponsor_tags_buttons}>
                            <button>Gaming</button>
                            <button>Educación</button>
                            <button>Humor</button>
                            <button>Deportes</button>
                            <button>Cocina</button>
                            <button>Arte</button>
                            <button>Viajes</button>
                            <button>Finanzas</button>
                            <button>Cultura</button>
                            <button>Negocios</button>
                            <button>Tecnología</button>
                            <button>Porrongo</button>
                            <button>Nazi</button>
                            <button>Trabas</button>
                            <button>Tusi</button>
                            <button>Música</button>
                        </div>

                        <button className={styles.continueButton}>Continuar</button>

                    </div>
                    <div className={styles.heroPicture}>
                        <Image
                            width="446"
                            height="527"
                            alt="sponsorOnboardingContentHero"
                            src="/sponsorOnboardingContentHero.svg"
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorSearchTarget;


