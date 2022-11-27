import Image from "next/image";
import styles from "../../../styles/Profile/ProfileUser.module.css";

const ProfileUser = () => {
  return (
    <div className={styles.bg_profile}>
      <div className={styles.profile}>
        <div className={styles.profileHero}>
          <div className={styles.profileBackgroundImage}>
            <Image
              width="100"
              height="463"
              alt="Profile navbar icon"
              src="/DefaultBackground.svg"
            />
          </div>

          <div className={styles.profileNav}>
            <div className={styles.profileInfo}>
              <div className={styles.profileUserImage}>
                <Image
                  width="240"
                  height="240"
                  alt="Profile navbar icon"
                  src="/ProfileDefaultImage.svg"
                />
              </div>
              <div className={styles.profileUsername}>
                <p>Username</p>
              </div>
              <div className={styles.profileTags}>
                  <div>
                    <p>Gaming</p>
                  </div>
                  <div>
                    <p>IRL</p>
                  </div>
              </div>
            </div>
            <button className={styles.profileConnectButton}>Connect
            <Image
                  width="24"
                  height="24"
                  alt="Profile navbar icon"
                  src="/ConnectButtonIcon.svg"
            />
            </button>    

          </div>

          <div className={styles.profileDescription}>
            <p>About me:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue orci in hendrerit convallis. Nam id tortor nisl. Morbi ac pellentesque purus, nec laoreet neque. Aliquam erat volutpat. Aenean eu leo sem. Pellentesque non condimentum dui. Morbi mauris augue, tristique sit amet mauris at, ultricies viverra ligula. Mauris blandit diam neque, ultricies sodales velit malesuada ut. Aenean interdum urna libero, ac ultrices elit consequat sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
