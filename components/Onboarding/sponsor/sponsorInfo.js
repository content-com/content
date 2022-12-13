import Image from "next/image";
import styles from "../../../styles/Onboarding/Sponsor/SponsorInfo.module.css"

const SponsorInfo = () => {
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
                    <div className={styles.progressBars}>
                        <div className={styles.sponsorInformation}>
                            Información de la marca
                            <div className={styles.barsDiv}>
                                <div className={styles.internalProgressBar}></div>
                                <div className={styles.internalProgressBar}></div>
                            </div>
                        </div>
                        <div className={styles.sponsorContent}>
                            Contenido
                            <div className={styles.barsDiv}>
                                <div className={styles.internalProgressBar}></div>
                                <div className={styles.internalProgressBar}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.informationAndHeroPicture}>
                    <div className={styles.information}>
                        <div className={styles.title}>
                            Queremos saber más sobre tu marca...
                            <div className={styles.subTitle}>
                                Necesitamos algunos datos para poder ayudarte a conseguir los creadores de contenido que estás buscando.
                            </div>
                        </div>
                        <div className={styles.sponsor_nameAndDescription}>
                            <div className={styles.sponsor_name}>
                                <a className={styles.sponsor_name_text}>Nombre de la marca</a>
                                <input className={styles.sponsor_name_input} type="text" placeholder="Ingresa el nombre de tu marca"></input>
                            </div>
                            <div className={styles.sponsor_description}>
                                <div className={styles.sponsor_description_text}>
                                    <a>Descripción</a>
                                    <a>Máx. 300 caracteres</a>
                                </div>
                                <textarea className={styles.sponsor_description_input} type="text" placeholder="Cuéntanos sobre tu marca."></textarea>
                            </div>
                            <button className={styles.continueButton}>Continuar</button>
                        </div>
                    </div>
                    <div className={styles.heroPicture}>
                        <Image
                            width="446"
                            height="527"
                            alt="arrow"
                            src="/sponsorOnboardingHero.svg"
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorInfo;

