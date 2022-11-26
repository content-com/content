import Image from "next/image";
import { Login } from "./Login";
import bg from "../../public/backgroundRegister.svg";

import { Register } from "./SignUp";

const Auth = () => {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          backgroundColor: "#F2F2F2",
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image src={bg} layout="fill" objectFit="cover" />
      </div>
      <Register />
      <Login />
    </>
  );
};

export default Auth;
