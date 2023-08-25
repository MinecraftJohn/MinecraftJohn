import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Logo from "../logo/Logo";
import NavigationIcon from "../icons/NavigationIcon";
import DismissIcon from "../icons/DismissIcon";

function Header({ mySocialMedia }) {
  const navigations = [
    { id: 1, name: "home" },
    { id: 2, name: "projects" },
    { id: 3, name: "experiences" },
    { id: 4, name: "about" },
    { id: 5, name: "contact" },
  ];
  // const [isOpenMenu, toggleIsOpenMenu] = useState(false);
  // const openMenu = () => {
  //   toggleIsOpenMenu(true);
  // };
  // const closeMenu = () => {
  //   toggleIsOpenMenu(false);
  // };
  // window.onresize = () => (window.innerWidth > 768 ? closeMenu() : null);
  const [isStickyHeader, setShowHeader] = useState(false);
  window.onscroll = () => {
    const height = document.querySelector("#home").scrollHeight;
    let calcPerc = height * 0.16;
    document.querySelector("html").scrollTop > height - calcPerc ? setShowHeader(true) : setShowHeader(false);
  };
  return (
    <header
      className={`${
        isStickyHeader ? "fixed backdrop-blur-xl bg-white/95 !h-20 border-b border-gray-300" : "absolute"
      } flex justify-center md:h-40 h-20 w-full z-10 header-container`}
    >
      <div className="flex justify-between items-center h-full w-[72rem] max-w-[90%]">
        <motion.section initial={{ y: -32, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <Link to="home" smooth={true} duration={400} title="John Napoles" className="cursor-pointer">
            <Logo
              className={"fill-none h-[0.9375rem] md:h-5"}
              fill={`${isStickyHeader ? "url(#paint0_linear_840_2)" : "#ffffff"}`}
            />
          </Link>
        </motion.section>
        <ul className="flex flex-col md:flex-row md:gap-8">
          {navigations.map((navigation) => {
            return (
              <li key={navigation.id}>
                <Link
                  to={navigation.name}
                  smooth={true}
                  offset={-144}
                  duration={400}
                  // onClick={() => toggleIsOpenMenu(false)}
                  className={`${
                    isStickyHeader ? null : "text-white"
                  } text-sm capitalize select-none hover:underline active:opacity-60 cursor-pointer`}
                >
                  {navigation.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
    // <header
    //   className={`${
    //     isStickyHeader ? "fixed backdrop-blur-xl bg-white/95 !h-20 border-b border-gray-300" : "absolute"
    //   } flex justify-center md:h-40 h-20 w-full z-10 header-container`}
    // >
    //   <div className="flex justify-between items-center h-full w-[72rem] max-w-[90%]">
    //     <section>
    //       <Link
    //         to="home"
    //         smooth={true}
    //         duration={400}
    //         title="John Napoles"
    //         className={`${isOpenMenu ? "fixed top-[2.0625rem] left-[30%] z-10" : null} cursor-pointer`}
    //       >
    //         <Logo
    //           className={"fill-none h-[0.9375rem] md:h-5"}
    //           fill={`${isStickyHeader || isOpenMenu ? "url(#paint0_linear_840_2)" : "#ffffff"}`}
    //         />
    //       </Link>
    //     </section>
    //     <section>
    //       <div
    //         onClick={openMenu}
    //         className={isOpenMenu ? "fixed top-0 right-0 h-screen w-full bg-black/60" : "hidden"}
    //       ></div>
    //       <motion.ul
    //         initial={{ x: 5 }}
    //         animate={{ x: isOpenMenu ? "-70vw" : null }}
    //         className={`${
    //           isOpenMenu ? "fixed top-0 flex-col justify-between bg-white h-[100dvh] w-3/4 pt-20 pb-6 px-[5%]" : null
    //         } md:flex`}
    //       >
    //         <ul className="flex flex-col md:flex-row md:gap-8">
    //           {navigations.map((navigation) => {
    //             return (
    //               <li key={navigation.id}>
    //                 <Link
    //                   to={navigation.name}
    //                   smooth={true}
    //                   offset={-144}
    //                   duration={400}
    //                   onClick={() => toggleIsOpenMenu(false)}
    //                   className={`${isStickyHeader ? null : "text-white"} ${
    //                     isOpenMenu
    //                       ? "flex items-center !text-current !no-underline h-10 -ml-4 pl-4 rounded hover:bg-[#24292f]/10"
    //                       : null
    //                   } text-sm capitalize select-none hover:underline active:opacity-60 cursor-pointer`}
    //                 >
    //                   {navigation.name}
    //                 </Link>
    //               </li>
    //             );
    //           })}
    //         </ul>
    //         <ul className={isOpenMenu ? "flex -ml-3" : "hidden"}>
    //           {mySocialMedia.map((social) => {
    //             return (
    //               <li key={social.id}>
    //                 <a
    //                   href={social.link}
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                   title={social.name}
    //                   className="flex justify-center items-center h-10 w-10 rounded hover:bg-[#24292f]/10 active:opacity-60"
    //                 >
    //                   {social.iconHeader}
    //                 </a>
    //               </li>
    //             );
    //           })}
    //         </ul>
    //       </motion.ul>
    //       <button
    //         type="button"
    //         title={isOpenMenu ? "Close" : "Navigation"}
    //         onClick={() => toggleIsOpenMenu(!isOpenMenu)}
    //         className={`h-8 w-8 rounded ${isStickyHeader ? "hover:bg-[#24292f]/10" : "hover:bg-white/10"} ${
    //           isOpenMenu ? "fixed top-[1.4375rem] right-[5%] hover:!bg-[#24292f]/10" : null
    //         } active:opacity-60 md:hidden`}
    //       >
    //         <NavigationIcon
    //           className={`fill-none h-5 m-auto ${isOpenMenu ? "hidden" : null}`}
    //           fill={isStickyHeader ? "currentColor" : "#ffffff"}
    //         />
    //         <DismissIcon className={`fill-none h-5 m-auto ${isOpenMenu ? "block" : "hidden"}`} fill={"currentColor"} />
    //       </button>
    //     </section>
    //   </div>
    // </header>
  );
}

export default Header;
