"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer py-10 w-full bg-black text-white flex items-center">
      <h6 className="footer__hero ml-4">skyDe</h6>
      <div className="footer__links w-full flex items-center gap-10 flex-col md:flex-row md:justify-center">
        <Link
          target="_blank"
          className="footer__links--item text-5xl"
          href="https://twitter.com/SkyDe1991?t=b2SJxGA4wmHwwgxDUUtE8Q&s=09"
        >
          <i className="bx bxl-twitter"></i>
        </Link>

        <Link
          target="_blank"
          className="footer__links--item text-5xl"
          href="https://www.linkedin.com/in/sky-de-763248228"
        >
          <i className="bx bxl-linkedin-square"></i>
        </Link>

        <Link
          target="_blank"
          className="footer__links--item text-5xl"
          href="https://github.com/Sky-De"
        >
          <i className="bx bxl-github"></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
