import { useState } from "react";
import Logo from "./assets/svg/Logo";
import NavigationIcon from "./assets/svg/NavigationIcon";
import DismissIcon from "./assets/svg/DismissIcon";
import { Link } from "react-scroll";

function Header({ isShowHeader }) {
  const navigations = [
    { id: 1, name: "home" },
    { id: 2, name: "projects" },
    { id: 3, name: "experiences" },
    { id: 4, name: "about" },
    { id: 5, name: "contact" },
  ];
  const [isOpenMenu, toggleIsOpenMenu] = useState(false);
  const handleMenu = () => {
    toggleIsOpenMenu(!isOpenMenu);
  };
  return (
    <header
      className={`${
        isShowHeader ? "fixed backdrop-blur-xl bg-white/95 !h-20 border-b border-gray-300" : "absolute"
      } flex justify-center md:h-40 h-20 w-full z-10 header-container`}
    >
      <div className="flex justify-between items-center h-full w-[72rem] max-w-[90%]">
        <section>
          <Link
            to="home"
            smooth={true}
            duration={400}
            title="John Napoles"
            className={`${isOpenMenu ? "fixed top-[2.0625rem] left-[30%] z-10" : null} cursor-pointer`}
          >
            <Logo
              className={"fill-none h-[0.9375rem] md:h-5"}
              fill={`${isShowHeader || isOpenMenu ? "url(#paint0_linear_840_2)" : "#ffffff"}`}
            />
          </Link>
        </section>
        <section>
          <div className={isOpenMenu ? "fixed top-0 right-0 h-screen w-full bg-black/60" : null}></div>
          <ul
            className={`${
              isOpenMenu ? "fixed top-0 right-0 bg-white h-screen w-3/4 pt-20 px-[5%]" : "hidden"
            } gap-8 md:flex`}
          >
            {navigations.map((navigation) => {
              return (
                <li key={navigation.id}>
                  <Link
                    to={navigation.name}
                    smooth={true}
                    offset={-144}
                    duration={400}
                    className={`${isShowHeader ? null : "text-white"} ${
                      isOpenMenu
                        ? "flex items-center !text-current !no-underline h-10 -ml-4 pl-4 rounded hover:bg-[#24292f]/10"
                        : null
                    } text-sm capitalize select-none hover:underline active:opacity-60 cursor-pointer`}
                  >
                    {navigation.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            title={isOpenMenu ? "Close" : "Navigation"}
            onClick={handleMenu}
            className={`h-8 w-8 rounded ${isShowHeader ? "hover:bg-[#24292f]/10" : "hover:bg-white/10"} ${
              isOpenMenu ? "fixed top-[1.4375rem] right-[5%] hover:!bg-[#24292f]/10" : null
            } active:opacity-60 md:hidden`}
          >
            <NavigationIcon
              className={`fill-none h-5 m-auto ${isOpenMenu ? "hidden" : null}`}
              fill={isShowHeader ? "currentColor" : "#ffffff"}
            />
            <DismissIcon className={`fill-none h-5 m-auto ${isOpenMenu ? "block" : "hidden"}`} fill={"currentColor"} />
          </button>
        </section>
      </div>
    </header>
  );
}

export default Header;
