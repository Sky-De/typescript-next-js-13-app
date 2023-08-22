"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(false);

  const handleAuth = () => {
    // setUser(!user);
    console.log("DOne");
    router.push("/auth", { scroll: false });
  };

  const handleHomeBtn = () => {
    router.push("/", { scroll: false });
  };

  return (
    <header className="border-1 border-purple-500">
      <div className="header_content max-w-1400 mx-auto flex items-center gap-3 py-1 px-3 border border-red-400">
        <div className="logo red" onClick={handleHomeBtn}>
          LOGO
        </div>
        <button
          onClick={handleAuth}
          className="authBtn ml-auto  px-3 py-1 rounded-lg"
        >
          {user ? "LogOut" : "LogIn"}
        </button>
        {user && (
          <button className="authBtn px-3 py-1 rounded-lg">Profile</button>
        )}
      </div>
    </header>
  );
};

export default Header;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMenuHandler = (): void => {
    setIsOpen(!isOpen);
  };
  return <nav>nav</nav>;
};
