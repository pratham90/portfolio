import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToAbout = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        scroller.scrollTo("about", {
          smooth: true,
          duration: 500,
          offset: -60,
        });
      }, 100);
    } else {
      scroller.scrollTo("about", {
        smooth: true,
        duration: 500,
        offset: -60,
      });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      scroll.scrollToTop({ duration: 500 });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="bg-transparent z-10 fixed backdrop-blur h-15 w-full overflow-hidden flex justify-between items-center sm:text-lg text-md text-white px-5 sm:px-10 md:px-20">
      <ul className="flex gap-5 sm:gap-10 md:gap-17">
        <li className="hover:underline cursor-pointer" onClick={handleHomeClick}>
          Home
        </li>
        <Link to="/projects">
          <li className="hover:underline">Projects</li>
        </Link>
        <li
          onClick={handleScrollToAbout}
          className="hover:underline cursor-pointer"
        >
          About me
        </li>
      </ul>
      <div className="flex gap-5 sm:gap-6 md:gap-8">
        <a href="mailto:prathamrathore2004@gmail.com" className="text-xl">
          <IoMail />
        </a>
        <a href="https://github.com/pratham90" className="text-xl">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pratham-rathore-32074a250/"
          className="text-xl"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
