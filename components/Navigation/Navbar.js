import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <a>Content.</a>
      </Link>
      <div>
        {/* <Link href="/profile">
          <a>
            <Image
              width="20"
              height="20"
              alt="Profile navbar icon"
              src="/profile.svg"
            ></Image>
          </a>
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;

