import Link from "next/link";
import Image from 'next/image'
import styles from "../../styles/Home/NavBar/NavBar.module.css";

const Navbar = ({ loggedIn = true }) => {

  console.log(loggedIn)
  return (
    <nav className="navbar">
      <Link href="/">
        <a>Content.</a>
      </Link>
        {
          loggedIn ? (<div className={styles.navBarIconsDivLoggedIn}>
            <Image
              width={24}
              height={24}
              src="/NotificationsIcon.svg"
              alt='notifications icon'
            />
            <Image
              width={24}
              height={24}
              src="/ChatsIcon.svg"
              alt='chats icon'
            />
            <Image
              width={24}
              height={24}
              src="/ProfileIcon.svg"
              alt='profile icon'
            />
          </div>):
          <div className={styles.navBarIconsDiv}>
          <Image
          width={24}
          height={24}
          src="/ProfileIcon.svg"
          alt='notifications icon'
          />
        </div>
        }
    </nav>
  );
};

export default Navbar;

