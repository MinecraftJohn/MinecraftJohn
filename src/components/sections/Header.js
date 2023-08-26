import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../logo/Logo";
import NavigationIcon from "../icons/NavigationIcon";
import DismissIcon from "../icons/DismissIcon";

function Header({ mySocialMedia }) {
  const closeMenu = () => {
    setIsScreenMobile(false);
    toggleIsOpenMenu(false);
  };
  const handleScreenChange = () => {
    window.innerWidth < 768 ? setIsScreenMobile(true) : closeMenu();
  };
  window.onload = handleScreenChange;
  window.onresize = handleScreenChange;
  const navigations = [
    { id: 1, name: "home" },
    { id: 2, name: "projects" },
    { id: 3, name: "experiences" },
    { id: 4, name: "about" },
    { id: 5, name: "contact" },
  ];
  let idelay = 0.3;
  const [isOpenMenu, toggleIsOpenMenu] = useState(false);
  const [isScreenMobile, setIsScreenMobile] = useState(false);
  const [isStickyHeader, setStickyHeader] = useState(false);
  window.onscroll = () => {
    const height = document.querySelector("#home").scrollHeight;
    let calcPerc = height * 0.16;
    document.querySelector("html").scrollTop > height - calcPerc ? setStickyHeader(true) : setStickyHeader(false);
  };
  return (
    <header
      className={`${
        isStickyHeader ? "fixed backdrop-blur-xl bg-white/95 !h-20 border-b border-gray-300" : "absolute"
      } flex justify-center md:h-40 h-20 w-full z-10 header-container`}
    >
      <div className="flex justify-between items-center h-full w-[72rem] max-w-[90%]">
        {!isOpenMenu && (
          <motion.section
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            <Link to="home" smooth={true} duration={400} title="John Napoles" className="cursor-pointer">
              <Logo
                className={"fill-none h-[0.9375rem] md:h-5"}
                fill={isStickyHeader ? "url(#paint0_linear_840_2)" : "#ffffff"}
              />
            </Link>
          </motion.section>
        )}

        {isScreenMobile ? (
          <button
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.2 }}
            type="button"
            title={isOpenMenu ? "Close" : "Navigation"}
            onClick={() => toggleIsOpenMenu(!isOpenMenu)}
            className={`h-8 w-8 rounded ${isStickyHeader ? "hover:bg-[#24292f]/10" : "hover:bg-white/10"} ${
              isOpenMenu && "fixed top-6 right-[5%] hover:!bg-[#24292f]/10 z-10"
            } active:opacity-60`}
          >
            <NavigationIcon
              className={`fill-none h-5 m-auto ${isOpenMenu && "hidden"}`}
              fill={isStickyHeader ? "currentColor" : "#ffffff"}
            />
            <DismissIcon className={`fill-none h-5 m-auto ${isOpenMenu ? "block" : "hidden"}`} fill={"currentColor"} />
          </button>
        ) : (
          <ul className="flex flex-col md:flex-row md:gap-8">
            {navigations.map((navigation) => {
              return (
                <motion.li
                  initial={{ y: -16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: (idelay += 0.1), duration: 0.2 }}
                  key={navigation.id}
                >
                  <Link
                    to={navigation.name}
                    smooth={true}
                    offset={-144}
                    duration={400}
                    className={`${
                      !isStickyHeader && "text-white"
                    } text-sm capitalize select-none hover:underline active:opacity-60 cursor-pointer`}
                  >
                    {navigation.name}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        )}
      </div>
      {isOpenMenu && (
        <div onClick={() => toggleIsOpenMenu(false)} className="fixed top-0 left-0 bg-black/60 w-full h-[100dvh]"></div>
      )}
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            initial={{ x: "75%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 right-0 flex flex-col justify-between bg-white w-3/4 h-[100dvh] pb-5"
          >
            <div>
              <section className="flex items-center h-20 pl-[calc(5%+1rem)]">
                <Link
                  to="home"
                  smooth={true}
                  duration={400}
                  onClick={() => toggleIsOpenMenu(false)}
                  title="John Napoles"
                  className="cursor-pointer"
                >
                  <Logo className={"fill-none h-[0.9375rem] md:h-5"} fill={"url(#paint0_linear_840_2)"} />
                </Link>
              </section>
              <ul className="pl-[5%] pr-[5%]">
                {navigations.map((navigation) => {
                  return (
                    <li key={navigation.id}>
                      <Link
                        to={navigation.name}
                        smooth={true}
                        offset={-144}
                        duration={400}
                        onClick={() => toggleIsOpenMenu(false)}
                        className="flex items-center text-sm capitalize h-10 pl-4 select-none cursor-pointer rounded hover:bg-[#24292f]/10 active:opacity-60"
                      >
                        {navigation.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul className="flex pl-[calc(5%+0.125rem)]">
              {mySocialMedia.map((social) => {
                return (
                  <li key={social.id}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="flex justify-center items-center h-10 w-10 rounded hover:bg-[#24292f]/10 active:opacity-60"
                    >
                      {social.iconHeader}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
